import "./scss/main.scss";

const answerContainer = document.querySelector(".answer");

const menuBtn = document.querySelector(".mobile-menu__buttons");

const menuNav = document.querySelector(".mobile-menu__nav");

menuBtn.addEventListener("click", () => {
  openBtn.classList.toggle("is-active");
  closeBtn.classList.toggle("is-active");
  menuNav.classList.toggle("open-nav");
});

// Accordion functionality
const questionIcons = document.querySelectorAll(".question__icon");

questionIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const questionItem = icon.closest(".question__item");
    const answer = questionItem.querySelector(".answer");

    questionItem.classList.toggle("active");
    answer.classList.toggle("open");
  });
});
