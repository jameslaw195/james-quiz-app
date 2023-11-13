const bookmarkIcon = document.querySelector('[data-js="bookmark"]');
const answerButton = document.querySelector('[data-js="answer_button"]');
const answer = document.querySelector('[data-js="answer"]');

bookmarkIcon.addEventListener("click", (e) => {
  if (e.target.src.includes("filled.png")) {
    bookmarkIcon.setAttribute("src", "images/bookmark_transparent.png");
  } else {
    bookmarkIcon.setAttribute("src", "images/bookmark_filled.png");
  }
});

answerButton.addEventListener("click", () => {
  if (answerButton.textContent === "Show answer") {
    answerButton.textContent = "Hide answer";
  } else {
    answerButton.textContent = "Show answer";
  }
  answer.toggleAttribute("hidden");
});

/*

element.addEventListener("event name", function(e))

*/
