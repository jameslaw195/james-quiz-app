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
     <h2> ${question} </h2>
     <p> ${answer} </p>
     
    `;
  console.log(card);
  document.body.append(card);
});

inputTextQuestion.addEventListener("input", (e) => {
  e.preventDefault();

  console.dir(e.target.value);

  const textInput = e.target.value;
  const charCount = textInput.length;

  console.log(charCount);

  characterCounter.textContent = charCount;
});

function countCharacters() {
  const inputText = inputTextQuestion.value;
  const charCount = inputText.length;
  characterCounter = charCount;

  return characterCounter;
}
