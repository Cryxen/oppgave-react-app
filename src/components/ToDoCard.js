import React from 'react';
import Button from './Button'

// One single card:
const ToDoCard = ({onClick}) => {
    return (
            <article>
                <h3>Title here</h3>
                <p>What the content would look like.</p>
                <Button value={'Complete'} onClick={onClick} />
            </article>
    )
}
export default ToDoCard