import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./pages/Details";
import Deposit from "../src/components/Deposit";
import Withdrwal from "../src/components/Withdwal";
import HeaderBar from "./components/HeaderBar";

function App() {
  return (
    <div className="App">
      <Router>
        {/* rendering header bar outside the switch to render in every routed pages/components */}
        <HeaderBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/details" element={<Details />} />
          <Route exact path="/withdrawl" element={<Withdrwal />} />
          <Route exact path="/deposit" element={<Deposit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
