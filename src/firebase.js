import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCtYxn17bg3g_Y9H_Su79S3QC2YMPQQiqs",
    authDomain: "whatsapp-clone-71486.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-71486.firebaseio.com",
    projectId: "whatsapp-clone-71486",
    storageBucket: "whatsapp-clone-71486.appspot.com",
    messagingSenderId: "824921895824",
    appId: "1:824921895824:web:e5850d52ec30b6a9cab915",
    measurementId: "G-2K1C094LNL"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;