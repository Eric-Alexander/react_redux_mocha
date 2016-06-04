import * as types from './actionTypes';

export function createCourse(course){
  return { type: types.CREATE_COURSE, course }; //note in es6 if params have same name 'course: course' can just become 'course'
}
