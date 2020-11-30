import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyA6-QYJwdQ5JdyGRN26tymMBczfViV8dyI",
    authDomain: "netninja-marioplan-51c65.firebaseapp.com",
    databaseURL: "https://netninja-marioplan-51c65.firebaseio.com",
    projectId: "netninja-marioplan-51c65",
    storageBucket: "",
    messagingSenderId: "377982904067",
    appId: "1:377982904067:web:d4403aea0cba437d"
  };
  // Initialize Firebase

  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true})
  export default firebase

