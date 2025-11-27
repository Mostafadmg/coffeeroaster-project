import "./scss/main.scss";
const openBtn = document.querySelector('[alt="open-menu"]');
const closeBtn = document.querySelector('[alt="close-menu"]');
const questions = document.querySelectorAll(".question");
const prefLists = document.querySelectorAll(".preference__list");
const prefListsArray = Array.from(prefLists);
const questionsArray = Array.from(questions);

const answerContainer = document.querySelector(".answer");

const menuBtn = document.querySelector(".mobile-menu__buttons");

const menuNav = document.querySelector(".mobile-menu__nav");

menuBtn.addEventListener("pointerdown", (e) => {
  e.preventDefault(); // prevents ghost clicks on mobile
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

const questionTitle = document.querySelectorAll(".question__title");
questionTitle.forEach((q) => {
  q.addEventListener("click", () => {
    const questionItem = q.closest(".question__item");
    const answer = questionItem.querySelector(".answer");

    questionItem.classList.toggle("active");
    answer.classList.toggle("open");
  });
});

const answerBtn = document.querySelectorAll(".answer__list");
answerBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const questionItem = btn.closest(".question__item");
    const question = btn.closest(".question");
    const siblings = questionItem.querySelectorAll(".answer__list");

    siblings.forEach((b) => b.classList.remove("answer__list--active"));
    btn.classList.add("answer__list--active");

    const index = questionsArray.indexOf(question);
    updatePreferenceUI(index);
  });
});

function updatePreferenceUI(index) {
  const currentIndex = prefListsArray[index];
  const toHighlightNum = currentIndex.querySelector(".preference__number");
  const toHighlightItem = currentIndex.querySelector(".preference__item");
  toHighlightNum.classList.add("preference__number--active");
  toHighlightItem.classList.add("preference__item--active");
}
