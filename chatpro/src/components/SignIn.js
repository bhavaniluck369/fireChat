import React from 'react';
import { signInWithPopup, GoogleAuthProvider, signInWithCustomToken } from "firebase/auth";
import { auth } from '../firebase';


function SignIn() {

  const divstyles = {
    backgroundColor: '#47ad88',
    maxWidth: '450px',
    maxHeight: '600px',
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    borderRadius: '25px',
    color: 'white',
  }

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

    <div style={divstyles}>
      <h1 style={{ fontSize: '35px', color: 'blue' }}>ChatPro</h1>
      <button style={btnStyle} onClick={signInWithGoogle}>Sign In with fireChat</button>

    </div>
  );
}

export default SignIn;
