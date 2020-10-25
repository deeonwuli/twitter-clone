import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDiQZipjqtiOVXTopPmJj-AEVlu3nu-ObI",
    authDomain: "twitter-clone-514fb.firebaseapp.com",
    databaseURL: "https://twitter-clone-514fb.firebaseio.com",
    projectId: "twitter-clone-514fb",
    storageBucket: "twitter-clone-514fb.appspot.com",
    messagingSenderId: "658501653978",
    appId: "1:658501653978:web:aa708e469cfe91296e1ce3",
    measurementId: "G-T2LVLNVX38"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db
  