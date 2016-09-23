import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
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
    const { bottom, xOffset } = this.props;
    return (
      <AbstractSprite
        src={'ship.png'}
        tileHeight={75}
        tileWidth={98}
        offset={[0, 0]}
        state={0}
        steps={[0]}
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

export default connect(Ship.mapStateToProps)(Ship);
