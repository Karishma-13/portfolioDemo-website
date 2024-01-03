import "./assets/css/customStyle.css";
import "./assets/css/navbar.css";
import "./assets/css/introduction.css";
import "./assets/css/customCompStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import Introduction from "./components/Introduction/Introduction";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Introduction />
    </div>
  );
}

export default App;
