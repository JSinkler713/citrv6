import { combineReducers } from 'redux'
import location from './location';
import animal from './animal';
import breed from './breed';
import theme from './theme';
import animals from './animals';

export default combineReducers({
  location,
  animal,
  breed,
  theme,
  animals,
})
