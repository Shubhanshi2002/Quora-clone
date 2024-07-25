
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAESnn2PbcOsJzabIflzieE4riv_fAk6jg",
  authDomain: "quora-clone-e290b.firebaseapp.com",
  projectId: "quora-clone-e290b",
  storageBucket: "quora-clone-e290b.appspot.com",
  messagingSenderId: "195660890721",
  appId: "1:195660890721:web:bbf599d9a0ee6ba8d7a020"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const googleProvider= new GoogleAuthProvider()
export const storage = getFirestore(app)