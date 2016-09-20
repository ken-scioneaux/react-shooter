import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import reducer from './Game/Reducers';
import Game from './Game';

const INIT_STORE_ACTION = 'init';
const ROOT_ID = 'game-content';
const reactRoot = document.getElementById(ROOT_ID);
if (reactRoot) {
  const store = createStore(reducer, applyMiddleware(createLogger()));
  store.dispatch({ type: INIT_STORE_ACTION });
  render(
    <Game store={ store } />,
    reactRoot
  );
} else {
  console.warn('Unable to find element with ID: #' + ROOT_ID);
}
