import React from 'react'
import './Game.css'

const Result = ({ result, toggleShowResult, playerChoice, computerChoice }) => {
    return (
        <div className="game-container">
            <h1>{result}</h1>
            <h2>{`Vybral jsi ${playerChoice.name}, počítač si vybral ${computerChoice.name}`}</h2>
            <button onClick={() => { toggleShowResult()} }>Hrát znova</button>
        </div>
    );
 }

export default Result