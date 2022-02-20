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
let cardId = 0
let cardList = [0]
const App = () => {


// Handle form:
//title:
const [title, setTitle] = useState('')
const titleChange = (event) => {
  setTitle(event.currentTarget.value);
  console.log('Current title: ', title)
};
//Content:
const [content, setContent] = useState('')
const contentChange = (event) => {
  setContent(event.currentTarget.value);
  console.log('Current content: ', content)
};

const [cards, setCard] = useState(new Map())
const makeNewCard = (cardId, title, content) => {
  
  let card = [cardId={cardId}, title={title}, content={content}];
  console.log('Card: ',card);
  console.log(cardId)
  cardList.push(card);
  console.log('cardlist ', cardList)
  console.log('cardState', cards)
  setCard(new Map(card));
  console.log(cards)
  
}

// const ListCards = () => {
// let card = cardList.map((item)=><ToDoCards key={item} />, console.log('inside of map'))
// console.log('inside ListCards', card)
// return(card)
// }

// Handle the button clicks
const buttonClick = (event) =>
{
  if(event.currentTarget.value === 'Add'){
    makeNewCard(cardId, title, content);
    cardId++
    // ListCards();
    return(console.log('Function to handle add title and content to new card.'));
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
          {/* <ListCards /> */}
          {cardList.map((cards)=>(
            <ToDoCards key={cardId}/>
          ))}
        </section>
        </main>
     </Fragment>
    );
  }


export default App;
