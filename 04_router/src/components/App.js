import React, { Component } from 'react';
import {  BrowserRouter as Router } from "react-router-dom";
import './../css/App.css';
import Header from './Header';
import Footer from './Footer';
import URL from '../router/URL'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        
        <div id="wrapper">
          <div id="page" className="clearfix animsition">
            <Header></Header>
            <URL></URL>
            <Footer></Footer>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
