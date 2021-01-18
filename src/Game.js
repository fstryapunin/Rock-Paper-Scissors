import React from 'react'
import Object from './Object.js'
import './Game.css'

const Game = ({ objects, handleChoiceClick }) => {
    //generate objects for player to choose from props      
    const choices = objects.map((object, index) => {            
        return <Object object={object} handleChoiceClick={handleChoiceClick } />
    });
    
    //render game and objects
    return (
        <div className="game-container">
            <h2>Počítač</h2>
            <div className="square">?</div>
            <div className="circle"></div>
            <h2>Hráč</h2>
            <div className="selection-container">
                {choices}
            </div>          
        </div>
    )
}

export default Game