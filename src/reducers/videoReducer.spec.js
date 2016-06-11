import expect from 'expect';
import videoReducer from './videoReducer';
import * as actions from '../actions/videoActions';

describe('Video Reducer', () => {
  it('should add video when given CREATE_VIDEO_SUCCESS', () =>{
    const initialState = [
      {title: 'Foo'},
      {title: 'Bar'}
    ];
    const newVideo = {title: 'Fubar'};
    const action = actions.createVideoSuccess(newVideo);
    const newState = videoReducer(initialState, action);
    expect(newState.length).toEqual(3);
    expect(newState[0].title).toEqual('Foo');
    expect(newState[1].title).toEqual('Bar');
    expect(newState[2].title).toEqual('Fubar');
  });

  it('should update video when given UPDATE_VIDEO_SUCCESS', () =>{
    const initialState = [
      {id: 'Foo', title: 'Foo'},
      {id: 'Bar', title: 'Bar'},
      {id: 'Fubar',title: 'Fubar'}
    ];
    const video = {id: 'Bar', title: 'Im Fubar now too'};
    const action = actions.updateVideoSuccess(video);
    const newState = videoReducer(initialState, action);
    const updatedVideo = newState.find(x => x.id == video.id);
    const untouchedVideo = newState.find(x => x.id == 'Foo');

    expect(updatedVideo.title).toEqual('Im Fubar now too');
    expect(untouchedVideo.title).toEqual('Foo');
    expect(newState.length).toEqual(3);
  });
});
