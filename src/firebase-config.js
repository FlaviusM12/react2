import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCP0rVYTBVRT5-dqvyJvZ8Vj8ZM3-L3_fE",
  authDomain: "independent-way-399219.firebaseapp.com",
  projectId: "independent-way-399219",
  storageBucket: "independent-way-399219.appspot.com",
  messagingSenderId: "315173777583",
  appId: "1:315173777583:web:cd9783ea880c7f0cf4a45a",
  measurementId: "G-4GWCJ5729W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);