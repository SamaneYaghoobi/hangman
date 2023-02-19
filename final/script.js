const secretPhrases = [
	"able",
	"about",
	"account",
	"acid",
	"across",
	"act",
	"addition",
	"adjustment",
	"advertisement",
	"after",
	"again",
	"against",
	"agreement",
	"air",
	"all",
	"almost",
	"among",
	"amount",
	"amusement",
	"angle",
	"angry",
	"animal",
	"answer",
	"javascript",
	"monkey",
	"amazing",
	"pancake",
	"cohort",
	"concatenate",
	"iteration",
	"index",
	"code",
	"angular",
	"react",
	"python",
];

let randomItem = "";
let clicked = [];
let result = "";
let mistakes = 0;

function selectRandomItem() {
	randomItem = secretPhrases[Math.floor(Math.random() * secretPhrases.length)];
	document.getElementById("letters").addEventListener("click", buttonHandler);
	window.addEventListener("keydown", keyHandler);
}

function letterHandler(letter) {
	let isUsed;
	clicked.indexOf(letter) === -1
		? clicked.push(letter)
		: (isUsed = clicked.includes(letter));
	const selectedLetter = document.getElementById(letter);
	selectedLetter.className = "used";
	if (randomItem.indexOf(letter) >= 0) {
		setUnderScores();
		checkIFWon();
	} else if (randomItem.indexOf(letter === -1) && !isUsed) {
		document.querySelector("#try").style.display = "block";
		mistakes++;
		checkIfLose();
		updateHangmanImg();
		countTryNumber();
	}
}

function setUnderScores() {
	let splittedWord = randomItem.split("");
	let mappedWord = splittedWord.map((letter) =>
		clicked.indexOf(letter) >= 0 ? letter : "_"
	);
	result = mappedWord.join("");
	document.getElementById("clue").innerHTML = `<p>${result}</p>`;
}

function checkIFWon() {
	if (randomItem === result) {
		document.getElementById("gameOver").querySelector("p").style.display =
			"block";
		document
			.getElementById("gameOver")
			.querySelector("p").innerText = `You Win! - Click to restart`;
		document.querySelector(".game-img").src = "assets/images/win.jpg";
	}
}

function checkIfLose() {
	if (mistakes === 6) {
		document.getElementById("gameOver").querySelector("p").style.display =
			"block";
		document.getElementById(
			"clue"
		).innerHTML = `<p>Random word is: ${randomItem}</p>`;
		document.getElementById("clue").querySelector("p").style.letterSpacing = 0;
		document
			.querySelector("#gameOver")
			.querySelector("p").style.backgroundColor = "#FF7878";
		document.querySelector("#gameOver").querySelector("p").style.color = "#fff";
		document.querySelector("#try").style.display = "none";
	}
}

function updateHangmanImg() {
	const changeImg = document.querySelector(".game-img");
	changeImg.src = `assets/images/hangman${mistakes}.jpg`;
	if (mistakes >= 7) {
		changeImg.src = `assets/images/hangman0.jpg`;
	}
}

function countTryNumber() {
	const tryNumber = document.querySelector("#tryNumber");
	tryNumber.innerText = `${mistakes}/6`;
	changeImg.src = `assets/images/hangman${mistakes}.jpg`;
	if (mistakes >= 7) {
		changeImg.src = `assets/images/hangman0.jpg`;
	}
}

document.getElementById("gameOver").addEventListener("click", function () {
	location.reload();
});

function buttonHandler(event) {
	letterHandler(event.target.id);
}

function keyHandler(event) {
	letterHandler(event.key);
}

selectRandomItem();
setUnderScores();
