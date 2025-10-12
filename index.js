const submitButton = document.querySelector("[data-js=submitButton]");
const form = document.querySelector('[data-js="new-card-form"]');
const cardContainer = document.querySelector('[data-js="card"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log("user data:", data);

  const newCard = document.createElement("section");
  newCard.classList.add("card");

  const questionHeading = document.createElement("h2");
  questionHeading.innerText = data.inputQuestion;
  newCard.append(questionHeading);

  cardContainer.append(newCard);
  // console.log(newListElement);

  event.target.reset();
});
