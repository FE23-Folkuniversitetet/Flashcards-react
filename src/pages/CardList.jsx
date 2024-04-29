import { useState } from "react";
import "./CardList.css"

function CardList({cards}){
const [flippedCards, setFlippedCards] = useState([]);
	
	
	const handleCardClick = (index) => {
		if(flippedCards.includes(index)){
			//om kortet redan flippat, ta bort från listan
			setFlippedCards(flippedCards.filter(cardIndex => cardIndex !== index))
		}
		else {
			//annars lägg till det i listan
			setFlippedCards([...flippedCards, index]);
		}
	}
	
	
	return (
    <>
      <h2>Lista med dina frågor</h2>
      {/* för varje kort skapas div med attributet key som sätts till värdet på index */}
      {cards &&
        cards.map((card, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className={`card ${flippedCards.includes(index) ? "flipped" : ""}`}
          >
            <div className="card-inner">
              <div className="card-front">
                <p>Fråga: {card.question}</p>
              </div>
              <div className="card-back">
                <p>Svar: {card.answer}</p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default CardList;