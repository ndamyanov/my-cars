import app from 'firebase/app';
import 'firebase/auth';
import database from 'firebase/database';

const config = {
  apiKey: "AIzaSyBBdhBfZ0rr8QZqecc3i0ZV-jNpJeXBEt8",
    authDomain: "my-cars-7f6e9.firebaseapp.com",
    databaseURL: "https://my-cars-7f6e9.firebaseio.com",
    projectId: "my-cars-7f6e9",
    storageBucket: "my-cars-7f6e9.appspot.com",
    messagingSenderId: "236887130577",
    appId: "1:236887130577:web:b20e19f69487fa502920f0",
    measurementId: "G-QY2KDYL8DQ"
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

  carsOfUser = uid => this.db.ref(`cars/${uid}`);

  signIn(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  register (email, password) {
    return this.auth.createUserWithEmailAndPassword(email, password);
}
 
  signOut() {
    return this.auth.signOut();
  }
}

export default Firebase;