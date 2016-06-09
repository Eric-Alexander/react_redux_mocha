import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as videoActions from '../../actions/videoActions';
import VideoList from './VideoList';
import {browserHistory} from 'react-router';

class VideoPage extends React.Component{
  //constructor necessary in es6 to initialState
  constructor(props, context){
    super(props, context);
    this.redirectToAddVideoPage = this.redirectToAddVideoPage.bind(this);
  }
  videoRow(video, idx) {
    return <div key={idx}>{video.title}</div>;
  }
  redirectToAddVideoPage(){
    browserHistory.push('/video');
  }
  render(){
    const {videos} = this.props;
    return (
      <div className = "jumbotron">
        <h1>Videos:</h1>
        <VideoList videos={videos}/>
        <input type="submit"
          value="Add Video"
          className="btn btn-primary"
          onClick={this.redirectToAddVideoPage}/>

      </div>
    );
  }
}
VideoPage.propTypes = {
  videos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
//Redux and connect functions
function mapStateToProps(state, ownProps){
  return {
    videos: state.videos
  };
}
function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(videoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage);
