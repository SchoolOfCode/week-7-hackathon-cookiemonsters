import reactLogo from '../../assets/react.svg';
import './Header.css';

function Header() {
  return (
    <header>
      <a href="https://react.dev" target="_blank">
        <img
          src={reactLogo}
          className="logo react"
          alt="React logo"
        />
      </a>
      <h1>React Flashcards</h1>
      <h4>
        🧠 Expand Your React Knowledge, One Flashcard at a Time! 🐌
      </h4>
    </header>
  );
}

export default Header;
