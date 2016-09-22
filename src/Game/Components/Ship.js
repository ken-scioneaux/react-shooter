import React, { Component, PropTypes } from 'react';
import { Sprite } from 'react-game-kit';
import { connect } from 'react-redux';

class Ship extends Component
{
  static propTypes = {
    offset: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    state: PropTypes.number.isRequired,
    steps: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    scale: PropTypes.number,
    repeat: PropTypes.bool,
    src: PropTypes.string,
    tileHeight: PropTypes.number,
    tileWidth: PropTypes.number,
    bottom: PropTypes.number,
  };
  static defaultProps = {
    scale: 1,
    repeat: false,
    src: 'ship.png',
    tileHeight: 75,
    tileWidth: 98,
    bottom: 0,
  };
  render() {
    const { bottom, ...restOfProps } = this.props;
    return (
      <Sprite
        style={{ bottom }}
        { ...restOfProps }
      />
    );
  }
  static mapStateToProps = (state, ownProps) => {
    return {
      ...state.ship,
      ...ownProps,
    };
  };
}

export default connect(Ship.mapStateToProps)(Ship);
