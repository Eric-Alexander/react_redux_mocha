import * as types from './actionTypes';

export function ajaxCallStart() {
  return {type: types.AJAX_CALL_START};
}

export function ajaxCallError(){
  return { type: types.AJAX_CALL_ERROR};
}
