import { CHANGE_MAIN_STATE, STATE_MAIN_MENU } from '../Actions/mainState';

const mainState = (state = STATE_MAIN_MENU, action) => {
  switch (action.type) {
    case CHANGE_MAIN_STATE:
      return action.state;
    default:
      return state;
  }
};

export default mainState;
