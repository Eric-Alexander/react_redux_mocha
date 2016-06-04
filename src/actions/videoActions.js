import * as types from './actionTypes';
import videoApi from '../api/mockVideoApi';

export function createVideo(video){
  return { type: types.CREATE_VIDEO, video }; //note in es6 if params have same name 'course: course' can just become 'course'
}

export function loadVideosSuccess(videos){
  return { type: types.LOAD_VIDEOS_SUCCESS, videos }; //note in es6 if params have same name 'course: course' can just become 'course'
}

export function loadVideos() {
  return function(dispatch){
    return videoApi.getAllVideos().then(videos => {
      dispatch(loadVideosSuccess(videos));
    }).catch(error => {
      throw(error);
    });

  };
}
