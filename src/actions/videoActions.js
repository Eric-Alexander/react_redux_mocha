import * as types from './actionTypes';
import VideoApi from '../api/mockVideoApi';


//action creators
export function loadVideosSuccess(videos){
  return { type: types.LOAD_VIDEOS_SUCCESS, videos }; //note in es6 if params have same name 'course: course' can just become 'course'
}
//MAKE SURE video IS SINGULAR in these actions!!!! Was stuck for a while yeesh!
export function createVideoSuccess(video){
  return { type: types.CREATE_VIDEO_SUCCESS, video };
}
export function updateVideoSuccess(video){
  return { type: types. UPDATE_VIDEO_SUCCESS, video };
}
//this is the thunk - it always returns an action that accepts a dispatch!!
export function loadVideos() {
  return dispatch => {
    return VideoApi.getAllVideos().then(videos => {
      dispatch(loadVideosSuccess(videos));
    }).catch(error => {
      throw(error);
    });

  };
}

export function saveVideo(video){
  return function(dispatch, getState) { //optional 2nd parameter getState here!
    return VideoApi.saveVideo(video).then(videoSaved => {
      video.id ? dispatch(updateVideoSuccess(videoSaved)) :
        dispatch(createVideoSuccess(videoSaved));
    }).catch(error => {
      throw(error);
    });
  };
}
