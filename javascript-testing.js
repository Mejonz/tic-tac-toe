
//create game board
const board = [];

const createBoard = (function() {
    const cells = 9;
    for (let i = 0; i < cells; i++) {
        board[i] = {};
        board[i].id = i;
        board[i].marker = "";
    }
    console.log(board);
})();


//create player function

function createPlayer(name, marker) {
    const playerName = name;
    const playerMarker = marker;
    const cellsOccupied = "";
    return {playerName, playerMarker, cellsOccupied};
}

const player1 = createPlayer("player1", "x");
const player2 = createPlayer("player2", "o");


//gameplay function

function playTurn(player, gridNum) {
    const cellSelected = board[gridNum];
    if (cellSelected.marker !== "") {
        console.log("Cell Selected! Please choose another cell!");
    }
    else {
        cellSelected.marker = player.playerMarker;
        player.cellsOccupied += gridNum;
        turnStatus = player.playerMarker;
        checkWin(player);
    }  
};

// change player turn function

let turnStatus = '';

function changeTurn() {
    if (turnStatus == 'x') {
        console.log("player 2 turn");
    }
    else {
        console.log("player 1 turn");
    }
};

// console.log(player1);
// console.log(player2);
// console.log(board);




// 012
// 345
// 678
const winningCombinations = ["012", "345", "678", "036", "147", "258", "048", "246"];
// const winStatus = "";
// player1.cellsOccupied     = "6378";

//check if player won function

function checkWin(player) {
    let checkCells = player.cellsOccupied;
    let checkDraw = player1.cellsOccupied + player2.cellsOccupied;
    // console.log(checkCells);
    for (let i = 0; i < winningCombinations.length; i++) {
        let cell = winningCombinations[i];
        // console.log(cell);
        let newStr = '';
        for (let j = 0; j < cell.length; j++) {
            if (!checkCells.includes(cell[j])) {
                newStr += cell[j];
            }
        }
        // console.log(newStr);
        // console.log(checkDraw);
        // console.log(checkDraw.length);
        if (newStr == '') {
            console.log(player.playerName + " wins!")
            // winStatus = "win";
            break;
        }
        else if (checkDraw.length == 9 && newStr !=='') {
            console.log("it's a draw!");
        }
    }
};

// p1 = 04726  p2 = 1358

playTurn(player1, 0);
playTurn(player2, 1);
playTurn(player1, 4);
playTurn(player2, 3);
playTurn(player1, 7);
playTurn(player2, 5);
playTurn(player1, 2);
playTurn(player2, 8);
playTurn(player1, 6);