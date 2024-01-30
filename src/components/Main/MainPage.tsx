// src/components/Main/MainPage.tsx
import React from 'react';
import Gallery from '../Gallery/Gallery';
import Icons from '../Icon/Icons'; // Assuming IconComponent exists

const MainPage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Main Page</h1>
      <Icons />
      <Gallery />
    </div>
  );
};

export default MainPage;
