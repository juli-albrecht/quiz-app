const bookmarkButton = document.querySelector('[data-js="card-bookmark"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("active");
});

const answerButton = document.querySelector('[data-js="answer-button"]');
const cardAnswer = document.querySelector('[data-js="card-answer"]');
answerButton.addEventListener("click", () => {
  const isHidden = cardAnswer.hasAttribute("hidden");

  if (isHidden) {
    cardAnswer.removeAttribute("hidden");
    answerButton.textContent = "Antwort verbergen";
  } else {
    cardAnswer.setAttribute("hidden", "");
    answerButton.textContent = "Antwort anzeigen";
  }
});
