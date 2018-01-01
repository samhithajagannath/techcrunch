/* NOT BEING USED - WAS TRYING OUT STUFF*/

import React, { Component } from 'react';

import TechCrunch from './TechCrunch.js'
import Login from './Login.js'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const AppRouter = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Login</Link></li>
        <li><Link to="/app">Feed</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={LoginView}/>
      <Route path="/app" component={TechCrunchView}/>
    </div>
  </Router>
)

const LoginView = () => (
  <div>
    <Login />
  </div>
)

const TechCrunchView = () => (
  <div>
    <TechCrunch />
  </div>
)

export default AppRouter