import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Home from './components/Home'
import reportWebVitals from './reportWebVitals';
import Profile from './components/Profile.js';
import Browse from './components/Browse.js';
import Gasless from './components/Gasless.js'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'


ReactDOM.render(
  (<Router history = {browserHistory}>
   <Route path = "/" component = {Header}>   
      <IndexRoute component = {Home} />
      <Route path = "profile" component = {Profile} />
      <Route path = "browse" component = {Browse} />
      <Route path = "gasless" component = {Gasless} />
   </Route>
   
</Router>),
  document.getElementById('root')
);

reportWebVitals();
