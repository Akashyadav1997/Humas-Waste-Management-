import { writeFile } from "node:fs/promises";
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

socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (message.id && pending.has(message.id)) {
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) reject(new Error(JSON.stringify(message.error)));
    else resolve(message.result);
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
  return result.result?.value;
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

await send("Page.enable");
await send("DOM.enable");
await send("Emulation.setDeviceMetricsOverride", {
  width: 1440,
  height: 900,
  deviceScaleFactor: 2,
  mobile: false,
});

console.log("Navigating to http://127.0.0.1:3000/contact...");
await send("Page.navigate", { url: "http://127.0.0.1:3000/contact" });
await delay(1500);

// Populate form fields
console.log("Populating form fields...");
await evaluate(`(() => {
  const nameInput = document.getElementById('contact-name');
  const orgInput = document.getElementById('contact-org');
  const emailInput = document.getElementById('contact-email');
  const volInput = document.getElementById('contact-volume');
  const msgInput = document.getElementById('contact-message');

  const setVal = (el, val) => {
    const proto = el instanceof HTMLTextAreaElement ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype;
    const desc = Object.getOwnPropertyDescriptor(proto, 'value');
    desc.set.call(el, val);
    el.dispatchEvent(new Event('input', { bubbles: true }));
    el.dispatchEvent(new Event('change', { bubbles: true }));
  };

  setVal(nameInput, 'Anand Verma');
  setVal(orgInput, 'South Delhi Hospitality Cluster');
  setVal(emailInput, 'sourcing@delhihospitality.org');
  setVal(volInput, '1.5 TPD kitchen waste');
  setVal(msgInput, 'We represent 12 boutique hotels within 8 km of Ghitorni interested in regular segregated waste collection.');
})()`);

await delay(500);

// Click submit button
console.log("Submitting form...");
await evaluate(`(() => {
  const btn = document.querySelector('button[type="submit"]');
  if (btn) btn.click();
})()`);

// Scroll form into view
await evaluate(`document.querySelector('.disclaimer-box')?.scrollIntoView({ behavior: 'instant', block: 'center' });`);
await delay(500);

// Capture screenshot of the error / fallback state
const { data: errorData } = await send("Page.captureScreenshot", { format: "png" });
await writeFile(
  "/Users/apple/.gemini/antigravity-ide/brain/f522791d-5a6f-493b-ba0e-662e7ef22047/contact-form-tested.png",
  Buffer.from(errorData, "base64")
);

// Now let's test the live success state by mocking window.fetch and providing a temporary access key
console.log("Testing live success state...");
await evaluate(`(() => {
  window.fetch = async (url, options) => {
    return {
      ok: true,
      json: async () => ({ success: true, message: "Form submitted successfully" })
    };
  };
})()`);

// Set a dummy key in the client process.env so it submits through fetch
await evaluate(`(() => {
  // Click edit form
  const editBtn = document.querySelectorAll('button')[1];
  if (editBtn) editBtn.click();
})()`);

await delay(300);

// Set window env override or trigger submit
await evaluate(`(() => {
  window.__WEB3FORMS_KEY = 'test-web3forms-key-uuid';
})()`);

// Click submit button
await evaluate(`(() => {
  const btn = document.querySelector('button[type="submit"]');
  if (btn) btn.click();
})()`);

await delay(1200);

// Capture screenshot of the success state
const { data: successData } = await send("Page.captureScreenshot", { format: "png" });
await writeFile(
  "/Users/apple/.gemini/antigravity-ide/brain/f522791d-5a6f-493b-ba0e-662e7ef22047/contact-form-success.png",
  Buffer.from(successData, "base64")
);

console.log("Success screen captured to contact-form-success.png");
socket.close();
