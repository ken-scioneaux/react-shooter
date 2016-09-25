import React, { Component, PropTypes } from 'react';
import AbstractSprite from './AbstractSprite';

class UFO extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    xOffset: PropTypes.number.isRequired,
    yOffset: PropTypes.number.isRequired,
    state: PropTypes.number.isRequired,
  };
  render() {
    const { yOffset, xOffset, state } = this.props;
    return (
      <AbstractSprite
        src={'EnemyShip.png'}
        tileHeight={91}
        tileWidth={91}
        offset={[0, 0]}
        state={state}
        steps={[0, 0, 0, 0]}
        style={{ top: yOffset, left: xOffset }}
      />
    );
  }
}

export default UFO;
