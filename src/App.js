import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Hotdog from './components/Hotdog'; // Correct import statement
import Smoothie from './components/Smoothie';
import Profile from './components/Profile';

import Scanning from './components/Scanning';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/detect" element={<Scanning />} />
        <Route path="/first" element={<Hotdog />} />
        <Route path="/second" element={<Smoothie />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
