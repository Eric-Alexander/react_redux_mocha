import * as types from '../actions/actionTypes';


export default function courseReducer(state = [], action) { //this reducer is for accessing a list of courses, since there are none yet in the DB we start the state as an empty array of courses
  switch(action.type){
    case types.CREATE_COURSE:
      return [...state,
              Object.assign({},
                action.course)
              ];
    default: //everytime there is a SWITCH statement create a DEFAULT to return state
      return state;
  }
}
//spread operator [...state] and Object.assign({}, params, actions) are used HEAVILY IN ES6
