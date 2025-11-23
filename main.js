import "./scss/main.scss";

const openBtn = document.querySelector('[alt="open-menu"]');
const closeBtn = document.querySelector('[alt="close-menu"]');

const menuBtn = document.querySelector(".mobile-menu__buttons");

const menuNav = document.querySelector(".mobile-menu__nav");

menuBtn.addEventListener("click", () => {
  openBtn.classList.toggle("is-active");
  closeBtn.classList.toggle("is-active");
  menuNav.classList.toggle("open-nav");
});
