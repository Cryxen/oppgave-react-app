import React from 'react';
import { Fragment } from 'react';


const Textarea = (props) => {


    return (
        <Fragment>
            <label htmlFor={props.name}>{props.name}</label> 
            <textarea id={props.id} name={props.name} onChange={props.onChange} rows="3" />
        </Fragment>
    )
    }

export default Textarea


