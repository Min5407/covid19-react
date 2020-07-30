import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBS8QiPYwBnsO7XmDmJq3QFwDxzcbRdJmQ",
  authDomain: "covid-19-web-f0daa.firebaseapp.com",
  databaseURL: "https://covid-19-web-f0daa.firebaseio.com",
  projectId: "covid-19-web-f0daa",
  storageBucket: "covid-19-web-f0daa.appspot.com",
  messagingSenderId: "2229076399",
  appId: "1:2229076399:web:5cd72167938b1ebd6faf5a",
  measurementId: "G-6QC29FMFKJ",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

facebookProvider.setCustomParameters({ prompt: "select_account" });
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signInWithFB = () => auth.signInWithPopup(facebookProvider);

export default firebase;
