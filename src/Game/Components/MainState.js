// toggles between the main game modes (main menu, in-game, level selection, etc)
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import {
  STATE_MAIN_MENU,
  STATE_IN_LEVEL,
  STATE_GAME_OVER,
  mainMenu,
  startLevel,
  gameOver,
} from '../Actions/mainState';
import MainMenu from './MainMenu';
import Engine from './Engine';

class MainState extends Component
{
  static propTypes = {
    currentState: PropTypes.oneOf([
      STATE_MAIN_MENU,
      STATE_IN_LEVEL,
      STATE_GAME_OVER,
    ]),
  };
  render() {
    const { currentState, ...restOfProps } = this.props;
    switch (currentState) {
      case STATE_MAIN_MENU:
        return <MainMenu { ...restOfProps } />
      case STATE_IN_LEVEL:
        return <Engine { ...restOfProps } />
      // TODO: add more states
    }
    return null;
  }
  static mapStateToProps = (state, ownProps) => ({
    currentState: state.mainState,
    ...ownProps
  });
  static mapDispatchToProps = (dispatch, ownProps) => ({
    onStartNewGame: () => dispatch(startLevel(1)),
    onQuit: () => dispatch(mainMenu()),
    onDeath: () => dispatch(gameOver()),
  });
}

export default connect(
  MainState.mapStateToProps,
  MainState.mapDispatchToProps
)(MainState);
