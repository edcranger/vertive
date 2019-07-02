import firebase from "firebase";
require("firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBA3gAPITG3iaABIA8ShhAhR0UfMPfCzbw",
  authDomain: "vertiveinteractive-2c4f0.firebaseapp.com",
  databaseURL: "https://vertiveinteractive-2c4f0.firebaseio.com",
  projectId: "vertiveinteractive-2c4f0",
  storageBucket: "",
  messagingSenderId: "791602916283",
  appId: "1:791602916283:web:52bfab838622bb5a"
};
// Initialize Firebase

const fb = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { fb, db };
