import Homepage from "../src/Components/Homepage/Homepage";
import Nav from "../src/Components/Nav/Nav";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
