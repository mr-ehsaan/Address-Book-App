import React from "react";

import "./assets/styleSheets/App.less";
import Home from "./pages/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SettingPage from "./pages/SettingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/setting" element={<SettingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
