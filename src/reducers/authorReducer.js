import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function authorReducer(state = initialState.authors, action) {
  switch(action.type){
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;
    default: //everytime there is a SWITCH statement create a DEFAULT to return state
      return state;
  }
}
