const links = document.querySelectorAll('.nav-links a');
const currentUrl = window.location.href;

links.forEach(link => {
  if (link.href === currentUrl) {
    link.classList.add('active');
  }
});
