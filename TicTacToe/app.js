const prevBtn = document.querySelector('#btnprevious');
const nextBtn = document.querySelector('#btnnext');
const gameStatus = document.querySelector('.gamestats');
const cells = document.querySelectorAll('.cell');
let counter = 0;
let currentIndex;
let game = true;
let Player = "X";
prevBtn.style.display='none'
nextBtn.style.display='none'
//Player Turn notif
const playerTurn = () => `Bes ${Player}, tira mo na!`;
//Store current game state
let gameRecord = ["", "", "",
                 "", "", "", 
                 "", "", ""];
let history = [];
let board =     [["", "", ""],
                ["", "", ""],
                ["", "", ""]];
                
for (let i=0; i<3; i++) {
    gameRecord[i]   = board[0][i];
    gameRecord[i+3] = board[1][i];
    gameRecord[i+6] = board[2][i];
}
gameStatus.innerHTML = playerTurn();
//Win   
let winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function updateRecord(clickedCell, clickedCellIndex) {
    
//Update game record,UI 
    gameRecord[clickedCellIndex] = Player;
    clickedCell.innerHTML = Player;
    if ([0,1,2].indexOf(clickedCellIndex) > -1) {
        board[0][clickedCellIndex] = Player; 
    }
    else if ([3,4,5].indexOf(clickedCellIndex) > -1) {
        board[1][clickedCellIndex - 3] = Player;
    }
    else {
        board[2][clickedCellIndex - 6] = Player;
    }
    let entry = JSON.parse(JSON.stringify(board));
    history.push(entry);
    console.log(history);
    //console.log(gameRecord);
}
function playerChange() {
    Player = Player === "X" ? "O" : "X";
    gameStatus.innerHTML = playerTurn();
}
function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningCombo[i];
        let a = gameRecord[winCondition[0]];
        let b = gameRecord[winCondition[1]];
        let c = gameRecord[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
    if (roundWon) {
        gameStatus.innerHTML = winMsg();
        currentIndex = history.length - 1;
        game = false;
        console.log(`Panalo ka Bes ${Player}!`);
        prevBtn.style.display='block';
        nextBtn.style.display='block';
        return;
    }
/* 
We will check whether there are any values in our game state array 
that are still not populated with a player sign
*/
    let Draw = !gameRecord.includes("");
    if (Draw) {
        gameStatus.innerHTML = drawMsg();
        currentIndex = history.length - 1;
        game = false;
        console.log("Draw ang laro bes");
        prevBtn.style.display='block';
        nextBtn.style.display='block';
        return;
    }
    playerChange();
}
function handleCellClick(clickedCellEvent) {
    counter +=1
    console.log(counter);
    //We will save the clicked html element in a variable for easier further use
    const clickedCell = clickedCellEvent.target;
  /*
Grab the 'cell' attribute from the clicked cell to identify 
where that cell is in our grid. 
*/
    const clickedCellIndex = parseInt(clickedCell.getAttribute('cellIndex'));
/* 
Check whether the call has already been played, 
or if the game is paused. If either of those is true we will simply ignore the click.
*/
    if (gameRecord[clickedCellIndex] !== "" || !game) {
        return;
    }
/* 
If everything if in order we will proceed with the game flow
*/  
    updateRecord(clickedCell, clickedCellIndex);
    handleResultValidation();
}
//GameOver Message
const winMsg = () => `Panalo ka  Bes ${Player}!`;
const drawMsg = () => `Draw ang laro Bes`;
function restartEvent() {
    game = true;
    Player = "X";
    gameRecord = ["", "", "", "", "", "", "", "", ""];
    history = [];
    board = [["", "", ""],
            ["", "", ""],
            ["", "", ""]];
    gameStatus.innerHTML = playerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
    console.clear();  
}
function btnPrev() {
    currentIndex--;
    console.log(history[currentIndex]);
    if (currentIndex <= 0) {
        currentIndex = 0;
    }
    Course(history[currentIndex]);
    console.log('Nagprevious ka Bes');
   /* history[4-1].forEach(h => {
        h.map(j => {
            console.log(j)
            document.querySelectorAll(".cell").forEach(cell => cell.innerHTML = j);
        })
    })*/
}
function btnNext() {
    currentIndex++;
    console.log(history[currentIndex]);
    if (currentIndex >= history.length - 1) {
        currentIndex = history.length - 1;
    }
    Course(history[currentIndex]);
    console.log("Nagnext ka Bes");
}
function Course(arr) {
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            if (i === 0) {
                if (arr[i][j] === "X") {
                    cells[i+j].innerHTML = "X"; 
                }
                else if (arr[i][j] === "O") {
                    cells[i+j].innerHTML = "O";
                }
                else {
                    cells[i+j].innerHTML = "";   
                }
            }
            else if (i === 1) {
                if (arr[i][j] === "X") {
                    cells[i+j+2].innerHTML = "X"; 
                }
                else if (arr[i][j] === "O") {
                    cells[i+j+2].innerHTML = "O";
                }   
                else {
                    cells[i+j+2].innerHTML = "";   
                }
            }

            else {
                if (arr[i][j] === "X") {
                    cells[i+j+4].innerHTML = "X"; 
                }
                else if (arr[i][j] === "O") {
                    cells[i+j+4].innerHTML = "O";
                }
                else {
                    cells[i+j+4].innerHTML = "";   
                }

            }
        }
    }
}
    //console.log(i);
    /*
    prevBtn.addEventListener('click', function(){
    var i = 2;
        //if(history[0].style.visibility == 'hidden'){
            //this.style.visibility = 'hidden';
        //}
        //else{
            //nextBtn.style.visibility = "visible";
            console.log(history[history.length - i]);
            i++;
            
        }
    );
    nextBtn.addEventListener('click', function(){
        //if(history[history.length - i].style.visibility == 'visible'){
        //    this.style.visibility = 'hidden';
        //}
        //else{
            //prevBtn.style.visibility = "visible";
            //this.style.visibility= 'visible';
            history[history.length - i].style.visibility = 'visible';
            console.log(history[history.length - i]);
            i--;
        }
    );
/*
function btnNxt(){
    var i = 1;
    nextBtn.addEventListener('click', function(){
          
      gameRecord.length+i;
      console.log(history[history.length + i]);
      i++;
    });
}*/

//Event Listeners
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('#restart').addEventListener('click', restartEvent);
document.querySelector('#btnnext').addEventListener('click', btnNext)   ;
