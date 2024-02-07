import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCvbji2qK-DzetUsM8DoIqg4ix-nWLlDrs",
  authDomain: "wpos-ebf1c.firebaseapp.com",
  projectId: "wpos-ebf1c",
  storageBucket: "wpos-ebf1c.appspot.com",
  messagingSenderId: "277425442341",
  appId: "1:277425442341:web:de3cb79f2e421af439b9cc",
  measurementId: "G-ZBHT258HYZ"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);