import * as types from '../actions/actionTypes';


export default function videoReducer(state = [], action) { //this reducer is for accessing a list of videos, since there are none yet in the DB we start the state as an empty array of videos
  switch(action.type){
    case types.CREATE_VIDEO:
      return [...state,
              Object.assign({},
                action.video)
              ];
    default: //everytime there is a SWITCH statement create a DEFAULT to return state
      return state;
  }
}
//spread operator [...state] and Object.assign({}, params, actions) are used HEAVILY IN ES6
