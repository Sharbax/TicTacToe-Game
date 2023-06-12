
// Game variables
let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Functions
function makeMove(cellIndex) {
    if (gameState[cellIndex] !== '' || !gameActive) {
    return;
    }

    gameState[cellIndex] = currentPlayer;
    const cell = document.getElementsByClassName('cell')[cellIndex];
    cell.innerText = currentPlayer;
    cell.classList.add(currentPlayer.toLowerCase());

    checkResult();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.body.classList.toggle('animate');
}

function checkResult() {
    for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
    ) {
        gameActive = false;
        document.getElementById('status').innerText = `${currentPlayer} wins!`;
    }
    }

    if (!gameState.includes('') && gameActive) {
        gameActive = false;
        document.getElementById('status').innerText = "It's a tie!";
    }
}

function resetGame() {
    currentPlayer = 'X';
    gameActive = true;
    gameState = ['', '', '', '', '', '', '', '', ''];
    document.getElementById('status').innerText = '';
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
    cells[i].classList.remove('x', 'o');
    }
}
// Initialization
    document.body.onload = function() {
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', function() {
        makeMove(i);
        });
    }
    };

