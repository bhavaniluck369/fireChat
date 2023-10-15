import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth} from '../firebase';


function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider);
  }
  return (
    <div>
      <button className="btn btn-primary" onClick={signInWithGoogle}>Sign In with fireChat</button>
    </div>
  );
}

export default SignIn;
