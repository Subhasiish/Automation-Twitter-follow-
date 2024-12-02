import React, { useState } from "react";

const App = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowAll = () => {
    setIsFollowing(true);
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        func: followAllUsers,
      });
    });
  };

  const handleStop = () => {
    setIsFollowing(false);
    console.log("Follow process stopped.");
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1>Twitter Auto-Follower</h1>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: isFollowing ? "#ff4d4d" : "#1da1f2",
        }}
        onClick={isFollowing ? handleStop : handleFollowAll}
      >
        {isFollowing ? "Stop Following" : "Start Following"}
      </button>
    </div>
  );
};

// Script logic to follow users
const followAllUsers = async () => {
  const users = document.querySelectorAll('div[data-testid="UserCell"]');
  for (const user of users) {
    const followButton = user.querySelector('div[role="button"]');
    if (followButton?.textContent === "Follow") {
      followButton.click();
      console.log("Followed a user.");
      await new Promise((r) => setTimeout(r, Math.random() * 2000 + 1000));
    }
  }
};

export default App;
