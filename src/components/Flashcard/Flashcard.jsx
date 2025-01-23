import { useState } from "react";

function Flashcard({ cardObj }) {
    const [isFlipped, setIsFlipped] = useState(false);

    function handleClick() {
        setIsFlipped(!isFlipped);
    }

    return (
        <div onClick={handleClick}>{isFlipped ? cardObj.answer : cardObj.question}</div>
    );
}

export default Flashcard;
