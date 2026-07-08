import logo from "./logo.svg";
import "./App.css";

function App() {
  const handeleNameChange = () => {
    const names = ["Bob", "Kevin", "Dave", "Bhoomi"];
    const int = Math.floor(Math.random() * 4);
    return names[int];
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello {handeleNameChange()}!</p>
      </header>
    </div>
  );
}

export default App;
