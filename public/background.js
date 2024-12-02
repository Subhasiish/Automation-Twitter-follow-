

chrome.runtime.onInstalled.addListener(() => {
    console.log('Twitter/X Auto Follower Extension Installed');
  });
  
  // Message listener (optional for any background tasks)
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'startFollowing') {
      console.log('Starting to follow users on the For You tab.');
      sendResponse({ status: 'success' });
    }
  });
  