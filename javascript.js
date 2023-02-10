let playerText = document.getElementById('playerText');
let restartBtn = document.getElementById('restartBtn');
let boxes = Array.from(document.getElementsByClassName('box'));

const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);

const startGame = () => {
  boxes.forEach(box => box.addEventListener('click', boxClicked));
};

function boxClicked(e) {
  const id = e.target.id;

  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerHTML = currentPlayer;

    if (playerHasWon() !== false) {
      playerText.innerHTML = `${currentPlayer} has WON!`;
    }
    currentPlayer = currentPlayer === X_TEXT ? O_TEXT : X_TEXT;
  }
};

const winningCombos = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8]
];

function playerHasWon() {
  for (const condition of winningCombos) {
    let [a, b, c] = condition;

 
      if (spaces[a] && (spaces[a] === spaces[b] && spaces[a] === spaces[c])) {
        return [a, b, c];
      }
    }
    return false;
  };
  
  restartBtn.addEventListener('click', restart);
  
  function restart() {
    spaces.fill(null);
  
    boxes.forEach(box => {
      box.innerHTML = '';
      box.style.backgroundColor = '';
    });
  
    playerText.innerHTML = 'Tic Tac Toe';
  
    currentPlayer = X_TEXT;
  };
  
  
  
  startGame();