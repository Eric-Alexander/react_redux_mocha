import expect from 'expect';
import * as videoActions from './videoActions';
import * as types from './actionTypes';
import thunk from 'redux-thunk';
import nock from 'nock'; //mock http calls
import configureMockStore from 'redux-mock-store';


describe('Video Actions', () => {
  describe('createVideoSuccess', () => {
    it('should create CREATE_VIDEO_SUCCESS action', () => {
      const video = {id: 'foo-bar', title: 'Foo Bar'};
      const expectedAction = {
        type: types.CREATE_VIDEO_SUCCESS,
        video: video
      };

      const action = videoActions.createVideoSuccess(video);

      expect(action).toEqual(expectedAction);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Asynchronous Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('should create AJAX_CALL_START and LOAD_VIDEOS_SUCCESS', (done) => {
    //for real API:
    //nock('http://blahblah.com.')
    //  .get('/videos')
    //  .reply(200, { body: { video: [{id: 1, firstName:'Eric', lastName: 'Goetschel'}]}})
    const expectedActions = [
      {type: types.AJAX_CALL_START},
      {type: types.LOAD_VIDEOS_SUCCESS, body: {videos: [{id: 'foo-bar', title: 'Foo Bar'}]}}
    ];
    const store = mockStore({videos: []}, expectedActions);
    store.dispatch(videoActions.loadVideos())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(types.AJAX_CALL_START);
        expect(actions[1].type).toEqual(types.LOAD_VIDEOS_SUCCESS);
        done();
      });
  });
});
