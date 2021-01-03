import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDYkvz9-yWJ61tUq6OJcy8Wg_B-2dw5NPw",
    authDomain: "tinder-clone-is2.firebaseapp.com",
    projectId: "tinder-clone-is2",
    storageBucket: "tinder-clone-is2.appspot.com",
    messagingSenderId: "674024077319",
    appId: "1:674024077319:web:6b4bd0a4d6c63d3346d2a2",
    measurementId: "G-6H2MMFX6KM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;
