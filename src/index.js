import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import App from './components/App';
import Home from './components/Home'
import reportWebVitals from './reportWebVitals';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'


ReactDOM.render(
  (<Router history = {browserHistory}>
   <Route path = "/" component = {Header}>   
      <IndexRoute component = {App} />
      <Route path = "home" component = {Home} />
   </Route>
</Router>),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
