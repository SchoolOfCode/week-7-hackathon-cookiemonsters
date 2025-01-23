import Flashcard from "../Flashcard/Flashcard.jsx"

function Flashcards({ cardList }) {
    
    
    return (
    <div className="flashcards">
        {cardList.map((cardObj, index) => (
            <Flashcard key={index} cardObj={cardObj} />)

        )}
    </div>
    );
}

export default Flashcards;
