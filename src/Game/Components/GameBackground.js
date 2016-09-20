import React, { Component, PropTypes } from 'react';

const DEFAULT_STYLES = {
  width: '100%',
  height: '100%',
};

class GameBackground extends Component {
  static props = {
    src: PropTypes.string.isRequired,
    repeat: PropTypes.bool,
    children: PropTypes.arrayOf(PropTypes.node),
  };

  render() {
    const { repeat, src, children } = this.props;

    return (
      <div
        style={{
          backgroundImage: `url(${src})`,
          backgroundRepeat: repeat ? 'repeat' : 'initial',
          ...DEFAULT_STYLES,
        }}
      >
        {children}
      </div>
    );
  }
}

export default GameBackground;

