import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAc5HwslYL_NOblf_v4rz1i1iQG_2RjZR0",
    authDomain: "subject-recommender.firebaseapp.com",
    projectId: "subject-recommender",
    storageBucket: "subject-recommender.appspot.com",
    messagingSenderId: "951702267821",
    appId: "1:951702267821:web:afb482f9f5e04591d56324",
    measurementId: "G-YLCVB6S056"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;