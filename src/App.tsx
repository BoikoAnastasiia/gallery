// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/Main/MainPage';
import IconsList from './components/Icons/IconsList';
import PicturesList from './components/Pictures/PicturesList';
import ColorsList from './components/Colors/ColorsList';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/icons" element={<IconsList />} />
        <Route path="/pictures" element={<PicturesList />} />
        <Route path="/colors" element={<ColorsList />} /> */}
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;
