import React, { Component, Fragment } from 'react';
import { useState } from 'react';
// Import components
import Nav from './components/Nav'
import Forms from './components/Forms'
import ToDoCards from './components/ToDoCards'

// Placeholder for username logic
let username = ''


const App = () => {
// Handle form:

const[text, setText] = useState({title:'', content:''})
const textChange = (event) => {
  const {name} = event.currentTarget
  const {value} = event.currentTarget
  console.log(name)
  console.log(value)
  setText((prevState) => ({...prevState, [name]: value}))
  console.log('test')
  console.log(text);
};



// const textChange = (event) => {
//     console.log(event.target.value)
//     const {name} = event.currentTarget
//     const {value} = event.currentTarget
//     console.log(name)
//     console.log(value)
//     setText((prevState) => ({...prevState, [name]: value}))
//     console.log("Skrevet i tekstfeltet:",text)
// }
    return (
      <Fragment>

          <Nav username={username} />

        <main>
        <section>
          <Forms handleChange={textChange} name={name} />
        </section>
        <section id="toDoCards">
          <h2>My todos:</h2>
          <ToDoCards />
          <ToDoCards />
          <ToDoCards />
          <ToDoCards />
          <ToDoCards />
          <ToDoCards />
          <ToDoCards />
        </section>
        </main>
     </Fragment>
    );
  }


export default App;
