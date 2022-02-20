import React from 'react';
import Button from './Button'
import { useState } from 'react';


const Forms = ({textChange, name}) => {

    // const[text, setText] = useState({title:'', content:''})
    // const textChange = (event) => {
    //     console.log(event.target.value)
    //     const {name} = event.currentTarget
    //     const {value} = event.currentTarget
    //     console.log(name)
    //     console.log(value)
    //     setText((prevState) => ({...prevState, [name]: value}))
    //     console.log("Skrevet i tekstfeltet:",text)
    // }
    // const changeInText = (event) => {
    //     // const[text, setText] = useState({title:'', content:''});
    //     const {name} = event.currentTarget
    //     const {value} = event.currentTarget
    //     console.log("I Forms: ",event.target.value)
    //     {{textChange}(name, value)}
    // };
    
    return (
        <form action=""  id="forms">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name={name} onChange={textChange} />
            <label htmlFor="content">Content:</label>
            <textarea id="content" name={name} rows="2" cols="33" onChange={textChange} />
            <Button value={'Add'} />
        </form>
    )
    }

export default Forms




    
// return (
//     <form action=""  id="forms">
//         <label htmlFor="title">Title:</label>
//         <input type="text" id="title" name={"title"} onChange={textChange} />
//         <label htmlFor="content">Content:</label>
//         <textarea id="content" name={"content"} rows="2" cols="33" onChange={textChange} />
//         <Button value={'Add'} />
//     </form>
// )
// }