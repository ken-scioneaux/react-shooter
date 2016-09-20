// toggles between the main game modes (main menu, in-game, level selection, etc)
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { STATE_MAIN_MENU, STATE_IN_LEVEL, STATE_GAME_OVER } from '../Actions/mainState';
import MainMenu from './MainMenu';

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
    switch (this.props.currentState) {
      case STATE_MAIN_MENU:
        return <MainMenu />
      // TODO: implement other states
    }
    return null;
  }
  static mapStateToProps = (state, ownProps) => ({
    currentState: state.mainState,
    ...ownProps
  });
}

export default connect(MainState.mapStateToProps)(MainState);
