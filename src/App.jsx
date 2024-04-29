import { useState } from 'react'
import './App.css'
import CardList from './pages/CardList';
import AddCard from './pages/AddCard';

function App() {
  const [cards, setCard] = useState([]);

  function addCard(card){ //tar emot ett kort som parameter och lägger till kort i lista 
	setCard((prevCard) => [...prevCard, card]);
  }

  return (
    <>
     <h1>Frågor och Svar</h1>
	 <CardList cards={cards}/>
	 <AddCard onAddCard={addCard}/>
    </>
  )
}

export default App;
