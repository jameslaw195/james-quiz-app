const bookmarkIcon = document.querySelector('[data-js="bookmark"]');
const answerButton = document.querySelector('[data-js="answer_button"]');
const answer = document.querySelector('[data-js="answer"]');

bookmarkIcon.addEventListener("click", () => {
  bookmarkIcon.setAttribute(src);
});

answerButton.addEventListener("click", () => {
  if (answerButton.textContent === "Show answer") {
    answerButton.textContent = "Hide answer";
  } else {
    answerButton.textContent = "Show answer";
  }
  answer.toggleAttribute("hidden");
});
