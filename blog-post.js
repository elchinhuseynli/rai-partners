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
