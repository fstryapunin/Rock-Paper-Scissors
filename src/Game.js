import React, { useState, useEffect } from 'react'
import Object from './Object.js'
import './Game.css'

const Game = ({ objects, handleChoiceClick }) => {
    const [playerChoices, updatePlayerChoices] = useState([]);
    
    //generate player choices on each change of choices props and update state  
    useEffect(() => {        
        const choices = objects.map((object, index) => {            
            return <Object object={object} handleChoiceClick={handleChoiceClick } />
        });        
        updatePlayerChoices(choices);
    }, [objects])

    const handleObjectClick = () => {}

    return (
        <div className="game-container">
            
            <div className="square">?</div>
            <div className="circle"></div>
            <div className="selection-container">
                {playerChoices}
            </div>          
        </div>
    )
}

export default Game