import logo from "../logo.svg";
import "./styles_css/reactLogo.css";

export function ReactLogo() {
  return (
    <div className="divLogo">
      <img src={logo} className="App-logo" alt="logo" />
      <p className="powered">
        Powered by{"  "}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
      </p>
    </div>
  );
}
