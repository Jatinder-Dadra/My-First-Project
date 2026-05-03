const manuOpenButton = document.querySelector("#menu-open-button");
const manuClosenButton = document.querySelector("#menu-close-button");

manuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-manu");
});

manuClosenButton.addEventListener("click", () => manuOpenButton.click () );