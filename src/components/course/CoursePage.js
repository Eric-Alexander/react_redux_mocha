import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class CoursePage extends React.Component{
  //constructor necessary in es6 to initialState
  constructor(props, context){
    super(props, context);
    this.state = {
      course: { title: "" }
    };
    //add all binds in constructor for clarity and perfomance
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }
  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course });
  }

  onClickSave(){
    this.props.actions.createCourse(this.state.course);
  }
  courseRow(course, idx) {
    return <div key={idx}>{course.title}</div>;
  }

  render(){
    return (
      <div className = "jumbotron">
        <h1>List of courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h3> Add a new course! </h3>
        <input type="text" onChange={this.onTitleChange} value={this.state.course.title} className="form-control" />
        <input type="submit" onClick={this.onClickSave} value="Save" className="btn btn-primary" />
      </div>
    );
  }
}

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};
//Redux and connect functions
function mapStateToProps(state, ownProps){
  return {
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch){
  return{

    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
