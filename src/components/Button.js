import React from 'react';



const Button = (props) => {
    return (
        <input type="button" className="button" name="button" id={props.id} value={props.value} onClick={props.onClick} />
    )
}

export default Button