import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={<LandingPage/>} /> 
      </Routes>
    </Router>
  );
};

export default App;
