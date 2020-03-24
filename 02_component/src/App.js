import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Topmenu from "./Component/Topmenu/Topmenu";
import Header from "./Component/Header/Header";
import Content from "./Component/Content/Content";

function App() {
  return (
    <div className="_vidu1">
      <Topmenu />
      <Header />
      <div className="container">
        <div className="row pt-5">
          <Content
            tieude="Tin tức 1"
            vtri1="order-lg-2"
            anh="img/02.jpg"
          ></Content>
          <Content tieude="Tin số 2" anh="img/01.jpg"></Content>
          <Content tieude="Tin số 3" anh="img/03.jpg"></Content>
        </div>
      </div>
    </div>
  );
}

export default App;
