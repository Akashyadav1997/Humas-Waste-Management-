import { mkdir, writeFile } from "node:fs/promises";
import assert from "node:assert/strict";

const tabs = await (await fetch("http://127.0.0.1:9227/json/list")).json();
let tab = tabs.find((item) => item.type === "page");
if (!tab) {
  const newTab = await (await fetch("http://127.0.0.1:9227/json/new?about:blank", { method: "PUT" })).json();
  tab = newTab;
}
assert(tab, "Chrome must expose a page on port 9227");

const socket = new WebSocket(tab.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve);
  socket.addEventListener("error", reject);
});

let nextId = 0;
const pending = new Map();
const consoleErrors = [];

socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (message.id && pending.has(message.id)) {
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) reject(new Error(JSON.stringify(message.error)));
    else resolve(message.result);
  }
  if (message.method === "Runtime.exceptionThrown") {
    consoleErrors.push(message.params.exceptionDetails.text);
  }
  if (message.method === "Runtime.consoleAPICalled" && message.params.type === "error") {
    consoleErrors.push(message.params.args.map((a) => a.value).join(" "));
  }
});

function send(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = ++nextId;
    pending.set(id, { resolve, reject });
    socket.send(JSON.stringify({ id, method, params }));
  });
}

async function evaluate(expression) {
  const result = await send("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  if (result.exceptionDetails) {
    throw new Error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
  }
  return result.result.value;
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function capture(filename, fullPage = true) {
  const { cssContentSize } = await send("Page.getLayoutMetrics");
  const captureParams = {
    format: "png",
    captureBeyondViewport: fullPage,
    ...(fullPage
      ? {
          clip: {
            x: 0,
            y: 0,
            width: cssContentSize.width,
            height: cssContentSize.height,
            scale: 1,
          },
        }
      : {}),
  };
  const result = await send("Page.captureScreenshot", captureParams);
  const buffer = Buffer.from(result.data, "base64");
  await writeFile(`qa/${filename}.png`, buffer);
  await writeFile(`/Users/apple/.gemini/antigravity-ide/brain/f522791d-5a6f-493b-ba0e-662e7ef22047/${filename}.png`, buffer);
  console.log(`Saved screenshot: ${filename}.png (${fullPage ? "full-page" : "viewport"})`);
}

try {
  await mkdir("qa", { recursive: true });
  await send("Page.enable");
  await send("Runtime.enable");
  await send("Network.enable");
  await send("Network.setCacheDisabled", { cacheDisabled: true });
  await send("Log.enable");
  await send("Emulation.setFocusEmulationEnabled", { enabled: true });

  const routes = [
    { path: "", name: "homepage" },
    { path: "project", name: "project" },
    { path: "process", name: "process" },
    { path: "about", name: "about" },
    { path: "partners", name: "partners" },
    { path: "contact", name: "contact" },
  ];

  const viewports = [
    { width: 1440, height: 900, label: "desktop" },
    { width: 768, height: 1024, label: "tablet" },
    { width: 390, height: 844, label: "mobile" },
  ];

  for (const vp of viewports) {
    await send("Emulation.setDeviceMetricsOverride", {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 1,
      mobile: vp.label === "mobile",
    });

    for (const r of routes) {
      const url = `http://127.0.0.1:3000/${r.path}`;
      await send("Page.navigate", { url });

      // Wait for page load and images
      for (let i = 0; i < 40; i++) {
        const loaded = await evaluate('document.readyState === "complete" && Boolean(document.querySelector("h1"))');
        if (loaded) break;
        await delay(100);
      }
      await evaluate('document.fonts.ready.then(() => Promise.all([...document.images].map(img => { img.loading = "eager"; return img.decode().catch(() => {}); })))');
      await delay(300);

      const metrics = await evaluate(`({
        url: location.pathname,
        docWidth: document.documentElement.scrollWidth,
        h1Count: document.querySelectorAll("h1").length,
        brokenImages: [...document.images].filter(i => !i.complete || !i.naturalWidth).map(i => i.src),
        allLinks: [...document.querySelectorAll("a[href]")].map(a => a.getAttribute("href")),
      })`);

      assert.equal(metrics.docWidth, vp.width, `Horizontal overflow on /${r.path} at ${vp.width}px (got ${metrics.docWidth}px)`);
      assert.equal(metrics.h1Count, 1, `Exactly one H1 required on /${r.path}`);
      assert.equal(metrics.brokenImages.length, 0, `Broken images found on /${r.path}: ${metrics.brokenImages.join(", ")}`);

      const screenshotName = `${r.name}-${vp.label}`;
      await capture(screenshotName, true);

      // On desktop, also capture the above-the-fold first viewport
      if (vp.label === "desktop" && r.name === "homepage") {
        await capture("homepage-desktop-fold", false);
      }
    }
  }

  // Mobile navigation drawer test
  await send("Emulation.setDeviceMetricsOverride", {
    width: 390,
    height: 844,
    deviceScaleFactor: 1,
    mobile: true,
  });
  await send("Page.navigate", { url: "http://127.0.0.1:3000/" });
  await delay(400);

  // Click hamburger menu
  const menuOpened = await evaluate(`(() => {
    const btn = document.querySelector(".hamburger");
    if (!btn) return false;
    btn.click();
    return true;
  })()`);
  assert(menuOpened, "Hamburger button must exist");
  await delay(200);

  const isExpanded = await evaluate('document.querySelector(".hamburger")?.getAttribute("aria-expanded")');
  assert.equal(isExpanded, "true", "Mobile menu must be expanded");
  await capture("mobile-menu-open", false);

  // Verify all 6 links in the drawer
  const drawerLinks = await evaluate(`[...document.querySelectorAll("#mobile-navigation a")].map(a => a.getAttribute("href"))`);
  console.log("Drawer links:", drawerLinks);
  assert(drawerLinks.includes("/"), "Drawer must have /");
  assert(drawerLinks.includes("/about"), "Drawer must have /about");
  assert(drawerLinks.includes("/project"), "Drawer must have /project");
  assert(drawerLinks.includes("/process"), "Drawer must have /process");
  assert(drawerLinks.includes("/partners"), "Drawer must have /partners");
  assert(drawerLinks.includes("/contact"), "Drawer must have /contact");

  console.log("\nALL VERIFICATION AND SCREENSHOT CAPTURES PASSED SUCCESSFULLY!");
  socket.close();
  process.exit(0);
} catch (err) {
  console.error("Verification failed:", err);
  socket.close();
  process.exit(1);
}
