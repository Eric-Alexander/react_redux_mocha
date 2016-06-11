import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as videoActions from '../../actions/videoActions';
import VideoForm from './VideoForm';
import toastr from 'toastr';
import {authorsFormattedForDropdown} from '../../selectors/selectors';

export class ManageVideoPage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      video: Object.assign({}, props.video),
      errors: {},
      saving: false
    };
    this.updateVideoState = this.updateVideoState.bind(this);
    this.saveVideo = this.saveVideo.bind(this);
  }
  componentWillReceiveProps(nextProps){
    if (this.props.video.id != nextProps.video.id){
      this.setState({video: Object.assign({}, nextProps.video)});
    }
  }
  updateVideoState(event){
    const field = event.target.name;
    let video = this.state.video;
    video[field] = event.target.value;
    return this.setState({video: video});
  }
  videoFormIsValid(){
    let formIsValid = true;
    let errors = {};
    if (this.state.video.title.length < 4){
      errors.title = 'Title must be at least 4 characters.';
      formIsValid = false;
    }
    this.setState({errors: errors});
    return formIsValid;
  }
  saveVideo(event){
    event.preventDefault();
    if (!this.videoFormIsValid()){
      return;
    }
    this.setState({saving: true});
    this.props.actions.saveVideo(this.state.video)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });

  }
  redirect(){
    this.setState({saving: false});
    toastr.success("Course saved!");
    this.context.router.push('/videos');
  }
  render(){
    return (
        <VideoForm
          allAuthors={this.props.authors}
          onChange={this.updateVideoState}
          onSave={this.saveVideo}
          video={this.state.video}
          errors={this.state.errors}
          saving={this.state.saving}
           />
    );
  }
}

ManageVideoPage.propTypes = {
  video: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManageVideoPage.contextTypes = {
  router: PropTypes.object
};

function getVideoById(videos, id){
  const video = videos.filter(video => video.id == id);
  if (video) return video[0]; //Note: .filter returns an array so grab the first in the array!
  return null;
}
function mapStateToProps(state, ownProps){
  const videoId = ownProps.params.id; //params.id is direct grab from router path '/video/:id'
  let video = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  if (videoId && state.videos.length > 0){
    video = getVideoById(state.videos, videoId);
  }

  return {
    video: video,
    authors: authorsFormattedForDropdown(state.authors)
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(videoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageVideoPage);
