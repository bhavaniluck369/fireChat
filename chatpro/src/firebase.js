import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from "firebase/firestore";


const firebaseApp = {
    apiKey: "AIzaSyCkZ87uCFoROMpa40ecLYV7RQrNq9LHPao",
    authDomain: "chatpro-4cf69.firebaseapp.com",
    projectId: "chatpro-4cf69",
    storageBucket: "chatpro-4cf69.appspot.com",
    messagingSenderId: "245952553500",
    appId: "1:245952553500:web:6c0ccee8137bd7772535d9"
  };

// Initialize Firebase
const app = initializeApp(firebaseApp);
// const analytics = getAnalytics(app);

const db = getFirestore(app);

const auth = getAuth(app)

export { db };
export { auth };
