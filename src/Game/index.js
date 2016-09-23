// main game entry point

import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Loop, Stage } from 'react-game-kit';

import connect from '../Lib/connect';
import MainState from './Components/MainState';

export default class Game extends Component
{
  static propTypes = {
    store: PropTypes.object.isRequired,
  };
  render() {
    return (
      <Provider store={ this.props.store }>
        <Loop>
          <Stage>
            <MainState />
          </Stage>
        </Loop>
      </Provider>
    );
  }
}
