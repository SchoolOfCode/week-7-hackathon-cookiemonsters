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
      <h2>React Flashcards</h2>
      <h5>
        🧠 Expand Your React Knowledge, One Flashcard at a Time! 🐌
      </h5>
    </header>
  );
}

export default Header;
