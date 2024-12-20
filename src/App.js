import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Aggiungi from './components/Aggiungi';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aggiungi" element={<Aggiungi />} />
    </Routes>
  );
};

export default App;