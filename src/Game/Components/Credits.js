import React, { Component, PropTypes } from 'react';
import MenuList from './MenuList';

const BASE_STYLE = {
  position: 'absolute',
  left: '0',
  right: '0',
  margin: '0 auto',
  fontSize: '24px',
  textAlign: 'center',
};

const TWO_PI = 2 * Math.PI;

export default class Credits extends Component
{
  static MAX_TICKS = 240;
  static MAX_HEIGHT = 200;
  static contextTypes = {
    loop: PropTypes.object,
  };
  static propTypes = {
    onMainMenu: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      tick: 1,
      red: 8,
      blue: 32,
      green: 64,
    };
    this.update = this.update.bind(this);
  }
  update() {
    const tick = (this.state.tick + 1) % Credits.MAX_TICKS;
    const ratio = (tick * TWO_PI) / Credits.MAX_TICKS;
    this.setState({
      tick,
      red: (this.state.red - 31) % 224 + 32,
      blue: (this.state.blue - 31) % 224 + 32,
      green: (this.state.green - 31) % 224 + 32,
      height: Math.sin(ratio) * Credits.MAX_HEIGHT + Credits.MAX_HEIGHT,
    });
  };
  componentDidMount() {
    this.context.loop.subscribe(this.update);
  }
  componentWillUnmount() {
    this.context.loop.unsubscribe(this.update);
  }
  render() {
    const { red, blue, green, height } = this.state;
    const containerStyle = {
      ...BASE_STYLE,
      top: height + 'px',
    };
    const textStyle = {
      color: `rgba(${red}, ${blue}, ${green}, 1.0)`,
    };
    const menuListOptions = [
      { label: 'Back to Main Menu', onClick: this.props.onMainMenu }
    ];
    return (
      <div>
        <MenuList options={menuListOptions} />

        <div style={ containerStyle }>
          <p style={ textStyle }>
            Made with love by Dan and Andrew
          </p>
        </div>
      </div>
    );
  }
}
