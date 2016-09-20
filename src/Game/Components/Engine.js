// the main game engine
import React, { Component, PropTypes } from 'react';
import { World, Body } from 'react-game-kit';

const TEXT_STYLE = {
  textAlign: 'center',
  fontSize: '24px',
};

class Engine extends Component
{
  render() {
    // place things like <World>, <Body>, etc here
    return (
      <p style={ TEXT_STYLE }>We are in the game!</p>
    );
  }
}

export default Engine;
