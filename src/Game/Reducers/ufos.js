import { SPAWN_UFO } from '../Actions/ufo';

const defaultUFO = {
  /**
   * Hit points
   */
  health: 10,
  /**
   * xOffset:
   *  - negative is left
   *  - positive is right
   *  - zero is dead center
   */
  xOffset: 0,
  /**
   * yOffset:
   *  - zero is top
   *  - positive is away from the top
   *  - negative are invalid numbers
   */
  yOffset: 0,

  /**
   * Unique id for the UFO ship.
   * (provided by action.id)
   */
  id: null,
  /**
   * Ship [color] state.
   * (provided by action.state)
   */
  state: null,
};
const initialState = {
  ships: {}, // map {[id]:UFO}
};

const ufoState = (state = initialState, action) => {
  switch (action.type) {
    case SPAWN_UFO:
      return {
        ...state,
        ships: {
          ...state.ships,
          [action.id]: {
            ...defaultUFO,
            id: action.id,
            state: action.state,
          }
        }
      };
    default:
      return state;
  }
};

export default ufoState;
