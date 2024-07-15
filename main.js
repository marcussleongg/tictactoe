
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
let validChoice = false;
//append gameboard with player's symbol based on their choice

function makeChoice(player, squareRow, squareCol) {
    console.log(squareRow);
    console.log(squareCol);
    console.log(board);
    validChoice = false;
    let chosenSquare = board[squareRow][squareCol];
    //check if the chosen square is empty
    if (chosenSquare.length === 0) {
        chosenSquare.push(player.playerSymbol);
        console.log(player.playerName);
        validChoice = true;
        //check for result
        if (squareCol === 0 && squareRow === 0) {
            if (board[squareRow][squareCol + 1] == player.playerSymbol) {
                if (board[squareRow][squareCol + 2] == player.playerSymbol) {
                    setTimeout(()=>{alert(`The winner is ${player.playerName}`);}, 5);
                    return gameWon = true;
                }
            } else if (board[squareRow + 1][squareCol] == player.playerSymbol) {
                if (board[squareRow + 2][squareCol] == player.playerSymbol) {
                    setTimeout(()=>{alert(`The winner is ${player.playerName}`);}, 5);
                    return gameWon = true;
                }
            } else if (board[squareRow + 1][squareCol + 1] == player.playerSymbol) {
                if (board[squareRow + 2][squareCol + 2] == player.playerSymbol) {
                    setTimeout(()=>{alert(`The winner is ${player.playerName}`);}, 5);
                    return gameWon = true;
                }
            }
        } else if (squareCol === 1 && squareRow === 0) {
            if (board[squareRow][squareCol + 1] == player.playerSymbol) {
                if (board[squareRow][squareCol - 1] == player.playerSymbol) {
                    setTimeout(()=>{alert(`The winner is ${player.playerName}`);}, 5);
                    return gameWon = true;
                }
            } else if (board[squareRow + 1][squareCol] == player.playerSymbol) {
                if (board[squareRow + 2][squareCol] == player.playerSymbol) {
                    setTimeout(()=>{alert(`The winner is ${player.playerName}`);}, 5);
                    return gameWon = true;
                }
            }
        } else if (squareCol === 2 && squareRow === 0) {
            if (board[squareRow][squareCol - 1] == player.playerSymbol) {
                if (board[squareRow][squareCol - 2] == player.playerSymbol) {
                    setTimeout(()=>{alert(`The winner is ${player.playerName}`);}, 5);
                    return gameWon = true;
                }
            } else if (board[squareRow + 1][squareCol] == player.playerSymbol) {
                if (board[squareRow + 2][squareCol] == player.playerSymbol) {
                    setTimeout(()=>{alert(`The winner is ${player.playerName}`);}, 5);
                    return gameWon = true;
                }
            } else if (board[squareRow + 1][squareCol - 1] == player.playerSymbol) {
                if (board[squareRow + 2][squareCol - 2] == player.playerSymbol) {
                    setTimeout(()=>{alert(`The winner is ${player.playerName}`);}, 5);
                    return gameWon = true;
                }
            }
        } else if (squareCol === 0 && squareRow === 1) {
            if (board[squareRow][squareCol + 1] == player.playerSymbol) {
                if (board[squareRow][squareCol + 2] == player.playerSymbol) {
                    setTimeout(()=>{alert(`The winner is ${player.playerName}`);}, 5);
                    return gameWon = true;
                }
            } else if (board[squareRow + 1][squareCol] == player.playerSymbol) {
                if (board[squareRow - 1][squareCol] == player.playerSymbol) {
                    setTimeout(()=>{alert(`The winner is ${player.playerName}`);}, 5);
                    return gameWon = true;
                }
            }
        } else if (squareCol === 1 && squareRow === 1) {
            if (board[squareRow][squareCol + 1] == player.playerSymbol) {
                if (board[squareRow][squareCol - 1] == player.playerSymbol) {
                    setTimeout(()=>{alert(`The winner is ${player.playerName}`);}, 5);
                    return gameWon = true;
                }
            } else if (board[squareRow + 1][squareCol] == player.playerSymbol) {
                if (board[squareRow - 1][squareCol] == player.playerSymbol) {
                    setTimeout(()=>{alert(`The winner is ${player.playerName}`);}, 5);
                    return gameWon = true;
                }
            } else if (board[squareRow + 1][squareCol + 1] == player.playerSymbol) {
                if (board[squareRow - 1][squareCol - 1] == player.playerSymbol) {
                    setTimeout(()=>{alert(`The winner is ${player.playerName}`);}, 5);
                    return gameWon = true;
                }
            } else if (board[squareRow + 1][squareCol - 1] == player.playerSymbol) {
                if (board[squareRow - 1][squareCol + 1] == player.playerSymbol) {
                    setTimeout(()=>{alert(`The winner is ${player.playerName}`);}, 5);
                    return gameWon = true;
                }
            }
        } else if (squareCol === 2 && squareRow === 1) {
            if (board[squareRow][squareCol - 1] == player.playerSymbol) {
                if (board[squareRow][squareCol - 2] == player.playerSymbol) {
                    setTimeout(()=>{alert(`The winner is ${player.playerName}`);}, 5);
                    return gameWon = true;
                }
            } else if (board[squareRow + 1][squareCol] == player.playerSymbol) {
                if (board[squareRow - 1][squareCol] == player.playerSymbol) {
                    setTimeout(()=>{alert(`The winner is ${player.playerName}`);}, 5);
                    return gameWon = true;
                }
            }
        } else if (squareCol === 0 && squareRow === 2) {
            if (board[squareRow][squareCol + 1] == player.playerSymbol) {
                if (board[squareRow][squareCol + 2] == player.playerSymbol) {
                    setTimeout(()=>{alert(`The winner is ${player.playerName}`);}, 5);
                    return gameWon = true;
                }
            } else if (board[squareRow - 1][squareCol] == player.playerSymbol) {
                if (board[squareRow - 2][squareCol] == player.playerSymbol) {
                    setTimeout(()=>{alert(`The winner is ${player.playerName}`);}, 5);
                    return gameWon = true;
                }
            } else if (board[squareRow - 1][squareCol + 1] == player.playerSymbol) {
                if (board[squareRow - 2][squareCol + 2] == player.playerSymbol) {
                    setTimeout(()=>{alert(`The winner is ${player.playerName}`);}, 5);
                    return gameWon = true;
                }
            }
        } else if (squareCol === 1 && squareRow === 2) {
            if (board[squareRow][squareCol + 1] == player.playerSymbol) {
                if (board[squareRow][squareCol - 1] == player.playerSymbol) {
                    setTimeout(()=>{alert(`The winner is ${player.playerName}`);}, 5);
                    return gameWon = true;
                }
            } else if (board[squareRow - 1][squareCol] == player.playerSymbol) {
                if (board[squareRow - 2][squareCol] == player.playerSymbol) {
                    setTimeout(()=>{alert(`The winner is ${player.playerName}`);}, 5);
                    return gameWon = true;
                }
            }
        } else if (squareCol === 2 && squareRow === 2) {
            if (board[squareRow][squareCol - 1] == player.playerSymbol) {
                if (board[squareRow][squareCol - 2] == player.playerSymbol) {
                    setTimeout(()=>{alert(`The winner is ${player.playerName}`);}, 5);
                    return gameWon = true;
                }
            } else if (board[squareRow - 1][squareCol] == player.playerSymbol) {
                if (board[squareRow - 2][squareCol] == player.playerSymbol) {
                    setTimeout(()=>{alert(`The winner is ${player.playerName}`);}, 5);
                    return gameWon = true;
                }
            } else if (board[squareRow - 1][squareCol - 1] == player.playerSymbol) {
                if (board[squareRow - 2][squareCol - 2] == player.playerSymbol) {
                    setTimeout(()=>{alert(`The winner is ${player.playerName}`);}, 5);
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
    const displayPlayerOne = document.querySelector('.playerOne');
    let nameOfFirstElem = document.createElement('p');
    nameOfFirstElem.textContent = nameOfFirst;
    let symbolOfFirstElem = document.createElement('p');
    symbolOfFirstElem.textContent = symbolOfFirst;
    displayPlayerOne.appendChild(nameOfFirstElem).appendChild(symbolOfFirstElem);
    let nameOfSecond = prompt("Second player's name?");
    let symbolOfSecond = prompt("Second player's symbol?");
    const displayPlayerTwo = document.querySelector('.playerTwo');
    let nameOfSecondElem = document.createElement('p');
    nameOfSecondElem.textContent = nameOfSecond;
    let symbolOfSecondElem = document.createElement('p');
    symbolOfSecondElem.textContent = symbolOfSecond;
    displayPlayerTwo.appendChild(nameOfSecondElem).appendChild(symbolOfSecondElem);
    const playerOne = createPlayer(nameOfFirst, symbolOfFirst);
    const playerTwo = createPlayer(nameOfSecond, symbolOfSecond);
    board = createBoard();
    let roundPlayer = playerOne;
    console.log(roundPlayer.playerName);
    const zerozero = document.querySelector('#zerozero');
    zerozero.addEventListener('click', () => {
        let choiceRow = 0;
        let choiceCol = 0;
        makeChoice(roundPlayer, Number(choiceRow), Number(choiceCol));
        //switch between the two players if a valid choice is made
        if (validChoice == true) {
            //add the symbol to the dom
            let symbol = document.createElement('p');
            symbol.textContent = roundPlayer.playerSymbol; 
            zerozero.appendChild(symbol);
            if (roundPlayer === playerOne) {
                roundPlayer = playerTwo;
            } else {
                roundPlayer = playerOne;
            }
        }
    });
    const zeroone = document.querySelector('#zeroone');
    zeroone.addEventListener('click', () => {
        let choiceRow = 0;
        let choiceCol = 1;
        makeChoice(roundPlayer, Number(choiceRow), Number(choiceCol));
        if (validChoice == true) {
            let symbol = document.createElement('p');
            symbol.textContent = roundPlayer.playerSymbol; 
            zeroone.appendChild(symbol);
            if (roundPlayer === playerOne) {
                roundPlayer = playerTwo;
            } else {
                roundPlayer = playerOne;
            }
        }
    });
    const zerotwo = document.querySelector('#zerotwo');
    zerotwo.addEventListener('click', () => {
        let choiceRow = 0;
        let choiceCol = 2;
        makeChoice(roundPlayer, Number(choiceRow), Number(choiceCol));
        if (validChoice == true) {
            let symbol = document.createElement('p');
            symbol.textContent = roundPlayer.playerSymbol; 
            zerotwo.appendChild(symbol);
            if (roundPlayer === playerOne) {
                roundPlayer = playerTwo;
            } else {
                roundPlayer = playerOne;
            }
        }
    });
    const onezero = document.querySelector('#onezero');
    onezero.addEventListener('click', () => {
        let choiceRow = 1;
        let choiceCol = 0;
        makeChoice(roundPlayer, Number(choiceRow), Number(choiceCol));
        if (validChoice == true) {
            let symbol = document.createElement('p');
            symbol.textContent = roundPlayer.playerSymbol; 
            onezero.appendChild(symbol);
            if (roundPlayer === playerOne) {
                roundPlayer = playerTwo;
            } else {
                roundPlayer = playerOne;
            }
        }
    });
    const oneone = document.querySelector('#oneone');
    oneone.addEventListener('click', () => {
        let choiceRow = 1;
        let choiceCol = 1;
        makeChoice(roundPlayer, Number(choiceRow), Number(choiceCol));
        if (validChoice == true) {
            let symbol = document.createElement('p');
            symbol.textContent = roundPlayer.playerSymbol; 
            oneone.appendChild(symbol);
            if (roundPlayer === playerOne) {
                roundPlayer = playerTwo;
            } else {
                roundPlayer = playerOne;
            }
        }
    });
    const onetwo = document.querySelector('#onetwo');
    onetwo.addEventListener('click', () => {
        let choiceRow = 1;
        let choiceCol = 2;
        makeChoice(roundPlayer, Number(choiceRow), Number(choiceCol));
        if (validChoice == true) {
            let symbol = document.createElement('p');
            symbol.textContent = roundPlayer.playerSymbol; 
            onetwo.appendChild(symbol);
            if (roundPlayer === playerOne) {
                roundPlayer = playerTwo;
            } else {
                roundPlayer = playerOne;
            }
        }
    });
    const twozero = document.querySelector('#twozero');
    twozero.addEventListener('click', () => {
        let choiceRow = 2;
        let choiceCol = 0;
        makeChoice(roundPlayer, Number(choiceRow), Number(choiceCol));
        if (validChoice == true) {
            let symbol = document.createElement('p');
            symbol.textContent = roundPlayer.playerSymbol; 
            twozero.appendChild(symbol);
            if (roundPlayer === playerOne) {
                roundPlayer = playerTwo;
            } else {
                roundPlayer = playerOne;
            }
        }
    });
    const twoone = document.querySelector('#twoone');
    twoone.addEventListener('click', () => {
        let choiceRow = 2;
        let choiceCol = 1;
        makeChoice(roundPlayer, Number(choiceRow), Number(choiceCol));
        if (validChoice == true) {
            let symbol = document.createElement('p');
            symbol.textContent = roundPlayer.playerSymbol; 
            twoone.appendChild(symbol);
            if (roundPlayer === playerOne) {
                roundPlayer = playerTwo;
            } else {
                roundPlayer = playerOne;
            }
        }
    });
    const twotwo = document.querySelector('#twotwo');
    twotwo.addEventListener('click', () => {
        let choiceRow = 2;
        let choiceCol = 2;
        makeChoice(roundPlayer, Number(choiceRow), Number(choiceCol));
        if (validChoice == true) {
            let symbol = document.createElement('p');
            symbol.textContent = roundPlayer.playerSymbol; 
            twotwo.appendChild(symbol);
            if (roundPlayer === playerOne) {
                roundPlayer = playerTwo;
            } else {
                roundPlayer = playerOne;
            }
        }
    });
}

playGame();

