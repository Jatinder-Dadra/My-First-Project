const menuOpenButton = document.querySelector("#menu-open-button");
const menuClosenButton = document.querySelector("#menu-close-button");
const menuList = document.querySelector(".nav-menu");
const links = document.querySelectorAll(".nav-link")

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");    
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click 
());


