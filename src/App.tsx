// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import IconsList from './components/Icons/IconsList';
import PicturesList from './components/Pictures/PicturesList';
import ColorsList from './components/Colors/ColorsList';
import MainPage from './components/Main/MainPage';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/icons">Icons</Link>
            </li>
            <li>
              <Link to="/pictures">Pictures</Link>
            </li>
            <li>
              <Link to="/colors">Colors</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/icons" component={IconsList} />
          <Route path="/pictures" component={PicturesList} />
          <Route path="/colors" component={ColorsList} />
          <Route path="/" component={MainPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
