import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
//cách 1
function NumberOne(props) {
  return (
    <div>
      <div className="col-6">
        <div className="card">
          <img
            src="https://unsplash.it/200/100"
            alt=""
            className="card-img-top"
          />
          <div className="card-body">
            <h4 className="card-title">{props.title}</h4>
            <p className="card-text">Text</p>
          </div>
        </div>
      </div>
    </div>
  );
}

class NumberTwo extends Component {
  render() {
    return (
      <div className="col-4">
        <div className="card">
          <img
            src="https://unsplash.it/200/100"
            alt=""
            className="card-img-top"
          />
          <div className="card-body">
            <h4 className="card-title">{this.props.title}</h4>
            <p className="card-text">Text Number two</p>
          </div>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <NumberOne title="Title" />
        <NumberTwo title="Number Two" />
      </header>
    </div>
  );
}

export default App;
