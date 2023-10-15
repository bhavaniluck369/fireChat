import React, { useState, useEffect } from 'react'
import SignIn from './components/SignIn';
import Chat from './components/Chat';
import './App.css';
import { auth } from './firebase'
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    })
  }, []);

  return (
    <div className="App">
      {user ? <Chat /> : <SignIn />}


    </div>
  );
}

export default App;
