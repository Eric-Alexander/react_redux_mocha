import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';

//action creator
export function loadAuthorsSuccess(authors){
  return { type: types.LOAD_AUTHORS_SUCCESS, authors }; //note in es6 if params have same name 'course: course' can just become 'course'
}
//this is the thunk - it always returns an action that accepts a dispatch!!
export function loadAuthors() {
  return dispatch => {
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });

  };
}
