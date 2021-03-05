  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDNa-oKBf9HU6eUBRXY5dltW8kQ6Q2qBnI",
    authDomain: "crud-firebase-1e8c0.firebaseapp.com",
    projectId: "crud-firebase-1e8c0",
    storageBucket: "crud-firebase-1e8c0.appspot.com",
    messagingSenderId: "381313687552",
    appId: "1:381313687552:web:d97b636604b8f69951b8e5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const auth = firebase.auth()

  export {db,auth}