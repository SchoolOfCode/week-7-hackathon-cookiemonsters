import { useState } from "react";
import "./Flashcard.css";
import thinkinglogo from "../../assets/thinking.png";
import mindblowlogo from "../../assets/mindblow.png";

function Flashcard({ cardObj }) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
    setIsFlipped(!isFlipped);
  }

  let toggleClassCheck = isFlipped ? "active" : "inactive";

  let logoImage = isFlipped ? mindblowlogo : thinkinglogo;

  return (
    <div className={toggleClassCheck} onClick={handleClick}>
      <img src={logoImage} className="thinking" alt="Logo" />
      {isFlipped ? cardObj.answer : cardObj.question}
      <div id="X">X</div>
    </div>
  );
}

export default Flashcard;
