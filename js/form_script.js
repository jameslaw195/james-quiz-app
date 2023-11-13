const form = document.querySelector('[data-js="form"]');
const submitBtn = document.querySelector('data-js="submit_button"]');

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const formElements = e.target.elements;
  const question = e.target.elements.form_question.value;
  const answer = e.target.elements.form_answer.value;
  const tags = e.target.elements.tags.value;

  const card = document.createElement("card");
  document.body.append(card);

  card.innerHTML = `
     <h2> ${question} </h2>
     <p> ${answer} </p>
     
    `;
});

// submitBtn.addEventListener("click", (e)) {
//     const card = document.createElement("card");
//     document.body.append(card)

//     card.innerHTML = `

//     `

// }
