import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBD8pvjPUyKFy_lplWbbQSmmjy28ZSpsXA",
  authDomain: "facebook-clone-f0097.firebaseapp.com",
  databaseURL: "https://facebook-clone-f0097.firebaseio.com",
  projectId: "facebook-clone-f0097",
  storageBucket: "facebook-clone-f0097.appspot.com",
  messagingSenderId: "797920710369",
  appId: "1:797920710369:web:e86d933e4ea6cea606f1a0",
  measurementId: "G-9LZSPGLQVQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
