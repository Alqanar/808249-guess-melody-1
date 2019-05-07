import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen.jsx";

import {
  testGameValue
} from "./test-mock-data.js";

Enzyme.configure({adapter: new Adapter()});

it(`Clicking on the button "start the game" will trigger a callback`, () => {
  const clickHandler = jest.fn();
  const welcomeScreen = shallow(<WelcomeScreen
    paramsGame={testGameValue}
    onClick={clickHandler}
  />);

  const startGame = welcomeScreen.find(`.welcome__button`);

  startGame.simulate(`click`, {preventDefault() {}});

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
