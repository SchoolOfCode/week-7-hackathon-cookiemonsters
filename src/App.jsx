import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [cardList, setCardList] = useState([ null, null, null ]);
  
  return (
    <>
      <Header />
      <Form />
      <Flashcards />
      <Footer />      
    </>
  )
}

export default App
