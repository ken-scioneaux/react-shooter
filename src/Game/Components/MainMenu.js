// the main menu
import React, { Component, PropTypes } from 'react';

// css style of main menu
const LIST_STYLE = {
  listStyle: 'none',
  textAlign: 'center',
};

const LIST_ITEM_STYLE = {
  marginBottom: '15px',
};

const BUTTON_STYLE = {
  width: '250px',
  height: '50px',
};

export default class MainMenu extends Component
{
  static contextTypes = {
    loop: PropTypes.object,
  };
  static propTypes = {
    onStartNewGame: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
  }
  update = () => {
    // do nothing for now...we'll come back to this
  };
  componentDidMount() {
    this.context.loop.subscribe(this.update);
  }
  componentWillUnmount() {
    this.context.loop.unsubscribe(this.update);
  }
  render() {
    const { onStartNewGame } = this.props;
    return (
      <ul style={ LIST_STYLE }>
        <li style={ LIST_ITEM_STYLE }>
          <button type="button" onClick={ onStartNewGame } style={ BUTTON_STYLE } >
            Start New Game
          </button>
        </li>
        <li style={ LIST_ITEM_STYLE }>
          <button type="button" onClick={ () => { console.log('Do something later with this.')} } style={ BUTTON_STYLE }>
            Credits
          </button>
        </li>
      </ul>
    );
  }
}
