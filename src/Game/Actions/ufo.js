export const UFO_STATE_RED = 0;
export const UFO_STATE_GREEN = 1;
export const UFO_STATE_BLUE = 2;
export const UFO_STATE_YELLOW = 3;
const UFO_STATES = [
  UFO_STATE_RED,
  UFO_STATE_GREEN,
  UFO_STATE_BLUE,
  UFO_STATE_YELLOW,
];

const getRandomState = () => {
  return UFO_STATES[Math.floor(Math.random() * UFO_STATES.length)];
};

export const SPAWN_UFO = 'SPAWN_UFO';
let id = 0;
export const spawnUFO = () => {
  return {
    type: SPAWN_UFO,
    id: `ufo${id++}`,
    state: getRandomState(),
  };
};
