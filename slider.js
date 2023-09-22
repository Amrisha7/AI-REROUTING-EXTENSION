document.addEventListener('DOMContentLoaded', function () {
    const options = document.querySelectorAll('.option');
  
    options.forEach((option) => {
      option.addEventListener('click', function () {
        const url = option.getAttribute('data-url');
        if (url) {
          chrome.tabs.create({ url: url });
        }
      });
    });
  });
  