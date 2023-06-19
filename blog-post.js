const copyUrlBtns = document.querySelectorAll('[copy-url]');

copyUrlBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url)
      .then(() => {
        alert('The link is copied');
      })
      .catch(err => {
        alert('Failed to copy');
      });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var goBackButton = document.querySelector('[data-button="go-back"]');
  
  // If button is found
  if (goBackButton) {
      // If there is no previous history
      if (!history.length || history.length <= 1) {
          goBackButton.style.display = 'none';
      } else {
          // Attach click event
          goBackButton.addEventListener('click', function() {
              window.history.back();
          });
      }
  }
});
