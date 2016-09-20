// the main game engine
import React, { Component, PropTypes } from 'react';
import { Loop, World, Body, Sprite } from 'react-game-kit';
import GameBackground from './GameBackground';

const TEXT_STYLE = {
  position: 'absolute',
  top: 10,
  left: 0,
  right: 0,
  margin: 'auto',
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
  static MAX_TICKS = 100;
  static contextTypes = {
    loop: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.state = {
      tick: 1,
    };
  }

  update() {
    const tick = (this.state.tick + 1) % Engine.MAX_TICKS;
    this.setState({
      tick,
    });
  };

  componentDidMount() {
    this.context.loop.subscribe(this.update);
  }

  componentWillUnmount() {
    this.context.loop.unsubscribe(this.update);
  }

  render() {
    const { tick } = this.state;
    // place things like <World>, <Body>, etc here
    return (
      <World>
        <GameBackground src={'black.png'} repeat position={tick}>
          <div style={ TEXT_STYLE }>We are in the game! {tick}</div>
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
