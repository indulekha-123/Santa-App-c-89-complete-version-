import firebase from 'firebase';
require('@firebase/firestore')


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCM8g-KymkjhK8_kSA1jbI57ixUQmgF20g",
  authDomain: "booksanta3-476d5.firebaseapp.com",
  projectId: "booksanta3-476d5",
  storageBucket: "booksanta3-476d5.appspot.com",
  messagingSenderId: "908184402890",
  appId: "1:908184402890:web:9e00c989ad329fd7786d33"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();