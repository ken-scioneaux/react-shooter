import React, { Component, PropTypes } from 'react';

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
          width: '100%',
          height: '100%',
        }}
      >
        {React.Children.map(children, (elm) => {
          return React.cloneElement(elm);
        })}
      </div>
    );
  }
}

export default GameBackground;

