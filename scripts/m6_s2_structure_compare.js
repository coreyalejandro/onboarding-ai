// Highlight framework grid items sequentially
const keys = Array.from(document.querySelectorAll('.fw-item'));
keys.forEach((el, idx) => setTimeout(() => el.classList.add('active'), 800 + idx * 250));
