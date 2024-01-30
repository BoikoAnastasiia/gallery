// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/Main/MainPage';
import Gallery from './components/Gallery/Gallery';
import Icons from './components/Icon/Icons';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/icons" element={<Icons />} />

        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;
