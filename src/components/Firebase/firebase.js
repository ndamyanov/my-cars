import app from 'firebase/app';
import 'firebase/auth';
import database from 'firebase/database';
import * as firebase from 'firebase';

const config = {
  apiKey: "",
  authDomain: "niki-test-project.firebaseapp.com",
  databaseURL: "https://niki-test-project.firebaseio.com",
  projectId: "niki-test-project",
  storageBucket: "niki-test-project.appspot.com",
  messagingSenderId: "706354816467",
  appId: "1:706354816467:web:50716c6ef80d8ae7e4fb26"
    //measurementId: "G-0ZXKPWWTD1"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.database();
    // this.googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    
    this.auth = app.auth();

    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  user = (uid) => this.db.ref(`users/${uid}`);

  cars = () => this.db.ref('cars');
  //light = () =>  this.db.ref('Light');

  carsOfUser = uid => this.db.ref(`cars/${uid}`);

  signIn(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  // SignIn = (email, password) =>
  //   this.auth.signInWithEmailAndPassword(email, password);

  register (email, password) {
    return this.auth.createUserWithEmailAndPassword(email, password);
}
  // SignOut = () => this.auth.signOut();

  signOut() {
    return this.auth.signOut();
  }
}

export default Firebase;