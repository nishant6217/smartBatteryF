// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Login from './components/login/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/dashboard/Home';
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
