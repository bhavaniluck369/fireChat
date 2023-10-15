import React, { useState } from 'react'

import { auth, db } from '../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';


function SendMessages({ scroll }) {
  const [msg, setMsg] = useState('');

  async function sendMessage(e) {
    e.preventDefault();
    console.log('sendmessage');
    const { uid, photoURL } = auth.currentUser

    if (msg.trim() !== '') {
      const messagesCollection = collection(db, 'msgs');

      await addDoc(messagesCollection, {
        text: msg,
        photoURL: photoURL,
        uid: uid,
        createdAt: serverTimestamp(),
      });
    }

    setMsg('');
    scroll.current.scrollIntoView({ behavior: 'smooth' })
  }

  const iStyle = {
    width: '75%',
    fontSize: '15px',
    fontWeight: '550',
    marginLeft: '5px',
    marginBottom: '3px',
    borderStyle: 'solid',
    borderRadius: '10px',
    padding: '8px',
  }

  const btStyle = {
    width: '15%',
    padding: '8px',
    backgroundColor: '#058728',
    fontSize: '15px',
    fontWeight: '550',
    marginRight: '5px',
    marginBottom: '3px',
    maxWidth: '150px',
    borderStyle: 'none',
    borderRadius: '20px',
    color: 'white',
    cursor: 'pointer',
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div style={{display:'flex',justifyContent:'center'}}>
          <input type='text' className='' value={msg} style={iStyle} onChange={(e) => setMsg(e.target.value)} placeholder='messages....' />
          <button type='submit' style={btStyle} >Send</button>
        </div>
      </form>
    </div>

  )
}

export default SendMessages;