var firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');

var firebaseConfig = {
    apiKey: "AIzaSyAGVtrrTqGp182aw_huaJMZtPPEl1MSIOc",
    authDomain: "appnote-demo-redux.firebaseapp.com",
    databaseURL: "https://appnote-demo-redux.firebaseio.com",
    projectId: "appnote-demo-redux",
    storageBucket: "appnote-demo-redux.appspot.com",
    messagingSenderId: "242992329593",
    appId: "1:242992329593:web:c4369ae6002601e1ee35a8",
    measurementId: "G-R8J6H800WP"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics();

// export const firebaseConnect = firebase.initializeApp(firebaseConfig);
export const firebaseConnect = firebase.database().ref("note1");