import { combineReducers } from 'redux';
import videos from './videoReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  videos, //es6 short-hand property name
  authors
});

export default rootReducer;
