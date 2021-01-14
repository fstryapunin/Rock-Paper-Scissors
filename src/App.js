import React, { useState } from 'react'
import Game from './Game.js'
import './App.css'

const App = () => {
    const [showGame, updateShowGame] = useState(false)
    const [objects, updateObjects] = useState(
        [
            {
                id: 1,
                name: 'kamen'
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
            <Game objects={objects}/>
        )
    }
}

export default App
