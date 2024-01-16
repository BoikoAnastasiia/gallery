// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/Main/MainPage';
import IconsList from './components/Icons/IconsList';
import PicturesList from './components/Pictures/PicturesList';
import ColorsList from './components/Colors/ColorsList';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/icons" render={(props) => <IconsList {...props} />} />
          <Route
            path="/pictures"
            render={(props) => <PicturesList {...props} />}
          />
          <Route path="/colors" render={(props) => <ColorsList {...props} />} />
          <Route path="/" render={(props) => <MainPage {...props} />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
