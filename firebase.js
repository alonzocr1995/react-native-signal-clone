import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4HRI_ZX8L3Q8I2RC-kdVo679qEBYzOIo",
  authDomain: "signal-yt-cdbf3.firebaseapp.com",
  projectId: "signal-yt-cdbf3",
  storageBucket: "signal-yt-cdbf3.appspot.com",
  messagingSenderId: "1060964344345",
  appId: "1:1060964344345:web:d43e60a3da8340b2be4088",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
