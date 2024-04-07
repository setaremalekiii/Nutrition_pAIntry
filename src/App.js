import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Scanning from './components/Scanning';
import Hotdog from './components/Hotdog';
import Smoothie from './components/Smoothie';
import Profile from './components/Profile'

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/detect" element={<Scanning />} />
       <Route path="/second" element={<Smoothie />} /> {/* Page A component */}
       <Route path="/first" element={<Hotdog />} /> {/* Page B component */}
       <Route path="/profile" element={<Profile />} /> {/* Page A component */}

      </Routes>
    </Router>
  );
}

export default App;
