// toggles between the main game modes (main menu, in-game, level selection, etc)
import React, { Component, PropTypes } from 'react';
import connect from '../../Lib/connect';

import {
  STATE_MAIN_MENU,
  STATE_IN_LEVEL,
  STATE_GAME_OVER,
  STATE_CREDITS,
} from '../Actions/mainState';
import MainMenu from './MainMenu';
import Engine from './Engine';
import Credits from './Credits';

class MainState extends Component
{
  static propTypes = {
    currentState: PropTypes.oneOf([
      STATE_MAIN_MENU,
      STATE_IN_LEVEL,
      STATE_GAME_OVER,
      STATE_CREDITS,
    ]).isRequired,
  };
  render() {
    if ('currentState' in this.props && this.props.currentState) {
      switch (this.props.currentState) {
        case STATE_MAIN_MENU:
          return <MainMenu />;
        case STATE_IN_LEVEL:
          return <Engine />;
        case STATE_CREDITS:
          return <Credits />;
        // TODO: add more states
      }
    }
    console.warn('Unhandled state:', this.props.currentState);
    return null;
  }
  static mapStateToProps = (state, ownProps) => ({
    currentState: state.mainState,
    ...ownProps
  });
}

export default connect(MainState);
