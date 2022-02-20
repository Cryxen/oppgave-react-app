import React from 'react';



const Button = (props) => {
    return (
        <input type="button" className="button" name="button" value={props.value} onClick={props.onClick}/>
    )
}

export default Button