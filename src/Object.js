import React, {useState} from 'react'

const ChoiceObject = ({ object, handleChoiceClick }) => {
    const [currentClass, updateCurrentClass] = useState('square')

    //toggle class when player selects an object to visually reflect it
    const toggleClass = () => {
        if (currentClass === 'square') {
            updateCurrentClass('square-selected')
        } else { 
            updateCurrentClass('square')
        }
    }

    //render object
    return (
        <div className={currentClass} onClick={() => {
            toggleClass();
            handleChoiceClick(object);
        }}>{object.name}</div>
    )
}

export default ChoiceObject