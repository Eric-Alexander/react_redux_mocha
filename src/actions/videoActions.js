import * as types from './actionTypes';
import VideoApi from '../api/mockVideoApi';
import {ajaxCallStart, ajaxCallError} from './ajaxActions';

//action creators
export const loadVideosSuccess = (videos) => ({
  type: types.LOAD_VIDEOS_SUCCESS, videos //note in es6 if params have same name 'course: course' can just become 'course'
});
//MAKE SURE video IS SINGULAR in these actions!!!! Was stuck for a while yeesh!
export const createVideoSuccess = (video) => ({
  type: types.CREATE_VIDEO_SUCCESS, video
});

export const updateVideoSuccess = (video) => ({
  type: types. UPDATE_VIDEO_SUCCESS, video
});
//this is the thunk - it always returns an action that accepts a dispatch!!
export function loadVideos() {
  return dispatch => {
    dispatch(ajaxCallStart());
    return VideoApi.getAllVideos().then(videos => {
      dispatch(loadVideosSuccess(videos));
    }).catch(error => {
      throw(error);
    });

  };
}

export function saveVideo(video){
  return function(dispatch, getState) { //optional 2nd parameter getState here!
    dispatch(ajaxCallStart());
    return VideoApi.saveVideo(video).then(videoSaved => {
      video.id ? dispatch(updateVideoSuccess(videoSaved)) :
        dispatch(createVideoSuccess(videoSaved));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
