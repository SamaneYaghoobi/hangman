const secretPharases = [
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
	"galvainze",
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
	randomItem =
		secretPharases[Math.floor(Math.random() * secretPharases.length)];
	document.getElementById("letters").addEventListener("click", buttonHandeler);
	window.addEventListener("keydown", keyHandeler);
	// console.log(randomItem);
}

function letterHandeler(letter) {
	letter = letter.toLowerCase();
	clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
	document.getElementById(letter.toUpperCase()).className = "used";
	if (randomItem.indexOf(letter) >= 0) {
		setUnderScores();
		checkIFWon();
	} else if (randomItem.indexOf(letter === -1)) {
		mistakes++;
		checkiFLose();
		updateHangmanImg();
	}
}

function setUnderScores() {
	let splitedWord = randomItem.split("");
	let mappedWord = splitedWord.map((letter) =>
		clicked.indexOf(letter) >= 0 ? letter : "_"
	);
	result = mappedWord.join("");
	document.getElementById("clue").innerHTML = `<p>${result}</p>`;
}

function checkIFWon() {
	if (randomItem === result) {
		document.getElementById("gameover").querySelector("p").style.display =
			"block";
		document.querySelector(".game-img").src = "assets/images/win.png";
	}
}

function checkiFLose() {
	if (mistakes === 6) {
		document.getElementById("gameover").querySelector("p").style.display =
			"block";
		document.getElementById(
			"clue"
		).innerHTML = `<p>Random word is: ${randomItem}</p>`;
		document.getElementById("clue").querySelector("p").style.letterSpacing = 0;
		document
			.querySelector("#gameover")
			.querySelector("p").style.backgroundColor = "#FF7878";
		document.querySelector("#gameover").querySelector("p").style.color = "#fff";
	}
}

function updateHangmanImg() {
	const changeimg = document.querySelector(".game-img");
	changeimg.src = `assets/images/hangman${mistakes}.png`;
	if (mistakes >= 7) {
		changeimg.src = `assets/images/hangman0.png`;
	}
}

document.getElementById("gameover").addEventListener("click", function () {
	location.reload();
});

function buttonHandeler(event) {
	letterHandeler(event.target.id);
}

function keyHandeler(event) {
	letterHandeler(event.key);
}

selectRandomItem();
setUnderScores();
