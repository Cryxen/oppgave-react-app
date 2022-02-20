import React from 'react';


const buttonEvent = (event) => {
    console.log("knapp trykket");
    }

const Button = ({value}) => {
    return (
        <input type="button" className="button" name="button" value={value} onClick={buttonEvent}/>
    )
}

export default Button