const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyB8d3s8YlLzIWuDAHLM9UTMlTj_XFGGaQM",
  authDomain: "qualityevalutionanticheating.firebaseapp.com",
  projectId: "qualityevalutionanticheating",
  storageBucket: "qualityevalutionanticheating.appspot.com",
  messagingSenderId: "345267991632",
  appId: "1:345267991632:web:1517343bbab610a050cd55",
  measurementId: "G-E16JQDJ4WL"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;
