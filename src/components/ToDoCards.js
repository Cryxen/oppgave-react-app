import React from 'react';
import { useState } from 'react';
import ToDoCard from './ToDoCard';
import { Fragment } from 'react/cjs/react.development';


const ToDoCards = () => {
    const [showCard, setShowCard] = useState(true)

    // Logic to hide cards that are complete
    const clickButton = (event) => {
        console.log('Button in toDoCard pressed');
        setShowCard(!showCard);
    }

    return (
        <Fragment>
            {showCard ? (
            <ToDoCard onClick={clickButton} />
            ) : null}
            </Fragment>
    )
}


export default ToDoCards


