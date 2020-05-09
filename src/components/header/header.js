const burger = document.querySelector(".header__burger");
const header = document.querySelector(".header");

burger.addEventListener("click", (evt) => {
    evt.preventDefault();
    header.classList.toggle("header--menu-open");
})