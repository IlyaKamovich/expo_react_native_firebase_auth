import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDsWChjNOrXJfgLYhDJ6U3e_hEF-QRurUM",
  authDomain: "firelist-21696.firebaseapp.com",
  databaseURL: "https://firelist-21696.firebaseio.com",
  projectId: "firelist-21696",
  storageBucket: "firelist-21696.appspot.com",
  messagingSenderId: "589723662628",
  appId: "1:589723662628:web:7c253495bb212420601bb1"
});

const auth = app.auth();
const db = app.database();

const logIn = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

const signUp = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

const logOut = () => auth.signOut();

const api = {
  auth,
  db,
  logIn,
  signUp,
  logOut
};

export { api };
