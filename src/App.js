import "./App.css";
import Home from "./pages/HomePage";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SettingPage from "./pages/SettingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [nat, setNat] = useState("CH");
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Home nat={nat} />} />
        </Routes>
        <Routes>
          <Route
            exact
            path="/setting"
            element={<SettingPage setNat={setNat} nat={nat} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
