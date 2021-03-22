

document.querySelector('.btn-new').addEventListener('click', newGame);
document.querySelector('.btn-roll').addEventListener('click', rollButton);
document.querySelector('.btn-hold').addEventListener('click', holdButton);
document.querySelector('#play-again').addEventListener('click', playAgain);
document.querySelector(".inst").addEventListener("click", Instructions); 
document.querySelector(".closebtn").addEventListener("click", close);

let p1Score = document.querySelector("#score-0");
let p2Score = document.querySelector("#score-1");
let p1CurrentScore = document.querySelector("#current-0");
let p2CurrentScore = document.querySelector("#current-1");

let diceItem = document.querySelector(".dice");
let diceImage = document.querySelector("img.dice");

var modal = document.getElementById("modal");
var applause = document.getElementById("applause")
var roll = document.getElementById("roll")

let winnerName;
let playerName;
let allTimeScore = 0;
let roundScore = 0; 
let currentPlayer = 0;

newGame();

function newGame() {
    p1Score.innerHTML = "0";
    p2Score.innerHTML = "0";
    p1CurrentScore.innerHTML = "0";
    p2CurrentScore.innerHTML = "0";
    allTimeScore = [0, 0];
    roundScore = 0;
    currentPlayer = 0;
    diceImage.src = "dice-6.png";
}


//Rolling the dice
function rollButton() {
        let diceArray = [1, 2, 3, 4, 5, 6];
        let randomDice = diceArray[Math.floor(Math.random() * diceArray.length)];
        diceItem.src = "dice-" + randomDice + ".png";
        if (randomDice !== 1) {
            roundScore += randomDice;
            document.querySelector('#score-' + currentPlayer).innerHTML = roundScore;
            roll.play();
        } else {
            nextPlayer();
        }
    }

//Holding the score
function holdButton()  {
        allTimeScore[currentPlayer] += roundScore;
        document.querySelector('#current-' + currentPlayer).innerHTML = allTimeScore[currentPlayer];
        playerName = document.querySelector('#name-' + currentPlayer).innerHTML;
        if (allTimeScore[currentPlayer] >= 25) { //Setting the score to reach
            congratulations(playerName);
        } else {
            nextPlayer();
        }
    }

function playAgain() {
    modal.classList.remove("show");
    newGame();
}

function Instructions() {
    document.getElementById("instructions").style.height = "100%";
}

function close() {
    document.getElementById("instructions").style.height = "0%";
}

function nextPlayer() {
    if (currentPlayer === 0) {
        currentPlayer = 1;
    }
    else {
        currentPlayer = 0;
    }
    roundScore = 0;
    p1Score.innerHTML = "0";
    p2Score.innerHTML = "0";
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}


function congratulations(playerName) {
    document.getElementById("winner").innerHTML = playerName;
    //Modal
    modal.classList.add("show");
    applause.play();
}


//Theme Changer

const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');

const body = document.body;


// Apply the cached theme on reload

const theme = localStorage.getItem('theme');

if (theme) {
  body.classList.add(theme);
}

// Button Event Handlers

darkButton.onclick = () => {
  body.classList.replace('light', 'dark');
  localStorage.setItem('theme', 'dark');
};

lightButton.onclick = () => {
  body.classList.replace('dark', 'light');

  localStorage.setItem('theme', 'light');
};
