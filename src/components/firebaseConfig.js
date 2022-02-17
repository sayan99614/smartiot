import firebase from "firebase/compat/app";
import "firebase/compat/database";
const firebaseConfig = {
  apiKey: "AIzaSyACuMfT-QOdwpZWr4nFwLje_Q-xo3GoTyQ",
  authDomain: "dht11-3155c.firebaseapp.com",
  databaseURL: "https://dht11-3155c-default-rtdb.firebaseio.com",
  projectId: "dht11-3155c",
  storageBucket: "dht11-3155c.appspot.com",
  messagingSenderId: "615141287831",
  appId: "1:615141287831:web:4ff75b23cfefbe9a3c06d2",
  measurementId: "G-Q4X0CPH34E",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database };
