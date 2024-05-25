// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './routes/Login';
import SignUp from './routes/SignUp';
import Loginpic from './routes/Loginpic';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginpic />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
