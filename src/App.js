import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./assets/styles/theme";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Home></Home>
      </ThemeProvider>
    </div>
  );
}

export default App;
