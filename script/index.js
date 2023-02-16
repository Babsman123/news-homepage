const menu = document.querySelector(".header__menu");
const closeMenu = document.querySelector(".menu-close");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.classList.add("open-nav");
});
closeMenu.addEventListener("click", () => {
  nav.classList.remove("open-nav");
});
