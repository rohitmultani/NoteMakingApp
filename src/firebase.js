import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyCXrf6ZoK_4PpvPryZDlNyEz5bt91gNUiw",
  authDomain: "crud-d43e3.firebaseapp.com",
  projectId: "crud-d43e3",
  storageBucket: "crud-d43e3.appspot.com",
  messagingSenderId: "45614792493",
  appId: "1:45614792493:web:5ce1312c856c66cc511da4",
  measurementId: "G-EY7P8K9FH6"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);