import React, { Component } from "react";
import "./App.css";
import { firebaseConnect } from "./firebaseConnect";
import Nav from "./Nav";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";

var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");

class App extends Component {
  pushData = () => {
    //thêm data dùng hàm push
    let connectData = firebase.database().ref("note1");
    connectData.push({
      title: "Ghi chú thứ nhất",
      content: "Nội dung ghi chú thứ nhất"
    });
    console.log("Thêm thành công");
  };

  deleteData = id => {
    let connectData = firebase.database().ref("note1");
    connectData.child(id).remove();
    console.log("Xóa thành công");
  };

  constructor(props) {
    super(props);
    this.state = {}
  }

  addData = (item) => {
    firebaseConnect.push(item);
  }

  

  render() {
    // console.log(firebaseConnect);
    firebaseConnect.once('value').then(function(snapshot){
      console.log(snapshot.val());
  });
    return (
      <div className="App">
          <Nav />
          <div className="container">
            <div className="row">
              <NoteList />
              <NoteForm getData = {(item) => this.addData(item)}/>
            </div>
          </div>
      </div>
    );
  }
}

export default (App)
