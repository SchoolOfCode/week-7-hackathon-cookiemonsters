import reactLogo from "../../assets/react.svg";

function Footer() {
  return (
    <div>
      <p><small>Built with React</small></p>
      <a href="https://react.dev" target="_blank">
        <img id="footer-logo" src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  );
}

export default Footer;
