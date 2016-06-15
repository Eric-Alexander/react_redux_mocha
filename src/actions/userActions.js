import * as types from './actionTypes';
import UserApi from '../api/mockUserApi';
import {ajaxCallStart, ajaxCallError} from './ajaxActions';
//action creator
export function loadUsersSuccess(users){
  return { type: types.LOAD_USERS_SUCCESS, users }; //note in es6 if params have same name 'course: course' can just become 'course'
}
export const createUserSuccess = (user) => ({
  type: types.CREATE_USER_SUCCESS, user
});
export const updateUserSuccess = (user) => ({
  type: types. UPDATE_USER_SUCCESS, user
});
//this is the thunk - it always returns an action that accepts a dispatch!!
export function loadUsers() {
  return dispatch => {
    dispatch(ajaxCallStart());
    return UserApi.getAllUsers().then(users => {
      dispatch(loadUsersSuccess(users));
    }).catch(error => {
      throw(error);
    });

  };
}
export function saveUser(user){
  return function(dispatch, getState) { //optional 2nd parameter getState here!
    dispatch(ajaxCallStart());
    return UserApi.saveUser(user).then(userSaved => {
      user.id ? dispatch(updateUserSuccess(userSaved)) :
        dispatch(createUserSuccess(userSaved));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
