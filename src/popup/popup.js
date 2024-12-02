// This function sends a message to the content script to start the follow process
document.getElementById('follow-all').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "followAll" });
    });
});