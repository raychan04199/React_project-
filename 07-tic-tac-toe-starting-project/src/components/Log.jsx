export default function Log({turns}){
    return(
    <ol id="log">
        {turns.map(turn => (
        // Using the row and col of the square as a key
        <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} selected {turn.square.row}, {turn.square.col}
        </li>))}
    </ol>
    );
}