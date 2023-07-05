import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCU324H7a74XQl0U3SxqHYtN10QFuUuus",
  authDomain: "fir-todo-app-cee02.firebaseapp.com",
  projectId: "fir-todo-app-cee02",
  storageBucket: "fir-todo-app-cee02.appspot.com",
  messagingSenderId: "218803351344",
  appId: "1:218803351344:web:2bfa1d2138240a47f6a2f5",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
