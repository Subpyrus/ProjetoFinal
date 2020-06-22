import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC2KeIscZqe_pPAokc7HTEjIb-Nrs5sMLY",
    authDomain: "hinamic-df0a2.firebaseapp.com",
    databaseURL: "https://hinamic-df0a2.firebaseio.com",
    projectId: "hinamic-df0a2",
    storageBucket: "hinamic-df0a2.appspot.com",
    messagingSenderId: "296638059568",
    appId: "1:296638059568:web:536c5053d2aca70db949f5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true})


export default firebase;