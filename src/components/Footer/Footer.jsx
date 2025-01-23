import reactLogo from '../../assets/react.svg';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <p>
        <small>Built with React</small>
      </p>
      <a href="https://react.dev" target="_blank">
        <img
          id="footer-logo"
          src={reactLogo}
          className="logo react"
          alt="React logo"
        />
      </a>
    </footer>
  );
}

export default Footer;
