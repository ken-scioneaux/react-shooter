// move these to a constants file in the future
export const STATE_MAIN_MENU = 'MAIN_MENU';
export const STATE_IN_LEVEL  = 'IN_LEVEL';
export const STATE_GAME_OVER = 'GAME_OVER';
export const STATE_CREDITS = 'CREDITS';

export const CHANGE_MAIN_STATE = 'change_main_state';

const changeMainState = (state) => ({
  type: CHANGE_MAIN_STATE,
  state,
});

// triggered when returning to the main menu
export const mainMenu = () => changeMainState(STATE_MAIN_MENU);
// triggered to start a new level
export const startLevel = (level) => ({
  ...changeMainState(STATE_IN_LEVEL),
  level,
});
// triggered to start the game over state
export const gameOver = () => changeMainState(STATE_GAME_OVER);
// triggered to show the credits
export const credits = () => changeMainState(STATE_CREDITS);
