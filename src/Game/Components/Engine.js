// the main game engine
import React, { Component, PropTypes } from 'react';
import { Loop, World, Body, Sprite } from 'react-game-kit';
import GameBackground from './GameBackground';

const TEXT_STYLE = {
  color: 'white',
  textAlign: 'center',
  fontSize: '24px',
};
const SHIP_CONTAINER_STYLE = {
  position: 'absolute',
  bottom: 20,
  left: '50%',
  marginLeft: -49,
};

class Engine extends Component {
  render() {
    // place things like <World>, <Body>, etc here
    return (
      <World>
        <GameBackground src={'black.png'} repeat={true}>
          <div style={ TEXT_STYLE }>We are in the game!</div>
          <div style={ SHIP_CONTAINER_STYLE }>
            <Sprite
              offset={[0,0]}
              state={0}
              steps={[0]}
              scale={1}
              repeat={false}
              src={'ship.png'}
              tileHeight={75}
              tileWidth={98}
              style={{ bottom: 0 }}
            />
          </div>
        </GameBackground>
      </World>
    );
  }
}

export default Engine;
