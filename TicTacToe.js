let variations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

let board;
let turn = 'x';
let win;

let spots = Array.from(document.querySelectorAll('#board div'));
console.log('spots');

document.getElementById('board').addEventListener('click', playTurn);
const gameInfo = document.querySelector('h2');
document.getElementById('reset-button').addEventListener('click', ticTacToeBoard);

function outcome() {
    let winner = null;
    variations.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
    });
    return winner ? winner : board.includes('') ? null : 'Win!'
}

function playTurn() {
    let spot = spots.findIndex(function(square) {
        return square === event.target;
    });
    board[spot] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    win = outcome();
    setBoard();
}

function ticTacToeBoard() {
    board = [
        '', '', '', '', '', '', '', '', ''
    ];
    setBoard();
};

ticTacToeBoard();

function setBoard() {
    board.forEach(function(set, index) {
        spots[index].textContent = set;
    });
    gameInfo.textContent = win === 'Win!' ? `Tie!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
};