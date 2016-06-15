import { combineReducers } from 'redux';
import videos from './videoReducer';
import users from './userReducer';
import currentAjaxCalls from './ajaxReducer';


const rootReducer = combineReducers({
  videos, //es6 short-hand property name
  users,
  currentAjaxCalls
});

export default rootReducer;
