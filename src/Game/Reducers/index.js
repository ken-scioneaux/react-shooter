import { combineReducers } from 'redux';
import mainState from './mainState';
import ship from './ship';
import ufo from './ufos';

export default combineReducers({
  mainState,
  ship,
  ufo,
});
