import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    id: "epic-meal-time",
    title: "The Last Episode of Epic Meal Time!",
    watchHref: "https://www.youtube.com/watch?v=0a33WTZK2zI",
    authorId: "simore-butts",
    length: "10:53",
    category: "Food"
  },
  {
    id: "dhmb-pov",
    title: "Insane Urban DH Mountain Bike POV",
    watchHref: "https://www.youtube.com/watch?v=mFuSjk7jv_M",
    authorId: "jon-jarboe",
    length: "3:20",
    category: "Sports"
  },
  {
    id: "run-the-jewels",
    title: "DJ Shadow: 'Nobody Speak' (Feat. Run the Jewels) [HD]",
    watchHref: "https://www.youtube.com/watch?v=lmBMYDfc0OI",
    authorId: "jon-jarboe",
    length: "2:52",
    category: "Music"
  },
  {
    id: "lotr-explained",
    title: "The Lord of the Rings Mythology Explained (Part 1)",
    watchHref: "https://www.youtube.com/watch?v=YxgsxaFWWHQ",
    authorId: "eric-goetschel",
    length: "4:45",
    category: "Fantasy"
  },
  {
    id: "gojira-silvera",
    title: "Gojira - Silvera [OFFICIAL VIDEO]",
    watchHref: "https://www.youtube.com/watch?v=iVvXB-Vwnco",
    authorId: "eric-goetschel",
    length: "3:34",
    category: "Music"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class CourseApi {
  static getAllCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }

  static saveCourse(course) {
    course = Object.assign({}, course); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (course.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id == course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          course.id = generateId(course);
          course.watchHref = `http://www.youtube.com/${course.id}`;
          courses.push(course);
        }

        resolve(course);
      }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(course => {
          course.courseId == courseId;
        });
        courses.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CourseApi;
