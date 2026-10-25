import http from "node:http";
import fs from "node:fs";

async function getWsUrl() {
  return new Promise((resolve, reject) => {
    http.get("http://127.0.0.1:9227/json/version", (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          resolve(JSON.parse(data).webSocketDebuggerUrl);
        } catch (e) {
          reject(e);
        }
      });
    }).on("error", reject);
  });
}

function sendCDP(ws, method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = Math.floor(Math.random() * 1000000);
    const handler = (data) => {
      const msg = JSON.parse(data.toString());
      if (msg.id === id) {
        ws.off("message", handler);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }
    };
    ws.on("message", handler);
    ws.send(JSON.stringify({ id, method, params }));
  });
}

async function run() {
  const wsUrl = await getWsUrl();
  const browserWs = new globalThis.WebSocket(wsUrl);

  await new Promise((r) => browserWs.on("open", r));

  const { targetId } = await sendCDP(browserWs, "Target.createTarget", {
    url: "http://127.0.0.1:3000/contact",
  });
  const { sessionId } = await sendCDP(browserWs, "Target.attachToTarget", {
    targetId,
    flatten: true,
  });

  const send = (method, params = {}) =>
    sendCDP(browserWs, "Target.sendMessageToTarget", {
      sessionId,
      message: JSON.stringify({ id: Math.floor(Math.random() * 1000000), method, params }),
    }).then((res) => {
      return res;
    });

  // Let's listen on page target messages
  browserWs.on("message", (raw) => {
    try {
      const parsed = JSON.parse(raw.toString());
      if (parsed.method === "Target.receivedMessageFromTarget" && parsed.params.sessionId === sessionId) {
        const inner = JSON.parse(parsed.params.message);
        if (inner.id && pending.has(inner.id)) {
          const { resolve, reject } = pending.get(inner.id);
          pending.delete(inner.id);
          if (inner.error) reject(inner.error);
          else resolve(inner.result);
        }
      }
    } catch (_) {}
  });

  const pending = new Map();
  function callSession(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = Math.floor(Math.random() * 1000000);
      pending.set(id, { resolve, reject });
      browserWs.send(
        JSON.stringify({
          id: Math.floor(Math.random() * 1000000),
          method: "Target.sendMessageToTarget",
          params: {
            sessionId,
            message: JSON.stringify({ id, method, params }),
          },
        })
      );
    });
  }

  await callSession("Page.enable");
  await callSession("DOM.enable");
  await callSession("Emulation.setDeviceMetricsOverride", {
    width: 1440,
    height: 900,
    deviceScaleFactor: 2,
    mobile: false,
  });

  await callSession("Page.navigate", { url: "http://127.0.0.1:3000/contact" });
  await new Promise((r) => setTimeout(r, 2000));

  // Fill in the form
  await callSession("Runtime.evaluate", {
    expression: `(() => {
      const nameInput = document.getElementById('contact-name');
      const orgInput = document.getElementById('contact-org');
      const emailInput = document.getElementById('contact-email');
      const volInput = document.getElementById('contact-volume');
      const msgInput = document.getElementById('contact-message');
      
      const setVal = (el, val) => {
        el.value = val;
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
      };

      setVal(nameInput, 'Anand Verma');
      setVal(orgInput, 'South Delhi Hospitality Cluster');
      setVal(emailInput, 'sourcing@delhihospitality.org');
      setVal(volInput, '1.5 TPD kitchen waste');
      setVal(msgInput, 'We represent 12 boutique hotels within 8 km of Ghitorni interested in regular segregated waste collection.');
    })()`,
  });

  await new Promise((r) => setTimeout(r, 500));

  // Click submit button
  await callSession("Runtime.evaluate", {
    expression: `(() => {
      const btn = document.querySelector('button[type="submit"]');
      if (btn) btn.click();
    })()`,
  });

  await new Promise((r) => setTimeout(r, 1000));

  // Capture screenshot of the state
  const screenshot = await callSession("Page.captureScreenshot", {
    format: "png",
  });

  fs.writeFileSync(
    "/Users/apple/.gemini/antigravity-ide/brain/f522791d-5a6f-493b-ba0e-662e7ef22047/contact-form-tested.png",
    Buffer.from(screenshot.data, "base64")
  );

  await sendCDP(browserWs, "Target.closeTarget", { targetId });
  browserWs.close();
  console.log("Contact form test complete, screenshot saved to contact-form-tested.png");
}

run().catch(console.error);
