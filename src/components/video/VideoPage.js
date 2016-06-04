import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as videoActions from '../../actions/videoActions';

class VideoPage extends React.Component{
  //constructor necessary in es6 to initialState
  constructor(props, context){
    super(props, context);
  }
  videoRow(video, idx) {
    return <div key={idx}>{video.title}</div>;
  }
  render(){
    return (
      <div className = "jumbotron">
        <h1>List of videos</h1>
        {this.props.videos.map(this.videoRow)}

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
