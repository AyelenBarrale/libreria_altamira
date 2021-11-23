import firebase from "firebase/app";
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


/* 
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBiPPheVQ6LWVo8eRMsim-Q2Hsuy96JyTo',
  authDomain: 'ecommerce-comarca-eb529.firebaseapp.com',
  projectId: 'ecommerce-comarca-eb529',
  storageBucket: 'ecommerce-comarca-eb529.appspot.com',
  messagingSenderId: '910629097550',
  appId: '1:910629097550:web:f33f187f2fad60f019b31f',
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
 */