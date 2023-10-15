import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";


const firebaseApp = {
  apiKey: "AIzaSyAlPzuA-gEBD70Pjp97eydx-yq--neUx40",
  authDomain: "firechat-f4712.firebaseapp.com",
  projectId: "firechat-f4712",
  storageBucket: "firechat-f4712.appspot.com",
  messagingSenderId: "380702087235",
  appId: "1:380702087235:web:1c642038daa3c4ddd5dcf6",
  measurementId: "G-HJD654QVF8"
  };

// Initialize Firebase
const app = initializeApp(firebaseApp);


const db = getFirestore(app);

const auth = getAuth(app)

export { db };
export { auth };
