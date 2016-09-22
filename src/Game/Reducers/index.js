import { combineReducers } from 'redux';
import mainState from './mainState';
import ship from './ship';

export default combineReducers({
  mainState,
  ship,
});
