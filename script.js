 const toggleButton = document.querySelector('#menu-icon');
const menu = document.querySelector('#nav-menu');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Optional: CSS to show/hide the menu
// .menu { display: none; }
// .menu.active { display: block; 