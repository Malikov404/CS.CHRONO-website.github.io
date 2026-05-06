document.querySelectorAll('a[href="#download"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector('#download');
    if (target === null) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
});

document.querySelectorAll('img').forEach((image) => {
  image.addEventListener('error', () => {
    image.style.opacity = '0';
  });
});
