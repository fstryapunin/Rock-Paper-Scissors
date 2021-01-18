import React from 'react'
import './Game.css'
const ObjectListing = ({ object, removeObject }) => {
    
    //render object listing based on object being deletable
    if (object.id === 1 || object.id === 2 || object.id === 3) {
        return (
            <div className="object-listing">{object.name}</div>
        )
    } else { 
        return (
            <div className="object-listing">{object.name}<button onClick={() => { removeObject(object)}}>Smazat</button></div>
        )
    }
}

export default ObjectListing