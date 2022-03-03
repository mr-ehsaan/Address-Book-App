import React from "react";

import "./assets/styleSheets/App.less";
import Home from "./pages/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SettingPage from "./pages/SettingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
