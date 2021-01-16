import React from 'react'

const choiceObject = ({ object, handleChoiceClick }) => {    
    return (
        <div className="square" onClick={() => { handleChoiceClick(object)}}>{object.name}</div>
    )
}

export default choiceObject