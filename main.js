import "./scss/main.scss";
const openBtn = document.querySelector('[alt="open-menu"]');
const closeBtn = document.querySelector('[alt="close-menu"]');
const questions = document.querySelectorAll(".question");
const prefLists = document.querySelectorAll(".preference__list");
const summaryItems = document.querySelectorAll(".summary-item");

const prefListsArray = Array.from(prefLists);
const questionsArray = Array.from(questions);

const answerContainer = document.querySelector(".answer");

const menuBtn = document.querySelector(".mobile-menu__buttons");
const menuNav = document.querySelector(".mobile-menu__nav");

const userSelections = {
  drinkType: "",
  beanType: "",
  quantity: "",
  grindOption: "",
  delivery: "",
};

const questionKeys = ["drinkType", "beanType", "quantity", "grindOption", "delivery"];

// Helper function to toggle accordion
function toggleAccordion(questionElement) {
  const questionItem = questionElement.querySelector(".question__item");
  const answer = questionElement.querySelector(".answer");

  questionItem.classList.toggle("active");
  answer.classList.toggle("open");
}

function updatePreferenceUI(index) {
  const currentIndex = prefListsArray[index];
  const toHighlightNum = currentIndex.querySelector(".preference__number");
  const toHighlightItem = currentIndex.querySelector(".preference__item");
  toHighlightNum.classList.add("preference__number--active");
  toHighlightItem.classList.add("preference__item--active");
}

// Menu toggle
menuBtn.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  openBtn.classList.toggle("is-active");
  closeBtn.classList.toggle("is-active");
  menuNav.classList.toggle("open-nav");
});

// Accordion functionality - clicking icons
const questionIcons = document.querySelectorAll(".question__icon");
questionIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const question = icon.closest(".question");
    toggleAccordion(question);
  });
});

// Accordion functionality - clicking titles
const questionTitle = document.querySelectorAll(".question__title");
questionTitle.forEach((q) => {
  q.addEventListener("click", () => {
    const question = q.closest(".question");
    toggleAccordion(question);
  });
});

function getAnswerText(button) {
  return button.querySelector(".answer__title").textContent;
}

// Answer button selection
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

    const chosenText = getAnswerText(btn);
    const category = questionItem.dataset.category;
    userSelections[category] = chosenText;
    updateSummaryUI();
  });
});

// Preference list click - opens matching question
prefListsArray.forEach((preferenceItem) => {
  preferenceItem.addEventListener("click", () => {
    const clickedIndex = prefListsArray.indexOf(preferenceItem);
    const matchingQuestion = questionsArray[clickedIndex];
    toggleAccordion(matchingQuestion);

    // Scroll to the question smoothly
    matchingQuestion.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// updating span
const summaryDrinkTypeEls = document.querySelectorAll(".summary__drinkType");
const summaryBeanTypeEls = document.querySelectorAll(".summary__beanType");
const summaryQuantityEls = document.querySelectorAll(".summary__quantity");
const summaryDeliveryEls = document.querySelectorAll(".summary__delivery");

// function updateSummaryUI() {
//   summaryDrinkTypeEls.forEach((el) => {
//     el.textContent = userSelections.drinkType || "_____";
//   });

//   summaryBeanTypeEls.forEach((el) => {
//     el.textContent = userSelections.beanType || "_____";
//   });

//   summaryQuantityEls.forEach((el) => {
//     el.textContent = userSelections.quantity || "_____";
//   });

//   summaryDeliveryEls.forEach((el) => {
//     el.textContent = userSelections.delivery || "_____";
//   });
// }

function updateSummaryUI() {
  summaryItems.forEach((el) => {
    const summaryClass = [...el.classList].find((cls) => cls.startsWith("summary__"));
    const key = summaryClass.replace("summary__", "");
    el.textContent = userSelections[key] || "_____";

    el.classList.add("summary-update");
    setTimeout(() => el.classList.remove("summary-update"), 300);
  });
}

const planBtn = document.getElementById("plan-btn");
const modal = document.querySelector(".popout");
const errorMessage = document.getElementById("error-message");

function checkAllQuestionsAnswered() {
  return Object.values(userSelections).every((value) => value !== "");
}

planBtn.addEventListener("click", () => {
  if (checkAllQuestionsAnswered()) {
    modal.classList.toggle("popout--active");
    errorMessage.classList.remove("error-message--show");
  } else {
    errorMessage.classList.add("error-message--show");
    setTimeout(() => {
      errorMessage.classList.remove("error-message--show");
    }, 3000);
  }
});

const popout = document.querySelector(".popout");
const modalBox = document.querySelector(".modal");

popout.addEventListener("click", (e) => {
  if (e.target === popout) {
    popout.classList.remove("popout--active");
  }
});

const checkoutBtn = document.getElementById("checkout-btn");

checkoutBtn.addEventListener("click", () => {
  popout.classList.remove("popout--active");
});
