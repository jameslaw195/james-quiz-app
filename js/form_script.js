const form = document.querySelector('[data-js="form"]');
const submitBtn = document.querySelector('[data-js="submit_button"]');

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
