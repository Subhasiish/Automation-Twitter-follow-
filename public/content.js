
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const followUser = async (avatar) => {
  const followButton = avatar.closest('article').querySelector('[data-testid="followButton"]');
  
  if (followButton) {
    // Check if already followed
    const followText = followButton.innerText.toLowerCase();
    if (followText.includes('follow')) {
      // Click the follow button
      followButton.click();
      console.log('Followed user');
      // Wait for 1-3 seconds before continuing to prevent being flagged
      await delay(1000 + Math.random() * 2000);
    }
  }
};

const followAllUsers = async () => {
  const avatars = document.querySelectorAll('article img[srcset][alt="Avatar"]');
  console.log(`Found ${avatars.length} avatars`);

  for (let avatar of avatars) {
    // Hover over each avatar to open the profile pop-up
    avatar.scrollIntoView({ behavior: 'smooth', block: 'center' });
    await delay(500); // Delay to simulate hover and allow the pop-up to appear
    await followUser(avatar);
  }
};

// Check if the "For You" tab is active
if (document.location.href.includes('twitter.com/home')) {
  // Add a floating button
  const button = document.createElement('button');
  button.innerText = 'Follow All';
  button.style.position = 'fixed';
  button.style.bottom = '20px';
  button.style.right = '20px';
  button.style.padding = '10px 20px';
  button.style.backgroundColor = '#1DA1F2';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.borderRadius = '5px';
  button.style.fontSize = '16px';
  button.style.cursor = 'pointer';
  button.style.zIndex = '1000';

  button.addEventListener('click', async () => {
    await followAllUsers();
  });

  document.body.appendChild(button);
}