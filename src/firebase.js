import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDg7lGyrnq5am7XSyaZOdWBsbivuXfLa9I",
  authDomain: "libreria-altamira.firebaseapp.com",
  projectId: "libreria-altamira",
  storageBucket: "libreria-altamira.appspot.com",
  messagingSenderId: "731720739070",
  appId: "1:731720739070:web:50c18a9f74ae4b51b01daf"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();