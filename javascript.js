
//create game board
const board = [];

const gameboard = (function() {
    const cells = 9;
    for (let i = 0; i < cells; i++) {
        board[i] = {};
        board[i].id = i;
        board[i].marker = "";
    }
    console.log(board);
})();

//create player

function createPlayer(name, marker) {
    const playerName = name;
    const playerMarker = marker;
    const cellsOccupied = "";
    let playerNickname = ''; 
    return {playerName, playerMarker, cellsOccupied, playerNickname};
}

const player1 = createPlayer("player1", "x");
const player2 = createPlayer("player2", "o");


//gameplay
let result = '';
let displayTurn = '';
let turnStatus = '';
let winStatus = '';

const game = (function() {
    const playTurn = function(player, gridNum) {
        const cellSelected = board[gridNum];
        if (cellSelected.marker !== '') {
            console.log("Cell selected! Please choose another cell!");
        }
        else {
            cellSelected.marker = player.playerMarker;
            player.cellsOccupied += gridNum;
            turnStatus = player.playerMarker;
            checkWin(player);
        }

    };

    const winningCombinations = ["012", "345", "678", "036", "147", "258", "048", "246"];
    // let result = '';

    const checkWin = function(player) {
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
                result = player.playerNickname + " wins!";
                console.log(result);
                winStatus = "win";
                break;
            }
            else if (checkDraw.length == 9 && newStr !=='') {
                result = "it's a draw!";
                console.log(result);
            }
        }
    };

    const changeTurn = function(num) {
        if (turnStatus == 'x') {
            playTurn(player2, num);
            displayTurn = player2.playerNickname + "'s turn!";
        }
        else {
            playTurn(player1, num);
            displayTurn = player1.playerNickname + "'s turn!";  
        }
    };


    return { playTurn, checkWin, changeTurn };
})();



//game display on DOM

const displayController = (function() {
    const cell0 = document.getElementById("cell0");
    cell0.addEventListener('click', () => {
        if (winStatus !== 'win') {
            game.changeTurn(0);
            cell0.textContent = board[0].marker;
            showResult();
            // console.log(board[0].marker);
        }  
    });

    const cell1 = document.getElementById("cell1");
    cell1.addEventListener('click', () => {
        if (winStatus !== 'win') {
            game.changeTurn(1);
            cell1.textContent = board[1].marker;
            showResult();
        }  
    });

    const cell2 = document.getElementById("cell2");
    cell2.addEventListener('click', () => {
        if (winStatus !== 'win') {
            game.changeTurn(2);
            cell2.textContent = board[2].marker;
            showResult();
        }
    });

    const cell3 = document.getElementById("cell3");
    cell3.addEventListener('click', () => {
        if (winStatus !== 'win') {
            game.changeTurn(3);
            cell3.textContent = board[3].marker;
            showResult();
        }
    });

    const cell4 = document.getElementById("cell4");
    cell4.addEventListener('click', () => {
         if (winStatus !== 'win') {
            game.changeTurn(4);
            cell4.textContent = board[4].marker;
            showResult();
         }
    });

    const cell5 = document.getElementById("cell5");
    cell5.addEventListener('click', () => {
        if (winStatus !== 'win') {
            game.changeTurn(5);
            cell5.textContent = board[5].marker;
            showResult();
        }
    });

    const cell6 = document.getElementById("cell6");
    cell6.addEventListener('click', () => {
        if (winStatus !== 'win') {
            game.changeTurn(6);
            cell6.textContent = board[6].marker;
            showResult();
        }
    });

    const cell7 = document.getElementById("cell7");
    cell7.addEventListener('click', () => {
        if (winStatus !== 'win') {
            game.changeTurn(7);
            cell7.textContent = board[7].marker;
            showResult();
        }
    });

    const cell8 = document.getElementById("cell8");
    cell8.addEventListener('click', () => {
        if (winStatus !== 'win') {
            game.changeTurn(8);
            cell8.textContent = board[8].marker;
            showResult();
        }
    });
    
    const gameResult = document.getElementById("game-result");
    const showTurn = document.getElementById("turn-display");

    function showResult() {
        gameResult.textContent = result;
        showTurn.textContent = displayTurn;
    };
    
    const myForm = document.getElementById("addUserNames");
    myForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const user1 = document.getElementById("user1").value;
        const user2 = document.getElementById("user2").value;
        player1.playerNickname = user1;
        player2.playerNickname = user2;
        // console.log(player1);
        // console.log(player2);
    });

    function restartGame() {
        for (let k = 0; k < 9; k++) {
            board[k].marker = '';
        }
        player1.cellsOccupied = '';
        player2.cellsOccupied = '';
        cell0.textContent = '';
        cell1.textContent = '';
        cell2.textContent = '';
        cell3.textContent = '';
        cell4.textContent = '';
        cell5.textContent = '';
        cell6.textContent = '';
        cell7.textContent = '';
        cell8.textContent = '';
        turnStatus = '';
        winStatus = '';
        result = '';
        displayTurn = '';
        gameResult.textContent = result;
        showTurn.textContent = displayTurn;
        // console.log(board);
        // console.log(player1);
        // console.log(player2);
    };

    const restartBtn = document.getElementById("restart-button");
    restartBtn.addEventListener('click', () => {
        restartGame();
    });
})();

// console.log(player1);
// game.playTurn(player1, 0);
// game.playTurn(player2, 1);
// game.playTurn(player1, 4);
// game.playTurn(player2, 3);
// game.playTurn(player1, 7);
// game.playTurn(player2, 5);
// game.playTurn(player1, 2);
// game.playTurn(player2, 8);
// game.playTurn(player1, 6);


