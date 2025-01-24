import Flashcard from "../Flashcard/Flashcard.jsx";
import "./Flashcards.css";

function Flashcards({ cardList }) {
  return (
    <div className="flashcards">
      {cardList.map((cardObj, index) => (
        <Flashcard key={index} cardObj={cardObj} />
      ))}
    </div>
  );
}

export default Flashcards;
