import React from 'react';
import { render } from 'react-dom';
import Game from './Game';

const ROOT_ID = 'game-content';
const reactRoot = document.getElementById(ROOT_ID);
if (reactRoot) {
  render(<Game />, reactRoot);
} else {
  console.warn('Unable to find element with ID: #' + ROOT_ID);
}
