export function createCourse(course){
  return { type: 'CREATE_COURSE', course }; //note in es6 if params have same name 'course: course' can just become 'course'
}
