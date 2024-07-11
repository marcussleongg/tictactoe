
//check for any win or draw

//if not, switch to other player's round

//factory function to create player object

function createPlayer(name, symbol) {
    const playerName = name;
    const playerSymbol = symbol;
    return {playerName, playerSymbol};
}

//create a gameboard

function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];

for (let i=0; i<rows; i++) {
    board[i] = [];
    for (let j=0; j<columns; j++) {
        board[i][j] = [];
    }
}
console.log(board);
}

Gameboard();

//append gameboard with player's symbol based on their choice

function makeChoice(player, squareRow, squareCol) {
    let chosenSquare = board[squareRow][squareCol];
    //check if the chosen square is empty
    if (chosenSquare.length === 0) {
        chosenSquare.push(player.playerSymbol);
        //check for result
        if (squareCol === 1) {
            if (board[squareRow][squareCol + 1] === player.playerSymbol) {
                if (board[squareRow][squareCol + 2] === player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                }
            }
        } else if (squareCol === 2) {
            if (board[squareRow][squareCol + 1] === player.playerSymbol) {
                if (board[squareRow][squareCol - 1] === player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                }
            }
        } else if (squareCol === 3) {
            if (board[squareRow][squareCol - 1] === player.playerSymbol) {
                if (board[squareRow][squareCol - 2] === player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                }
            }
        } else if (squareRow === 1) {
            if (board[squareRow + 1][squareCol] === player.playerSymbol) {
                if (board[squareRow + 2][squareCol] === player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                }
            }
        } else if (squareRow === 2) {
            if (board[squareRow + 1][squareCol] === player.playerSymbol) {
                if (board[squareRow - 1][squareCol] === player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                }
            }
        } else if (squareRow === 3) {
            if (board[squareRow - 1][squareCol] === player.playerSymbol) {
                if (board[squareRow - 2][squareCol] === player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                }
            }
        } else if (squareCol === 1 && squareRow === 1) {
            if (board[squareRow + 1][squareCol + 1] === player.playerSymbol) {
                if(board[squareRow + 2][squareCol + 2] === player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                }
            }
        } else if (squareCol === 3 && squareRow === 1) {
            if (board[squareRow + 1][squareCol - 1] === player.playerSymbol) {
                if(board[squareRow + 2][squareCol - 2] === player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                }
            }
        } else if (squareCol === 1 && squareRow === 3) {
            if (board[squareRow - 1][squareCol + 1] === player.playerSymbol) {
                if(board[squareRow - 2][squareCol + 2] === player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                }
            }
        } else if (squareCol === 3 && squareRow === 3) {
            if (board[squareRow - 1][squareCol - 1] === player.playerSymbol) {
                if(board[squareRow - 2][squareCol - 2] === player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                }
            }
        } else if (squareCol === 2 && squareRow === 2) {
            if (board[squareRow + 1][squareCol + 1] === player.playerSymbol) {
                if(board[squareRow - 1][squareCol - 1] === player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                }
            }
        }
    } else {
        alert('The square you have selected has already been filled');
    }
}
