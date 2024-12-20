import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Aggiungi from './components/Aggiungi';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Loads Home page at /recanti/ */}
      <Route path="/aggiungi" element={<Aggiungi />} /> {/* Loads Aggiungi page at /recanti/aggiungi */}
    </Routes>
  );
}

export default App;