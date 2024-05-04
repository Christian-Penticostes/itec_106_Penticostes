let randomNum;
let attempts;
let guessInput = document.getElementById("guess");
let submitButton = document.getElementById("submit");
let hint = document.getElementById("hint");
let attemptsText = document.getElementById("attempts");
let playAgainButton = document.getElementById("playAgain");

function startGame() {
  randomNum = Math.floor(Math.random() * 10) + 1;
  attempts = 0;
  hint.textContent = "";
  attemptsText.textContent = "Attempts: " + attempts;
  guessInput.value = "";
  submitButton.style.display = "block";
  playAgainButton.style.display = "none";
}

function checkGuess() {
  const userValue = Number(guessInput.value);
  if (isNaN(userValue) || userValue < 1 || userValue > 10) {
    hint.textContent = "Invalid input: Please Input number between 1 - 10";
    return;
  }

  attempts++;

  if (userValue === randomNum) {
    hint.textContent = "Congratulations, you guessed it!";
    submitButton.style.display = "none";
    playAgainButton.style.display = "block";
    hint.style.color = "green";
  } else if (userValue < randomNum) {
    hint.textContent = "Too low! Guess again.";
    hint.style.color = "red";
  } else {
    hint.textContent = "Too high! Guess again.";
    hint.style.color = "red";
  }

  attemptsText.textContent = "Attempts: " + attempts;
}

submitButton.addEventListener("click", checkGuess);
playAgainButton.addEventListener("click", startGame);

startGame(); 