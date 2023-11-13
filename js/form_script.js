const form = document.querySelector('[data-js="form"]')
const submitBtn = document.querySelector('data-js="submit_button"]')

submitBtn.addEventListener("input", (e) => {
    e.preventDefault();

    const formElements = e.target.elements

})

submitBtn.addEventListener("click", (e)) {
    const card = document.createElement("card");
    document.body.append(card)
}