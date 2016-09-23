import React, { Component, PropTypes } from 'react';
import connect from '../../Lib/connect';
import AbstractSprite from './AbstractSprite';

class Ship extends Component
{
  static propTypes = {
    xOffset: PropTypes.number.isRequired,
    bottom: PropTypes.number,
  };
  static defaultProps = {
    bottom: 0,
  };
  render() {
    const { bottom, xOffset, shipState } = this.props;
    return (
      <AbstractSprite
        src={'PlayerShip-Style1.png'}
        tileHeight={75}
        tileWidth={98}
        offset={[0, 0]}
        state={shipState}
        steps={[0, 0, 0, 0]}
        style={{ bottom, left: xOffset }}
      />
    );
  }
  static mapStateToProps = (state) => {
    return {
      ...state.ship
    };
  };
}

export default connect(Ship);
