import logo from "./assests/NHL_Logo_former.svg";
import "./assests/App.css";
import TileMainButton from "./UI/molecules/TileMain";
import Standings from './UI/molecules/Standings'
import TodaysTiltLogo from './UI/atoms/TodaysTiltLogo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Standings />
        <TodaysTiltLogo />
        <TileMainButton></TileMainButton>
        
      </header>
    </div>
  );
}

export default App;
