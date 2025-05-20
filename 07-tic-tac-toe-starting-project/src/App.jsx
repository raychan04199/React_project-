import { useState } from 'react';
import Player from './components/Player.jsx';
import GameBoard from './components/GameBoard.jsx';
import Log from './components/Log.jsx';
import GameOver from './components/GameOver.jsx';
import { WINNING_COMBINATIONS } from './winning-combinations.js'; 
import { use } from 'react';


function deriveActivePlayer(gameTurns) {
    let currentPlayer = 'X';

      if(gameTurns.length >0 && gameTurns[0].player === 'X'){
        currentPlayer = 'O';
      }
    return currentPlayer;
}

function deriveGameBoard(gameTurns){
     let gameBoard = [...initialGameBoard.map(array => [...array])]; // This is the initial game board and the initial state was not changed

    for (const turn of gameTurns){
        const {square, player} = turn;
        const {row, col} = square;
        gameBoard[row][col] = player;
    }
    return gameBoard;
}

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];

function deriveWinner(gameBoard, players){
    let winner;

  for(const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol  = gameBoard [combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard [combination[1].row][combination[1].column];
    const thirdSquareSymbol  = gameBoard [combination[2].row][combination[2].column];

    if(firstSquareSymbol && 
       firstSquareSymbol === secondSquareSymbol && 
       firstSquareSymbol === thirdSquareSymbol
      ){
        winner = players[firstSquareSymbol];
      }
    }
    return winner;
}

function App() {
  const [players, setPlayers]= useState({
    X: 'Player 1',
    O: 'Player 2'
});
  const [gameTurns, setGameTurns] = useState([])
  //const [hasWinner, setHasWinner] = useState(false);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  // Check if there is a winner
  const winner = deriveWinner(gameBoard, players);
  // Check if the game is a draw
  const hasDraw = gameTurns.length === 9 && !winner;

//update the game board
  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevTurns =>{
      const currentPlayer = deriveActivePlayer(prevTurns);
      // Check if the square is already selected
      const updatedTurns = [
        {square:{row: rowIndex, col: colIndex}, player: currentPlayer}, 
        ...prevTurns,
      ]; 
      return updatedTurns;
    });
  }

  function handleRestart(){
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => ({
      ...prevPlayers,
      [symbol]: newName,
    }
  ));

  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player 
          initialName="Player 1" 
          symbol="X" 
          isActive={activePlayer === 'X'}
          onChangeName={handlePlayerNameChange}
          />
          <Player 
          initialName="Player 2"
          symbol="O" 
          isActive={activePlayer === 'O'}
          onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <GameBoard onSelectSquare={handleSelectSquare} 
        board = {gameBoard}
        />

      </div>

      <Log turns={gameTurns}/>

    </main>
   
  );
}

export default App
