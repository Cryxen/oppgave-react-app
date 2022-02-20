import React from 'react';
import Button from './Button'

const ToDoCards = () => {
    return (
        <article className="toDoCard">
            <h3>Todotitle</h3>
            <p>Her vil vi legge cards</p>
            <Button value={'Complete'} />
      </article>
    )
}

export default ToDoCards