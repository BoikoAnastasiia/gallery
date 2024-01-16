// src/components/Main/MainPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const MainPage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Gallery</h1>
      <nav>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/icons">View Icons Gallery</Link>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <Link to="/pictures">View Pictures Gallery</Link>
          </li>
          <li>
            <Link to="/colors">View Colors Gallery</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainPage;
