document.addEventListener('DOMContentLoaded', function () {
  const searchBar = document.getElementById('searchBar');
  const visitButton = document.getElementById('visitButton');

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
  const loginPageUrl = chrome.runtime.getURL('login.html');

  // Open a new tab with the login page
  chrome.tabs.create({ url: loginPageUrl });
  }

  function displayWordLink(word) {
    clearWordLink(); // Clear previous word link if exists

    const wordLink = document.createElement('a');
    wordLink.href = getWordLink(word); // Implement getWordLink function
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
      'TextAI': 'https://yourdomain.com/textai',
      'ImageAI': 'https://yourdomain.com/imageai',
      'SpeechAI': 'https://yourdomain.com/speechai',
      // Add more mappings as needed
    };
  
    // Look up the link for the given word in the mapping
    const link = linkMappings[word];
  
    // Return the link if found, or a default link if not found
    return link || 'https://yourdomain.com/default';
  }
  
});