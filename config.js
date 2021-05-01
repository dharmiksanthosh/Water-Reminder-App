import * as firebase from 'firebase'
require('@firebase/firestore');

var firebaseConfig = {
    apiKey: "AIzaSyAKAGcJykjlTG66kQEjeQWzuEZO1ya-o08",
    authDomain: "water-reminder-app-3999.firebaseapp.com",
    projectId: "water-reminder-app-3999",
    storageBucket: "water-reminder-app-3999.appspot.com",
    messagingSenderId: "906184207311",
    appId: "1:906184207311:web:9aee692d5502052ae080ba"
  };
  // Initialize Firebase
/* if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
} */
  
export default firebase.firestore();