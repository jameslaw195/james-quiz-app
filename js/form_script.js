const form = document.querySelector('[data-js="form"]');
const submitBtn = document.querySelector('[data-js="submit_button"]');
const inputTextQuestion = document.querySelector('[data-js="form_question"]');
const characterCounter = document.querySelector(
  '[data-js="character-counter"]'
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

  characterCounter.textContent = `You have ${charCount} characters remaining.`;
});
