import React, {useState} from 'react'
import ObjectListing from './ObjectListing'
import './Game.css'

const Options = ({ objects, removeObject, addObject }) => {

    const newObject = {
        id: (objects.length + 1),
        name: '',
        beatsId: [],
    }

    const listings = objects.map(object => { 
        return <ObjectListing object={object} removeObject={removeObject}/>
    })

    const beatsThisList = objects.map(object => {
        return(
            <div className="object-listing">{object.name} <input id={object.id} type="checkbox"onClick={(event) => {newObject.beatsId.push(parseInt(event.target.id)) }}></input></div>
        )
    })   

    return (
        <div className="game-container">            
            <h1>Objekty na výběr</h1>
            <div>
                {listings}
            </div>
            <h1>Přidat další</h1>
            <div className="new-object-form">
                <h3 className="object-form-item">Jméno</h3>
                <input className="object-form-item" onChange={(event) => {
                    Object.assign(newObject, { name: event.target.value })                    
                }}></input>                
                <h3 className="object-form-item">Poráží</h3>
                {beatsThisList}
                <button className="object-form-item" onClick={() => { addObject(newObject) }}>Přidat další</button>
            </div>            
        </div>
    )
}

export default Options