import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "<INSERT_HERE>",
    authDomain: "smrt-john.firebaseapp.com",
    databaseURL: "https://smrt-john.firebaseio.com",
    projectId: "smrt-john",
    storageBucket: "smrt-john.appspot.com",
    messagingSenderId: "1094037678148"
};
var fire = firebase.initializeApp(config);
export default fire;