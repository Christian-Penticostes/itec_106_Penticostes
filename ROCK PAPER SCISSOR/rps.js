const choices = ["rock", "paper", "scissor"];
const playerOutput = document.getElementById("playerOutput");
const computerOutput = document.getElementById("computerOutput");
const resultOutput = document.getElementById("resultOutput");

function play(playerChoice) {
	const computerChoice = choices[Math.floor(Math.random() * 3)];
	let result = "";

	if(playerChoice === computerChoice){
		result = "IT'S A TIE!";
	} else {
		switch(playerChoice) {
			case "rock":
				result = (computerChoice === "scissor") ? "YOU WIN!" : "YOU LOSE!";
				break;
			case "paper":
				result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
				break;
			case "scissor":
				result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
				break;
		}
	}

	playerOutput.textContent = `PLAYER: ${playerChoice}`;
	computerOutput.textContent = `COMPUTER: ${computerChoice}`;
	resultOutput.textContent = result;

	if (result === "YOU WIN!") {
		resultOutput.classList.remove("lose");
		resultOutput.classList.add("win");
	} else if (result === "IT'S A TIE!") {
		resultOutput.classList.remove("lose");
		resultOutput.classList.remove("win");
	} else {
		resultOutput.classList.remove("win");
		resultOutput.classList.add("lose");
	}
}