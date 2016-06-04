import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../actions/courseActions';

class CoursePage extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state = {
      course: { title: "" }
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }
  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course });
  }

  onClickSave(){
    this.props.createCourse(this.state.course);
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
  createCourse: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps){
  return {
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch){
  return{
    //es6 able to omit ( ) around 'course' below if there is only a single parameter, in this case, course
    createCourse: course => dispatch(courseActions.createCourse(course))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
