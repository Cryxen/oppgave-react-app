import React from 'react';
import { useState } from 'react';
import ToDoCard from './ToDoCard';
import { Fragment } from 'react/cjs/react.development';


const ToDoCards = ({ cardList }) => {



    return (
        <Fragment>
            
                {cardList.map((item) => (<ToDoCard key={item.id} title={item.title} content={item.content} />))}
            
        </Fragment>
    )
}


export default ToDoCards


