import "./App.css";
import Home from "./pages/HomePage";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SettingPage from "./pages/SettingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [nat, setNat] = useState("CH");
  const setNationality = (value) => {
    setNat(value);
  };
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
            element={<SettingPage setNationality={setNationality} nat={nat} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
