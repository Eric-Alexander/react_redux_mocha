import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type){
  return type.substring(type.length - 6) == 'UCCESS';
}

export default function ajaxReducer(state = initialState.currentAjaxCalls, action){
  if (action.type == types.AJAX_CALL_START){
    return state + 1;
  } else if (action.type == types.AJAX_CALL_ERROR || actionTypeEndsInSuccess(action.type)){
    return state -1;
  }
  return state;
}
