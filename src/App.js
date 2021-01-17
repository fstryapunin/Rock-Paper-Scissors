import React, { useState } from 'react'
import Game from './Game.js'
import './App.css'



const App = () => {
    const [showGame, updateShowGame] = useState(false)
    const [playerChoiceId, updatePlayerChoiceId] = useState()
    const [computerChoiceId, updateComputerChoiceId] = useState()
    const [objects, updateObjects] = useState(
        [
            {
                id: 1,
                name: 'kamen',
                beatsId: [2]
            },
            {
                id: 2,
                name: 'nuzky'
            },
            {
                id: 3,
                name: 'papir'
            },
        ]
    )

    const handleChoiceClick = (object) => {
        updatePlayerChoiceId(object.id)
        selectObject();
    }

    const selectObject = () => {
        const selectedId = getRandomId(objects.length)      
        updateComputerChoiceId(objects[selectedId])
    }

    //generate random number between 1 and the number of choices
    const getRandomId = (max) => {      
        const roundedInteger =  Math.floor((Math.random()*max) + 1); 
        return roundedInteger
    }

    if (!showGame) {
        return (
            <div className="main-view">
                <h1>Rock, paper, scissors & more</h1>
                <div>
                    <button onClick={() => { updateShowGame(true) }} className="main-view-button">Start</button>
                    <button className="main-view-button">Options</button>
                </div>
            </div>
        )
    }
    if (showGame) {
        return (
            <Game objects={objects} handleChoiceClick={handleChoiceClick}/>
        )
    }
}


export default App

