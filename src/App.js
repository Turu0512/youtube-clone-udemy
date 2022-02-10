import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Top from "./pages/Top";
import Search from "./pages/Search";
import Watch from "./pages/Watch";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Top />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/watch" element={<Watch />} />
      </Routes>
    </Router>
  );
};

export default App;
