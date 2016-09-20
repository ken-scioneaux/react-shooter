// the main menu
import React, { Component, PropTypes } from 'react';

export default class MainMenu extends Component
{
  static MAX_TICK = 60;
  static contextTypes = {
    loop: PropTypes.object,
  };
  constructor(props) {
    super(props);

    this.update = this.update.bind(this);
    this.state = {
      tickCount: 0,
    };
  }
  update = () => {
    this.setState({
      tickCount: (this.state.tickCount + 1) % MainMenu.MAX_TICK,
    });
  };

  componentDidMount() {
    this.context.loop.subscribe(this.update);
  }

  componentWillUnmount() {
    this.context.loop.unsubscribe(this.update);
  }

  render() {
    const { tickCount } = this.state;
    return (
      <div className="main-menu">
        <p>Tick count: { tickCount }</p>
      </div>
    );
  }
}
