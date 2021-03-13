import logo from "./assests/NHL_Logo_former.svg";
import "./assests/App.css";
import TileMainButton from "./UI/molecules/TileMain";
import Standings from './UI/molecules/Standings'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Standings />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Today's Tilts.</p>
        <TileMainButton></TileMainButton>
        <a
          className="App-link"
          href="https://www.nhl.com"
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
