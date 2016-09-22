import { combineReducers } from 'redux';

const MAX_SHIP_HEALTH = 100;

const health = (state = MAX_SHIP_HEALTH, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const offset = (state = [0, 0], action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const state = (state = 0, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const steps = (state = [0], action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  offset,
  state,
  steps,
  health,
});
