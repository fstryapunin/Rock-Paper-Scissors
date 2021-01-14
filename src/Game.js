import React, {useState, useEffect} from 'react'
import './Game.css'

const Game = ({ objects }) => {
    const [playerChoices, updatePlayerChoices] = useState([]);
    
    useEffect(() => {        
        const choices = objects.map((object, index) => {            
            return <div key={index} className="square">{object.name}</div>
        });        
        updatePlayerChoices(choices);
    }, [objects])


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