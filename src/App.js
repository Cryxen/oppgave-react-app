import React, { Fragment } from 'react';
import { useState } from 'react';
// Import components
import Nav from './components/Nav'
import Form from './components/Form'
import Textarea from './components/Textarea'
import ToDoCards from './components/ToDoCards'
import Button from './components/Button'

// Placeholder for username logic
let username = ''


const App = () => {


// Handle form:
//title:
const [title, setTitle] = useState('')
const titleChange = (event) => {
  console.log(event.currentTarget.value);
  setTitle(event.currentTarget.value);
  console.log('current title:', title)
};
const [content, setContent] = useState('')
const contentChange = (event) => {
  console.log(event.currentTarget.value);
  setContent(event.currentTarget.value);
  console.log('current content:', content)
};


// Handle the button clicks
const buttonClick = (event) =>
{
  if(event.currentTarget.value === 'Add'){

    return(console.log('knapp trykket i forms'));
  }
}



    return (
      <Fragment>

          <Nav username={username} />

        <main>
        <section className='forms'>
          <Form onChange={titleChange} name={'title'} id={'title'} type={'text'} />
          <Textarea onChange={contentChange} name={'content'} id={'content'} rows={"3"} />
          <Button value={'Add'} onClick={buttonClick}/>
        </section>
        <section id="toDoCards">
          <h2>My todos:</h2>
          <ToDoCards/>
          <ToDoCards/>
          <ToDoCards/>
          <ToDoCards/>
          <ToDoCards/>
          <ToDoCards/>
          <ToDoCards/>
          <ToDoCards/>
          <ToDoCards/>
          <ToDoCards/>
          <ToDoCards/>
          <ToDoCards/>
          <ToDoCards/>
          <ToDoCards/>
          <ToDoCards/>
          <ToDoCards/>
          <ToDoCards/>
          <ToDoCards/>
        </section>
        </main>
     </Fragment>
    );
  }


export default App;
