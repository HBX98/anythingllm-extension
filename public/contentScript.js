window.addEventListener("message", (event) => {
  if (event.data.type === "NEW_BROWSER_EXTENSION_CONNECTION") {
    browser.runtime.sendMessage({
      action: "newApiKey",
      connectionString: event.data.apiKey,
    });
  }
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getPageContent") {
    sendResponse({ content: document.body.innerText });
  }
});
