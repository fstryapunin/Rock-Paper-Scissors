import React from 'react'

const ChoiceObject = ({ object, handleChoiceClick }) => {

    //render object
    return (
        <div className="square" onClick={() => {        
            handleChoiceClick(object);
        }}>{object.name}</div>
    )
}

export default ChoiceObject