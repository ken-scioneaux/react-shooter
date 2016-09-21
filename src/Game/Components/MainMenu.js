import React, { Component, PropTypes } from 'react';
import MenuList from './MenuList';

export default class MainMenu extends Component {
  static contextTypes = {
    loop: PropTypes.object,
  };
  static propTypes = {
    onStartNewGame: PropTypes.func.isRequired,
    onCredits: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
  }
  update() {
    // do nothing for now...we'll come back to this
  };
  componentDidMount() {
    this.context.loop.subscribe(this.update);
  }
  componentWillUnmount() {
    this.context.loop.unsubscribe(this.update);
  }
  render() {
    const { onStartNewGame, onCredits } = this.props;
    const menuListOptions = [
      { label: 'Start New Game', onClick: onStartNewGame },
      { label: 'Credits', onClick: onCredits },
    ];
    return (
      <div className="main-menu">
        <h1 className="game-header">React Shooter</h1>
        <MenuList options={menuListOptions} />
      </div>
    );
  }
}
