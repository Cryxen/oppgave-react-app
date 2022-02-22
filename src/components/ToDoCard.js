import React from 'react';
import Button from './Button'
import { useState } from 'react';
import { Fragment } from 'react/cjs/react.development';
// One single card:
const ToDoCard = ({ onClick, buttonClick, title, content }) => {

    const [showCard, setShowCard] = useState(true)

    const clickButton = (event) => {
        console.log('Button in toDoCard pressed');
        setShowCard(!showCard);
        console.log(showCard)

    }


    if (showCard) {
        return (
            <article>

                <h3>{title}</h3>
                <p>{content}</p>
                <Button value={'Complete'} onClick={clickButton} id={'toDoCardButton'} />

            </article>
        )
    }
    else {
        return (
            <p></p>
        )
    }



}
export default ToDoCard