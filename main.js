
//check for any win or draw

//if not, switch to other player's round

//factory function to create player object

function createPlayer(name, symbol) {
    const playerName = name;
    const playerSymbol = symbol;
    return {playerName, playerSymbol};
}

//create a gameboard

const createBoard = (function() {
    const rows = 3;
    const columns = 3;
    const board = [];
    return function() {
        for (let i=0; i<rows; i++) {
        board[i] = [];
        for (let j=0; j<columns; j++) {
            board[i][j] = [];
        }
    }
    return board;
}
})();
let gameWon = false;
//append gameboard with player's symbol based on their choice

function makeChoice(player, squareRow, squareCol) {
    console.log(squareRow);
    console.log(squareCol);
    console.log(typeof squareRow);
    console.log(typeof squareCol);
    console.log(board)
    let chosenSquare = board[squareRow][squareCol];
    //check if the chosen square is empty
    if (chosenSquare.length === 0) {
        chosenSquare.push(player.playerSymbol);
        //check for result
        if (squareCol === 0 && squareRow === 0) {
            if (board[squareRow][squareCol + 1] == player.playerSymbol) {
                if (board[squareRow][squareCol + 2] == player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                    return gameWon = true;
                }
            } else if (board[squareRow + 1][squareCol] == player.playerSymbol) {
                if (board[squareRow + 2][squareCol] == player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                    return gameWon = true;
                }
            } else if (board[squareRow + 1][squareCol + 1] == player.playerSymbol) {
                if (board[squareRow + 2][squareCol + 2] == player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                    return gameWon = true;
                }
            }
        } else if (squareCol === 1 && squareRow === 0) {
            if (board[squareRow][squareCol + 1] == player.playerSymbol) {
                if (board[squareRow][squareCol - 1] == player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                    return gameWon = true;
                }
            } else if (board[squareRow + 1][squareCol] == player.playerSymbol) {
                if (board[squareRow + 2][squareCol] == player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                    return gameWon = true;
                }
            }
        } else if (squareCol === 2 && squareRow === 0) {
            if (board[squareRow][squareCol - 1] == player.playerSymbol) {
                if (board[squareRow][squareCol - 2] == player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                    return gameWon = true;
                }
            } else if (board[squareRow + 1][squareCol] == player.playerSymbol) {
                if (board[squareRow + 2][squareCol] == player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                    return gameWon = true;
                }
            } else if (board[squareRow + 1][squareCol - 1] == player.playerSymbol) {
                if (board[squareRow + 2][squareCol - 2] == player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                    return gameWon = true;
                }
            }
        } else if (squareCol === 0 && squareRow === 1) {
            if (board[squareRow][squareCol + 1] == player.playerSymbol) {
                if (board[squareRow][squareCol + 2] == player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                    return gameWon = true;
                }
            } else if (board[squareRow + 1][squareCol] == player.playerSymbol) {
                if (board[squareRow - 1][squareCol] == player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                    return gameWon = true;
                }
            }
        } else if (squareCol === 1 && squareRow === 1) {
            if (board[squareRow][squareCol + 1] == player.playerSymbol) {
                if (board[squareRow][squareCol - 1] == player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                    return gameWon = true;
                }
            } else if (board[squareRow + 1][squareCol] == player.playerSymbol) {
                if (board[squareRow - 1][squareCol] == player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                    return gameWon = true;
                }
            } else if (board[squareRow + 1][squareCol + 1] == player.playerSymbol) {
                if (board[squareRow - 1][squareCol - 1] == player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                    return gameWon = true;
                }
            } else if (board[squareRow + 1][squareCol - 1] == player.playerSymbol) {
                if (board[squareRow - 1][squareCol + 1] == player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                    return gameWon = true;
                }
            }
        } else if (squareCol === 2 && squareRow === 1) {
            if (board[squareRow][squareCol - 1] == player.playerSymbol) {
                if (board[squareRow][squareCol - 2] == player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                    return gameWon = true;
                }
            } else if (board[squareRow + 1][squareCol] == player.playerSymbol) {
                if (board[squareRow - 1][squareCol] == player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                    return gameWon = true;
                }
            }
        } else if (squareCol === 0 && squareRow === 2) {
            if (board[squareRow][squareCol + 1] == player.playerSymbol) {
                if (board[squareRow][squareCol + 2] == player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                    return gameWon = true;
                }
            } else if (board[squareRow - 1][squareCol] == player.playerSymbol) {
                if (board[squareRow - 2][squareCol] == player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                    return gameWon = true;
                }
            } else if (board[squareRow - 1][squareCol + 1] == player.playerSymbol) {
                if (board[squareRow - 2][squareCol + 2] == player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                    return gameWon = true;
                }
            }
        } else if (squareCol === 1 && squareRow === 2) {
            if (board[squareRow][squareCol + 1] == player.playerSymbol) {
                if (board[squareRow][squareCol - 1] == player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                    return gameWon = true;
                }
            } else if (board[squareRow - 1][squareCol] == player.playerSymbol) {
                if (board[squareRow - 2][squareCol] == player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                    return gameWon = true;
                }
            }
        } else if (squareCol === 0 && squareRow === 2) {
            if (board[squareRow - 1][squareCol + 1] == player.playerSymbol) {
                if(board[squareRow - 2][squareCol + 2] == player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                    return gameWon = true;
                }
            }
        } else if (squareCol === 2 && squareRow === 2) {
            if (board[squareRow][squareCol - 1] == player.playerSymbol) {
                if (board[squareRow][squareCol - 2] == player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                    return gameWon = true;
                }
            } else if (board[squareRow - 1][squareCol] == player.playerSymbol) {
                if (board[squareRow - 2][squareCol] == player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                    return gameWon = true;
                }
            } else if (board[squareRow - 1][squareCol - 1] == player.playerSymbol) {
                if (board[squareRow - 2][squareCol - 2] == player.playerSymbol) {
                    alert(`The winner is ${player.playerName}`);
                    return gameWon = true;
                }
            }
        }
    } else {
        alert('The square you have selected has already been filled');
    }
}

//function for game to play
function playGame() {
    let nameOfFirst = prompt("First player's name?");
    let symbolOfFirst = prompt("First player's symbol?");
    let nameOfSecond = prompt("Second player's name?");
    let symbolOfSecond = prompt("Second player's symbol?");
    const playerOne = createPlayer(nameOfFirst, symbolOfFirst);
    const playerTwo = createPlayer(nameOfSecond, symbolOfSecond);
    board = createBoard();
    let roundPlayer = playerOne;
    while (gameWon == false) {
        console.log(roundPlayer.playerName);
        let choiceRow = prompt("row?");
        let choiceCol = prompt("column?");
        makeChoice(roundPlayer, Number(choiceRow), Number(choiceCol));
        //switch between the two players
        if (roundPlayer === playerOne) {
            roundPlayer = playerTwo;
        } else {
            roundPlayer = playerOne;
        }
    }
}

playGame();