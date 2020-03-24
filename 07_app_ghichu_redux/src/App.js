import React, { Component } from "react";
import "./App.css";
// import { firebaseConnect } from "./firebaseConnect";
import Nav from "./Components/Nav";
import NoteForm from "./Components/NoteForm";
import NoteList from "./Components/NoteList";
import { connect } from "react-redux";

// var firebase = require("firebase/app");
// require("firebase/auth");
// require("firebase/database");

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  showForm = () => {
    if(this.props.isEdit){
      return <NoteForm />
    }
  }

  render() {
    return (
      <div className="App">
          <Nav />
          <div className="container">
            <div className="row">
              <NoteList />
              {
                this.showForm()
              }
            </div>
          </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({
        type: "CHANGE_EDIT_STATUS"
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

