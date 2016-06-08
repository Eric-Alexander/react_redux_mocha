import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as videoActions from '../../actions/videoActions';
import VideoList from './VideoList';

class VideoPage extends React.Component{
  //constructor necessary in es6 to initialState
  constructor(props, context){
    super(props, context);
  }
  videoRow(video, idx) {
    return <div key={idx}>{video.title}</div>;
  }
  render(){
    const {videos} = this.props;
    return (
      <div className = "jumbotron">
        <h1>Videos:</h1>
        <VideoList videos={videos}/>

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
