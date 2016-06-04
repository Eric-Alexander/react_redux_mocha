import { combineReducers } from 'redux';
import videos from './videoReducer';

const rootReducer = combineReducers({
  videos //es6 short-hand property name
});

export default rootReducer;
