import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import "./Assets/scss/default.scss";
import HomePage from './components/pagesComponent/homePage';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path ='' component= {HomePage}/>
      </div>
      </Router>
    );
  }
}

export default App;
