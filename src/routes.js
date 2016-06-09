import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import VideoPage from './components/video/VideoPage';
import ManageVideoPage from './components/video/ManageVideoPage';


export default (
  <Route path = "/" component={App}>
    <IndexRoute component={HomePage} />

    <Route path = "video" component={ManageVideoPage} />
    <Route path = "video/:id" component={ManageVideoPage} />
    <Route path = "videos" component={VideoPage} />
    <Route path = "about" component={AboutPage} />
  </Route>
);
