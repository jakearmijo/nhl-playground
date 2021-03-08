import logo from "./assests/NHL_Logo_former.svg";
import "./App.css";
import TileMainButton from "./UI/molecules/TileMain";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Today's Tilts.</p>
        <TileMainButton></TileMainButton>
        <a
          className="App-link"
          href="https://nhl.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Today's Tilts
        </a>
      </header>
    </div>
  );
}

export default App;
