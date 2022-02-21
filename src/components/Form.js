import React from 'react';
import { Fragment } from 'react';


const Form = (props) => {


    return (
        <Fragment>
            <label htmlFor={props.name}>{props.name}</label>
            <input type={props.type} id={props.id} name={props.name} onChange={props.onChange} value={props.value}/>
        </Fragment>
    )
    }

export default Form

