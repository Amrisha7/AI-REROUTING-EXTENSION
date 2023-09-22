document.addEventListener('DOMContentLoaded', function () {
  const searchBar = document.getElementById('searchBar');

  searchBar.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      const searchText = searchBar.value.toLowerCase();
      let redirectUrl;

      // Define redirection URLs for specific keywords
      switch (searchText) {
        case 'picture':
          redirectUrl = 'http://127.0.0.1:5501/page3(picture).html';
          break;
        case 'video':
          redirectUrl = 'http://127.0.0.1:5501/page7(Video).html';
          break;
        case 'music':
          redirectUrl = 'http://127.0.0.1:5501/page6(music).html';
          break;
        case 'text':
        case 'writing':
          redirectUrl = 'http://127.0.0.1:5501/page5(text).html';
          break;
        case 'coding':
          redirectUrl = 'http://127.0.0.1:5501/page9(code).html';
          break;
        default:
          // Handle other keywords or no match
          break;
      }

      // Redirect if a matching URL is found
      if (redirectUrl) {
        chrome.tabs.create({ url: redirectUrl });
      }
    }
  });
});
