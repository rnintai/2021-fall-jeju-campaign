import logo from "./assets/logo.svg";
import "./App.css";
import ApiTest from "./components/ApiTest";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Kim, Min-tae</p>
      </header>
      <ApiTest></ApiTest>
    </div>
  );
}

export default App;
