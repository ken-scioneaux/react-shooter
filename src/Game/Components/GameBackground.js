import React, { Component, PropTypes } from 'react';

const DEFAULT_STYLES = {
  width: '100%',
  height: '200%',
  position: 'absolute',
};

const scale = 2.56;

class GameBackground extends Component {
  static props = {
    src: PropTypes.string.isRequired,
    repeat: PropTypes.bool,
    position: PropTypes.number,
    children: PropTypes.arrayOf(PropTypes.node),
  };
  static defaultProps = {
    repeat: false,
  };
  render() {
    const { position, repeat, src, children } = this.props;

    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${src})`,
            backgroundRepeat: repeat ? 'repeat' : 'initial',
            bottom: position * scale * -1,
            ...DEFAULT_STYLES,
          }}
        />
        {children}
      </div>
    );
  }
}

export default GameBackground;
