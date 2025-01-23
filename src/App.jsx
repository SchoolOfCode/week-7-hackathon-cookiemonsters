import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Form from "./components/Form/Form.jsx";
import Flashcards from "./components/Flashcards/Flashcards.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [cardList, setCardList] = useState([
    {
      question: "What is React?",
      answer:
        "React is a JavaScript library aiming to building UIs based on components more seamless.",
    },
    {
      question: "What is JSX?",
      answer:
        "JSX stands for JavaScript XML. It allows us to write HTML in React.",
    },
    {
      question: "How do you create a React component?",
      answer:
        "Components can be created as functions or classes that return JSX",
    },
  ]);

  function handleCardAddClick(e) {
    e.preventDefault();
    const questionValue = e.target.question.value;
    const answerValue = e.target.answer.value;
    const newCardList = [...cardList];
    newCardList.push({
      question: questionValue,
      answer: answerValue,
    });
    setCardList(newCardList);
  }

  return (
    <>
      <Header />
      <Form handleCardAddClick={handleCardAddClick} />
      <Flashcards cardList={cardList} />
      <Footer />
    </>
  );
}

export default App;
