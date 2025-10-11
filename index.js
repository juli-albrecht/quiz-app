const submitButton = document.querySelector("[data-js=submitButton]");
const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElement = event.target.elements;
  console.log(formElement.inputQuestion.value);
  console.log(formElement.inputAnswer.value);
  console.log(formElement.inputTag.value);

  const formData = new FormData(event.target);

  const data = Object.fromEntries(formData);
  console.log("user data:", data);
  event.target.reset();
});
