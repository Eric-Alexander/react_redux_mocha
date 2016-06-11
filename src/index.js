
/*eslint-disable import/default  */
import 'babel-polyfill'; //fills in all ES6 functionality
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router'; //browserHistory provides cleaner URLs aka HTML5 pushState
import { Provider } from 'react-redux';
import routes from './routes';
import {loadVideos} from './actions/videoActions';
import {loadAuthors} from './actions/authorActions';
import './styles/styles.css'; //cool Webpack Feature...can import CSS styles
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';
import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadVideos());
store.dispatch(loadAuthors());

render (
  <Provider store={store}>
    <Router history = {browserHistory} routes = {routes} />
  </Provider>,
  document.getElementById('app')
);
