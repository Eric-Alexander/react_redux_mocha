import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as videoActions from '../actions/videoActions';

describe('Store', () => {
  it('should handle creating video', () => {
    const store = createStore(rootReducer, initialState);
    const video = {
      title: "Fluffly Lumpkins"
    };

    const action = videoActions.createVideoSuccess(video);
    store.dispatch(action);

    const actual = store.getState().videos[0];
    const expected = {
      title: "Fluffly Lumpkins"
    };
    expect(actual).toEqual(expected);
  });
});
 
