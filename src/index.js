import 'babel-polyfill'; //fills in all ES6 functionality
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router'; //browserHistory provides cleaner URLs aka HTML5 pushState
import routes from './routes';
import './styles/styles.css'; //cool Webpack Feature...can import CSS styles
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render (
  <Router history = {browserHistory} routes = {routes} />,
  document.getElementById('app')
);
