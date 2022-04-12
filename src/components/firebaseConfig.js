import firebase from "firebase/compat/app";
import "firebase/compat/database";
const firebaseConfig = {
  apiKey: "AIzaSyCdNARTcQMT_Mo59YEDlfol9oXapIeMk6E",
  authDomain: "dht11-7fd76.firebaseapp.com",
  databaseURL: "https://dht11-7fd76-default-rtdb.firebaseio.com",
  projectId: "dht11-7fd76",
  storageBucket: "dht11-7fd76.appspot.com",
  messagingSenderId: "733351134580",
  appId: "1:733351134580:web:1cfcbec9ddca94763f5821",
  measurementId: "G-89X9MSB0EJ",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database };
