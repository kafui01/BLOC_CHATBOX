import React, { Component } from "react";
import * as firebase from "firebase";
import RoomList from "./component/RoomList";
import "./chat.css";

var config = {
  apiKey: "AIzaSyDBjIE4hLDvsU8xEWQZCJgFnuaH8FX2wIE",
  authDomain: "chatbox-f1632.firebaseapp.com",
  databaseURL: "https://chatbox-f1632.firebaseio.com",
  projectId: "chatbox-f1632",
  storageBucket: "chatbox-f1632.appspot.com",
  messagingSenderId: "1081142940081"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="float-left" id="Aside">
          <RoomList myfirebase={firebase} />
        </div>
        <div className="float-right" id="Section">
          <h2>MESSAGE SECTION</h2>
        </div>
      </div>
    );
  }
}

export default App;
