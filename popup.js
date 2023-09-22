document.addEventListener('DOMContentLoaded', function () {
  const searchBar = document.getElementById('searchBar');
  const visitButton = document.getElementById('visitButton');
  const websiteLink = document.getElementById('website-link'); // Added

  // Mapping between user-input words and predefined words
  const wordMappings = {
    'textai': 'TextAI',
    'imageai': 'ImageAI',
    'speechai': 'SpeechAI',
    // Add more mappings as needed
  };

  searchBar.addEventListener('input', function () {
    const userInput = searchBar.value.toLowerCase();
    const predefinedWord = wordMappings[userInput];

    if (predefinedWord) {
      displayWordLink(predefinedWord);
    } else {
      clearWordLink();
    }
  });

  visitButton.addEventListener('click', function () {
    openLoginPage();
  });

  function openLoginPage() {
    // Implement your redirection logic here
    // Change the URL to your actual login page
    const loginPageUrl = 'http://127.0.0.1:5501/page1.html'; // Replace with your actual login page URL

    // Update the link's href with the login page URL
    websiteLink.href = loginPageUrl;

    // Open the link in a new tab
    websiteLink.click();
  }

  function displayWordLink(word) {
    clearWordLink();

    const wordLink = document.createElement('a');
    wordLink.href = getWordLink(word);
    wordLink.textContent = `Learn more about ${word}`;
    searchBar.parentNode.appendChild(wordLink);
  }

  function clearWordLink() {
    const existingWordLink = searchBar.parentNode.querySelector('.word-link');
    if (existingWordLink) {
      existingWordLink.remove();
    }
  }

  function getWordLink(word) {
    // Define a mapping between predefined words and their corresponding links
    const linkMappings = {
      'TextAI': 'https://chat.openai.com/c/2e337fb4-2185-4cf6-b9ec-46748c78bb0d',
      'ImageAI': 'https://yourdomain.com/imageai',
      'SpeechAI': 'https://yourdomain.com/speechai',
      // Add more mappings as needed
    };

    // Look up the link for the given word in the mapping
    const link = linkMappings[word];

    // Return the link if found, or a default link if not found
    return link || 'http://127.0.0.1:5501/page1.html';
  }
});
