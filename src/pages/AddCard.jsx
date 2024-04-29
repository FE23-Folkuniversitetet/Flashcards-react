import { useState } from "react";

function AddCard({onAddCard}){
const [question, setQuestion] = useState(""); //tom sträng till en början
const [answer, setAnswer] = useState("");

	function handleClick(){
		onAddCard({question, answer});
		setQuestion("");
		setAnswer("");
	}
	
	return (
    <section>
      <h2>Lägg till en ny fråga:</h2>
      <label>
        Fråga:
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)} //anropar settern för att uppdatera värdet
        />
      </label>
      <label>
        Svar:
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)} //anropar settern för att uppdatera värdet
        />
      </label>
      <button onClick={handleClick}>Lägg till kort</button> 
    </section>
  );
}

export default AddCard;