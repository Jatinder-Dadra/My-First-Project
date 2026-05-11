const cartIcon = document.querySelector('#cart-icon');
const navMenu = document.querySelector('#nav-menu');

cartIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    cartIcon.classList.toggle('icon-active');
});