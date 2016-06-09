import * as types from './actionTypes';
import VideoApi from '../api/mockVideoApi';


//action creator
export function loadVideosSuccess(videos){
  return { type: types.LOAD_VIDEOS_SUCCESS, videos }; //note in es6 if params have same name 'course: course' can just become 'course'
}
export function createVideoSuccess(videos){
  return { type: types.CREATE_VIDEO_SUCCESS, videos };
}
export function updateVideoSuccess(videos){
  return { type: types. UPDATE_VIDEO_SUCCESS, videos };
}
//this is the thunk - it always returns an action that accepts a dispatch!!
export function loadVideos() {
  return function(dispatch){
    return VideoApi.getAllVideos().then(videos => {
      dispatch(loadVideosSuccess(videos));
    }).catch(error => {
      throw(error);
    });

  };
}

export function saveVideo(video){
  return function(dispatch, getState){
    return VideoApi.saveVideo(video).then(savedVideo => {
      video.id ? dispatch(updateVideoSuccess(savedVideo)) :
        dispatch(createVideoSuccess(savedVideo));
    }).catch(error => {
      throw(error);
    });
  };
}
