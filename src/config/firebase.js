// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
   apiKey: "*****************",
   authDomain: "yyreactchatapp.firebaseapp.com",
   databaseURL: "https://yyreactchatapp.firebaseio.com",
   projectId: "yyreactchatapp",
   storageBucket: "yyreactchatapp.appspot.com",
   messagingSenderId: "664312097513",
   appId: "1:664312097513:web:00d5a64aca4ddec9b3de78",
   measurementId: "G-FN3X28H1B0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore()
// export { db }

export default firebase
