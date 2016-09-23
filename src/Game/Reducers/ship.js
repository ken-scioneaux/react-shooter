import { combineReducers } from 'redux';

const MAX_SHIP_HEALTH = 100;

const health = (state = MAX_SHIP_HEALTH, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

/**
 * xOffset:
 *  - negative is left
 *  - positive is right
 *  - zero is dead center
 */
const xOffset = (state = 0, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  xOffset,
  health,
});
