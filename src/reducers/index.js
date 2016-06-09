import { combineReducers } from 'redux';
import videos from './videoReducer';
import authors from './authorReducer';
import currentAjaxCalls from './ajaxReducer';


const rootReducer = combineReducers({
  videos, //es6 short-hand property name
  authors,
  currentAjaxCalls
});

export default rootReducer;
