// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeWJ6FlV_lKf-IHoKWrJX_ufeiHgTOc34",
  authDomain: "clone-a50c9.firebaseapp.com",
  projectId: "clone-a50c9",
  storageBucket: "clone-a50c9.appspot.com",
  messagingSenderId: "832153147457",
  appId: "1:832153147457:web:c399ac3d44966d2fc60ec0",
  measurementId: "G-YXV7G0Y99Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
