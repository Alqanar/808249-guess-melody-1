import React from "react";

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import {
  paramsGame
} from './mock-data.js';


const App = () => {
  return (
    <WelcomeScreen
      paramsGame={paramsGame}
    />
  );
};

export default App;
