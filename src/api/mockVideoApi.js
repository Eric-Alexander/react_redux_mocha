import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const videos = [
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
const generateId = (video) => {
  return replaceAll(video.title, ' ', '-');
};

class VideoApi {
  static getAllVideos() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], videos));
      }, delay);
    });
  }

  static saveVideo(video) {
    video = Object.assign({}, video); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minVideoTitleLength = 4;
        if (video.title.length < minVideoTitleLength) {
          reject(`Title must be at least ${minVideoTitleLength} characters.`);
        }

        if (video.id) {
          const existingVideoIndex = videos.findIndex(a => a.id == video.id);
          videos.splice(existingVideoIndex, 1, video);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new videos in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          video.id = generateId(video);
          video.watchHref = `http://www.youtube.com/${video.id}`;
          videos.push(video);
        }

        resolve(video);
      }, delay);
    });
  }

  static deleteVideo(videoId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfVideoToDelete = videos.findIndex(video => {
          video.videoId == videoId;
        });
        videos.splice(indexOfVideoToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default VideoApi;
