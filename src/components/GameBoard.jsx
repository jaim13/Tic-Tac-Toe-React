import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [currentPlayer, setCurrentPlayer] = useState('X'); // Empieza con X

  function handleSelectSquare(rowIndex, colIndex){
    setGameBoard((prevGameBoard) => {
      const updatedBoard = prevGameBoard.map(row => [...row]); // Clonar el tablero
      updatedBoard[rowIndex][colIndex] = currentPlayer; // Colocar X o O según el jugador actual
      return updatedBoard;
    });

    // Cambiar al siguiente jugador
    setCurrentPlayer(prevPlayer => prevPlayer === 'X' ? 'O' : 'X');
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol || ''}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
