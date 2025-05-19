
 export default function GameBoard({onSelectSquare, board}) {
    return(
    <ol id="game-board">
        {board.map((row, rowIndex) => <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, colIndex) => <li key={colIndex}>
                    <button onClick={() => onSelectSquare(rowIndex, colIndex)} 
                    disabled= {playerSymbol !== null}
                    >
                        {playerSymbol}
                        </button>
                        </li>)}
            </ol>
        </li>)}
    </ol>
    )
}



//     const [gameBoard, setGameBoard] =useState(initialGameBoard);

//     function handleSelectSquare(rowIndex,colIndex){
//         setGameBoard((prevGameBoard)=> {
//             const updatedBorad = [...prevGameBoard.map(innerArray => [...innerArray])];
//             updatedBorad[rowIndex][colIndex] =activePlayerSymbol;
//             // Check if the square is already occupied
//             return updatedBorad;
//         });

//         onSelectSquare();
//     }