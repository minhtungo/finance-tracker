import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAVmAstNJ4nn8ZKDbldCKGlbDz7VrtVVsY',
  authDomain: 'finance-tracker-a7474.firebaseapp.com',
  projectId: 'finance-tracker-a7474',
  storageBucket: 'finance-tracker-a7474.appspot.com',
  messagingSenderId: '13430448022',
  appId: '1:13430448022:web:69ff29872464a1a25c47b7',
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }