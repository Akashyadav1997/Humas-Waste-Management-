// Run with Node 22+ after starting the site and an isolated Chrome instance:
// google-chrome --headless --remote-debugging-port=9227 --user-data-dir=/tmp/humus-qa
// node scripts/verify-browser.mjs
import { mkdir, writeFile } from "node:fs/promises";
import assert from "node:assert/strict";

const tabs = await (await fetch("http://127.0.0.1:9227/json/list")).json();
const tab = tabs.find((item) => item.type === "page");
assert(tab, "Chrome must expose a page on port 9227");
const socket = new WebSocket(tab.webSocketDebuggerUrl);
await new Promise((resolve, reject) => { socket.addEventListener("open", resolve); socket.addEventListener("error", reject); });
let nextId = 0;
const pending = new Map();
const errors = [];
socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (message.id && pending.has(message.id)) {
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) reject(new Error(JSON.stringify(message.error)));
    else resolve(message.result);
  }
  if (message.method === "Runtime.exceptionThrown") errors.push(message.params.exceptionDetails.text);
  if (message.method === "Runtime.consoleAPICalled" && message.params.type === "error") errors.push(message.params.args.map(arg => arg.value).join(" "));
  if (message.method === "Log.entryAdded" && message.params.entry.level === "error") errors.push(message.params.entry.text);
});
function send(method, params = {}) {
  return new Promise((resolve, reject) => { const id = ++nextId; pending.set(id, { resolve, reject }); socket.send(JSON.stringify({ id, method, params })); });
}
async function evaluate(expression) {
  const result = await send("Runtime.evaluate", { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
  return result.result.value;
}
const delay = (time) => new Promise(resolve => setTimeout(resolve, time));
async function screenshot(name, fullPage = true) {
  const { cssContentSize } = await send("Page.getLayoutMetrics");
  const capture = await send("Page.captureScreenshot", {
    format: "png", captureBeyondViewport: fullPage,
    ...(fullPage ? { clip: { x: 0, y: 0, width: cssContentSize.width, height: cssContentSize.height, scale: 1 } } : {}),
  });
  await writeFile(`qa/${name}.png`, Buffer.from(capture.data, "base64"));
}

try {
  await mkdir("qa", { recursive: true });
  await send("Page.enable");
  await send("Runtime.enable");
  await send("Log.enable");
  await send("Emulation.setFocusEmulationEnabled", { enabled: true });
  await send("Emulation.setEmulatedMedia", { features: [{ name: "prefers-reduced-motion", value: "reduce" }] });
  const checks = [];
  for (const width of [1440, 768, 390, 320]) {
    await send("Emulation.setDeviceMetricsOverride", { width, height: 1000, deviceScaleFactor: 1, mobile: false });
    await send("Page.navigate", { url: "http://127.0.0.1:3000" });
    for (let attempt = 0; attempt < 40; attempt++) {
      if (await evaluate('document.readyState === "complete" && Boolean(document.querySelector("h1"))')) break;
      await delay(150);
    }
    await evaluate('document.fonts.ready.then(() => Promise.all([...document.images].map(image => { image.loading = "eager"; return image.decode().catch(() => {}); })))');
    await delay(350);
    const result = await evaluate(`({
      viewport: innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      h1Count: document.querySelectorAll('h1').length,
      imageFailures: [...document.images].filter(image => !image.complete || !image.naturalWidth).map(image => image.src),
      brokenAnchors: [...document.querySelectorAll('a[href^="#"]')].filter(a => !document.getElementById(a.hash.slice(1))).map(a => a.hash),
      bodyFont: getComputedStyle(document.body).fontFamily,
      headingFont: getComputedStyle(document.querySelector('h1')).fontFamily,
      reducedMotion: getComputedStyle(document.documentElement).scrollBehavior,
      title: document.title
    })`);
    assert.equal(result.documentWidth, width, `Horizontal overflow at ${width}px`);
    assert.equal(result.h1Count, 1);
    assert.equal(result.imageFailures.length, 0, "Images must load");
    assert.equal(result.brokenAnchors.length, 0, "All navigation targets must exist");
    assert.equal(result.reducedMotion, "auto");
    checks.push(result);
    await screenshot(`homepage-${width}`);
    if (width === 1440) await screenshot("desktop-first-screen", false);
    if (width === 390) {
      // Keyboard-only disclosure, focus return, and navigation from the menu.
      await evaluate('document.querySelector(".menu-toggle").focus()');
      await send("Input.dispatchKeyEvent", { type: "keyDown", key: "Enter", code: "Enter", text: "\r", windowsVirtualKeyCode: 13, nativeVirtualKeyCode: 13 });
      await send("Input.dispatchKeyEvent", { type: "keyUp", key: "Enter", code: "Enter", windowsVirtualKeyCode: 13 });
      await delay(100);
      assert.equal(await evaluate('document.querySelector(".menu-toggle").getAttribute("aria-expanded")'), "true");
      await screenshot("mobile-menu-open", false);
      await send("Input.dispatchKeyEvent", { type: "keyDown", key: "Escape", code: "Escape", windowsVirtualKeyCode: 27 });
      await delay(100);
      assert.equal(await evaluate('document.querySelector("#mobile-navigation").hidden'), true);
      assert.equal(await evaluate('document.activeElement === document.querySelector(".menu-toggle")'), true);
      await evaluate('document.querySelector(".menu-toggle").click()');
      await delay(100);
      await evaluate(`document.querySelector('#mobile-navigation a[href="#project"]').click()`);
      await delay(100);
      assert.equal(await evaluate("location.hash"), "#project");
      assert.equal(await evaluate('document.querySelector("#mobile-navigation").hidden'), true);
      await evaluate('document.querySelector(".partner-sources a").click()');
      await delay(100);
      assert.equal(await evaluate("location.hash"), "#contact");
      checks.push({ mobileMenu: "Enter opens; Escape closes and restores focus; navigation closes menu", partnershipCta: "Navigates to contact details pending section" });
    }
  }
  assert.equal(errors.length, 0, `Browser errors: ${errors.join("; ")}`);
  await writeFile("qa/browser-results.json", JSON.stringify({ status: "passed", checks, consoleErrors: errors }, null, 2));
  console.log(JSON.stringify({ status: "passed", viewports: [1440, 768, 390, 320], consoleErrors: errors, screenshots: "qa/", checks }, null, 2));
} catch (error) {
  console.error({ browserErrors: errors });
  throw error;
} finally {
  socket.close();
}
