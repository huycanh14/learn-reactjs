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

// var data = firebase.database().ref('note1');
// var data = firebase.database().ref();

//lấy dữ liệu
// data.once('value').then(function(snapshot){
//     console.log(snapshot.val());
// });

//sửa dữ liệu. Dữ liệu ko có thì phải thêm vào
// data.set({
//     id: 1,
//     title: "Ngày 07/03/2020",
//     noteContent: "Demo Tạo nội dung web với redux"
// })
