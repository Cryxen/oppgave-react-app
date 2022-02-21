import React from 'react';
import { useState } from 'react';
import ToDoCard from './ToDoCard';
import { Fragment } from 'react/cjs/react.development';


const ToDoCards = ({cardList}) => {
    const [showCard, setShowCard] = useState(true)


    // Logic to hide cards that are complete
    const buttonclick = (event) => {
        console.log('Button in toDoCard pressed');

    }

    // const cardHandling = cardList.map ((item) => (
    //      (
    //         <ToDoCard title={item.title} content={item.content} />,
    //         console.log(item)
    //     )
    // )
    // )
    


    return (
        <Fragment>
            <ToDoCard buttonclick={buttonclick} />
            <cardHandling />
            </Fragment>
    )
}


export default ToDoCards


