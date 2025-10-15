
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
    return {playerName, playerMarker, cellsOccupied};
}

const player1 = createPlayer("player1", "x");
const player2 = createPlayer("player2", "o");


//gameplay

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
                console.log(player.playerName + " wins!")
                // winStatus = "win";
                break;
            }
            else if (checkDraw.length == 9 && newStr !=='') {
                console.log("it's a draw!");
            }
        }
    };
    return { playTurn, checkWin };
})();

game.playTurn(player1, 0);
game.playTurn(player2, 1);
game.playTurn(player1, 4);
game.playTurn(player2, 3);
game.playTurn(player1, 7);
game.playTurn(player2, 5);
game.playTurn(player1, 2);
game.playTurn(player2, 8);
game.playTurn(player1, 6);
