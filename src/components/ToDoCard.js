import React from 'react';
import Button from './Button'
import { useState } from 'react';
// One single card:
const ToDoCard = ({onClick, buttonClick, title, content}) => {

    const [showCard, setShowCard] = useState(true)

    const clickButton = (event) => {
        console.log('Button in toDoCard pressed');
        setShowCard(!showCard);
        console.log(showCard)
        
    }
    return (
            <article>
                {showCard ? (<h3>{title}</h3>):null}
                {showCard ? (<p>{content}</p>):null}
                {showCard ? (<Button value={'Complete'} onClick={clickButton} />) : null}
            </article>
    )
}
export default ToDoCard