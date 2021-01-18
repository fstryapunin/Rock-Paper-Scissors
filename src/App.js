import React, { useState, useEffect } from 'react'
import Game from './Game.js'
import Result from './Result.js'
import Options from './Options.js'
import './App.css'



const App = () => {
    const [showGame, updateShowGame] = useState(false)
    const [showResult, updateShowResult] = useState(false)
    const [showOptions, updateShowOptions] = useState(false)
    const [playerChoice, updatePlayerChoice] = useState()
    const [computerChoice, updateComputerChoice] = useState()
    const [gameResult, updateGameResult] = useState('')
    const [objects, updateObjects] = useState(
        [
            {
                id: 1,
                name: 'kámen',
                beatsId: [2]              
            },
            {
                id: 2,
                name: 'nůžky',
                beatsId: [3]               
            },
            {
                id: 3,
                name: 'papír',
                beatsId: [1]        
            },            
        ]
    )
    
    //judge the result of the game then display it
    const judgeTheHand = () => {
        if (playerChoice && computerChoice) {
            const didPlayerWin = playerChoice.beatsId.includes(computerChoice.id)          
            if (didPlayerWin) { 
                updateGameResult('Vyhrál jsi!')
            }
            if (!didPlayerWin && playerChoice.id === computerChoice.id) { 
                updateGameResult('Remíza!')
            }
            if (!didPlayerWin && playerChoice.id !== computerChoice.id) {
                updateGameResult('Prohrál jsi!')
            }
            toggleShowResult();
        }
    }


    //trigger a function to judge the result of the game each time computer choice is updated (only happens after player has chosen an object or on restart), 
    //done in this way because updating state is asynchronous in react.js 
    useEffect(judgeTheHand, [computerChoice])

    

    //store player choice object in state when player clicks on an object, trigger computer to choose an object
    const handleChoiceClick = (object) => {        
        updatePlayerChoice(object)
        selectObject();        
    }

    //computer selects object based on id generated by function get random id
    const selectObject = () => {
        const selectedId = getRandomId(objects.length)
        
        //find object in array of onjects by id
        const selectedObject = objects.find(obj => {
            return obj.id === selectedId
        })

        updateComputerChoice(selectedObject)
    }

    //generate random number between 1 and the number of choices
    const getRandomId = (max) => {      
        const roundedInteger =  Math.floor((Math.random()*max) + 1); 
        return roundedInteger
    }

    //reset state after display result
    const resetChoices = () => {
        updatePlayerChoice(null)
        updateComputerChoice(null)
    }

    const toggleShowResult = () => {
        updateShowResult(!showResult)
    }

    const removeObject = (object) => { 
        const newObjects = objects.filter(obj => { 
            return obj.id !== object.id
        })
        updateObjects(newObjects)
    }

    const addObject = (object) => {
        console.log(object)
        const newObjectList = objects.concat(object)
        updateObjects(newObjectList)
    }


    //based on state either render main menu or game or the result of the game or options
    if (!showGame && !showOptions) {
        return (
            <div className="main-view">
                <h1>Kámen, nůžky, papír & jiné</h1>
                <div>
                    <button onClick={() => { updateShowGame(true) }} className="main-view-button">Začít</button>
                    <button onClick={() => { updateShowOptions(true)}}className="main-view-button">Nastavení</button>
                </div>
            </div>
        )
    }
    if (showGame) {
        if (!showResult) {
            return (
                <div>
                    <Game objects={objects} handleChoiceClick={handleChoiceClick} />
                    <button onClick={() => {updateShowGame(false)}}className="exit-button">Zpět</button>
                    <button onClick={() => {
                        console.log(playerChoice)
                        console.log(computerChoice)
                        console.log(showResult)
                    }
                    }>check state</button>
                </div>
            )
        }
        if (showResult) {
            return (
                <Result result={gameResult} toggleShowResult={toggleShowResult} playerChoice={playerChoice} computerChoice={computerChoice} resetChoices={resetChoices}/>
            )
        }
    }
    if (showOptions) { 
        return (
            <div>
                 <button onClick={() => {updateShowOptions(false)}}className="exit-button">Zpět</button>
                <Options objects={objects} removeObject={removeObject} addObject={addObject} />
            </div>
        )
    }
}


export default App

