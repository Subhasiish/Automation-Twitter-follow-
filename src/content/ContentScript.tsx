// const addFloatingButton = () => {
//     const button = document.createElement('button');
//     button.textContent = 'Follow All';
//     button.style.position = 'fixed';
//     button.style.bottom = '20px';
//     button.style.right = '20px';
//     button.style.backgroundColor = '#1da1f2';
//     button.style.color = '#fff';
//     button.style.padding = '10px 20px';
//     button.style.borderRadius = '5px';
//     button.style.border = 'none';
//     button.style.cursor = 'pointer';
//     document.body.appendChild(button);
  
//     button.addEventListener('click', followAllUsers);
//   };
  
//   const followAllUsers = () => {
//     const users = document.querySelectorAll('div[data-testid="UserCell"]');
//     users.forEach((user, index) => {
//       const followButton = user.querySelector('div[role="button"]');
//       if (followButton && followButton.textContent === 'Follow') {
//         setTimeout(() => {
//           followButton.click();
//           console.log(`Followed user ${index + 1}`);
//         }, index * 2000); // Add delay to mimic human interaction
//       }
//     });
//     console.log("Follow All process completed!");
//   };
  
//   addFloatingButton();
  // Create a button on the page
const createSwitchTabButton = (testid, AppTabBar_Profile_Link) => {
    const button = document.createElement("button");
    // button.textContent = `Switch to ${testid}`;
    // button.style.position = "fixed";
    // button.style.bottom = "20px";
    // button.style.right = "20px";
    // button.style.padding = "10px";
    // button.style.backgroundColor = "#1da1f2";
    // button.style.color = "white";
    // button.style.border = "none";
    // button.style.borderRadius = "5px";
    // button.style.cursor = "pointer";
    button.onclick = () => {
      const tab = document.querySelector(`[data-testid='AppTabBar_Profile_Link']`);
      if (tab) {
        tab.click();
        console.log(`Switched to ${AppTabBar_Profile_Link} tab`);
      } else {
        console.log(`Tab with label "${AppTabBar_Profile_Link}" not found`);
      }
    };
    document.body.appendChild(button);
  };
  
  // Add a button for switching to "For You"
  createSwitchTabButton("profile");
  
  // Add a button for switching to "Following"
  // createSwitchTabButton("Following", "Following");