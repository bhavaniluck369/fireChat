import React from 'react';
import { signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { auth } from '../firebase';


function SignIn() {


  const btnStyle = {
    padding: '20px',
    fontSize: '20px',
    borderRadius: '25px',
    fontWeight: '600'
  }

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }
  return (

    <div className='divstyles'>
      <h1 style={{ fontSize: '35px', color: 'blue' }}>ChatPro</h1>
      <button style={btnStyle} onClick={signInWithGoogle}>Sign In with fireChat</button>

    </div>
  );
}

export default SignIn;
