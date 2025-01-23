import reactLogo from "../../assets/react.svg";

function Header() {
  return (
    <div>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <h1>React Flashcards</h1>
      <h3>🧠 Expand Your React Knowledge, One Flashcard at a Time! 🐌</h3>
    </div>
  );
}

export default Header;
