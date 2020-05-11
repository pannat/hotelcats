const header = document.querySelector(".header");
const burger = header.querySelector(".header__burger");

burger.addEventListener("click", (evt) => {
    evt.preventDefault();
    header.classList.toggle("header--menu-open");
})