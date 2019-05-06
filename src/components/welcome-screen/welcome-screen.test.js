import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";

import {
  testGameValue
} from "./test-mock-data.js";

it(`Main page correctly renders`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      paramsGame={testGameValue}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
