const form = document.querySelector('[data-js="form"]');
const submitBtn = document.querySelector('[data-js="submit_button"]');
const inputTextQuestion = document.querySelector('[data-js="form_question"]');
const inputTextAnswer = document.querySelector('[data-js="form_answer"]');
const characterCounterQuestions = document.querySelector(
  '[data-js="character-counter-questions"]'
);
const characterCounterAnswers = document.querySelector(
  '[data-js="character-counter-answers"]'
);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formElements = e.target.elements;
  const question = formElements.form_question.value;
  const answer = formElements.form_answer.value;
  const tags = formElements.tags.value;

  const card = document.createElement("section");
  card.innerHTML = `
     <h2 > ${question} </h2>
     <p> ${answer} </p>
     <span> ${tags} </span>
    `;
  document.body.append(card);
  card.classList.add("card");
});

inputTextQuestion.addEventListener("input", (e) => {
  const textInput = e.target.value;
  const charCount = 150 - textInput.length;

  characterCounterQuestions.textContent = `${charCount} characters remaining`;
});

inputTextAnswer.addEventListener("input", (e) => {
  const textInput = e.target.value;
  const charCount = 150 - textInput.length;

  if (charCount <= 150 && charCount >= 0) {
    characterCounterAnswers.textContent = `${charCount} characters remaining`;
  } else {
    textInput.slice(151);
    characterCounterAnswers.textContent =
      "You have exceeded the character count.";
  }

  //   charCount = (e.target.maxlength.value) - (e.target.value.length);

  // counter.innerHTML = `${charCount} characters remaining`;
  // document.fieldset.append(counter);
});
