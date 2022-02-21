import React, { createElement, Fragment } from 'react';
import { useState } from 'react';
// Import components
import Nav from './components/Nav'
import Form from './components/Form'
import Textarea from './components/Textarea'
import ToDoCards from './components/ToDoCards'
import Button from './components/Button'


// Placeholder for username logic
let username = ''
let cards = [
  { id: 0, title: 'title', content: 'content' },
  { id: 1, title: 'lorem', content: 'ipsum' }
];
let value;
let id = 2;

const App = () => {

  // Handle form:
  //title:
  const [title, setTitle] = useState('')
  const titleChange = (event) => {
    setTitle(event.currentTarget.value);
  };
  //Content:
  const [content, setContent] = useState('')
  const contentChange = (event) => {
    setContent(event.currentTarget.value);
  };


  // Handle the button clicks
  const buttonClick = (event) => {
    if (event.currentTarget.value === 'Add') {
      cards.push({ id: id, title: title, content: content })
      id++;
      console.log(cards)
      return (console.log('Function to handle add title and content to new card.'));
    }
  }



  return (
    <Fragment>

      <Nav username={username} />

      <main>
        <section className='forms'>
          <Form onChange={titleChange} name={'title'} id={'title'} type={'text'} value={value} />
          <Textarea onChange={contentChange} name={'content'} id={'content'} rows={"3"} />
          <Button value={'Add'} onClick={buttonClick} />
        </section>
        <section id="toDoCards">
          <h2>My todos:</h2>
          {/* <ListCards /> */}
          <ToDoCards cardList={cards} />
        </section>
      </main>
    </Fragment>
  );
}


export default App;
