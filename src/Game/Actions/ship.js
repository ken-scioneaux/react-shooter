export const MOVE_SHIP = 'move ship';

export const moveShip = (position) => ({
  type: MOVE_SHIP,
  position,
});
