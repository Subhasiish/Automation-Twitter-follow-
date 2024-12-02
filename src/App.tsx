// import React from 'react';

// const App = () => {
//   const handleFollowAll = () => {
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//       chrome.scripting.executeScript({
//         target: { tabId: tabs[0].id },
//         func: () => {
//           const followAllUsers = () => {
//             const users = document.querySelectorAll('div[data-testid="UserCell"]');
//             users.forEach((user, index) => {
//               const followButton = user.querySelector('div[role="button"]');
//               if (followButton && followButton.textContent === 'Follow') {
//                 setTimeout(() => followButton.click(), index * 2000);
//               }
//             });
//           };
//           followAllUsers();
//         },
//       });
//     });
//   };

//   return (
//     <div>
//       <h1>Twitter Auto-Follower</h1>
//       <button onClick={handleFollowAll}>Follow All</button>
//     </div>
//   );
// };

// export default App;


import React from 'react';
import './App.css'; // Optional: Import CSS for styling

// This is the main App component for the Chrome extension popup
function App() {
    // This function sends a message to the content script to start the follow process
    const handleFollowAll = () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length > 0) { // Check if there is at least one active tab
                chrome.tabs.sendMessage(tabs[0].id, { action: "followAll" });
            } else {
                console.error("No active tab found.");
                alert("Please open a Twitter tab to use this extension.");
            }
        });
    };

    return (
        <div className="App">
            <h1>Twitter Follow All</h1>
            <button onClick={handleFollowAll}>Follow All</button>
        </div>
    );
}

export default App;