import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as videoActions from '../../actions/videoActions';
import VideoForm from './VideoForm';

class ManageVideoPage extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      video: Object.assign({}, props.video),
      errors: {}
    };
    this.updateVideoState = this.updateVideoState.bind(this);
    this.saveVideo = this.saveVideo.bind(this);
  }
  updateVideoState(event){
    const field = event.target.name;
    let video = this.state.video;
    video[field] = event.target.value;
    return this.setState({video: video});
  }
  saveVideo(event){
    event.preventDefault();
    this.props.actions.saveVideo(this.state.video);
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
           />
    );
  }
}

ManageVideoPage.propTypes = {
  video: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object
};

ManageVideoPage.contextTypes = {
  router: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
  let video = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
  return {
    video: video,
    authors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(videoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageVideoPage);
