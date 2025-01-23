import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Form from "./components/Form/Form.jsx";
import Flashcards from "./components/Flashcards/Flashcards.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [cardList, setCardList] = useState([
    { question: "question 1", answer: "answer 1" },
    { question: "question 2", answer: "answer 2" },
    { question: "question 3", answer: "answer 3" },
  ]);

  return (
    <>
      <Header />
      <Form />
      <Flashcards />
      <Footer />
    </>
  );
}

export default App;
