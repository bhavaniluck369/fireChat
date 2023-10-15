import React,{ useState } from 'react'

import { auth, db } from '../firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';


function SendMessages({scroll}) {
    const [msg, setMsg] = useState('');

    async function sendMessage(e){
        e.preventDefault();
        const {uid, photoURL} = auth.currentUser

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

  return (
    <div>
        <form onSubmit={sendMessage}>
            <input type='text' value={msg} style={{ width: '78%', fontSize: '15px', fontWeight: '550', marginLeft: '5px', marginBottom: '-3px' }} onChange={(e) => setMsg(e.target.value)} placeholder='messages....'/>
            <button className="btn btn-primary" type='submit' variant='contained' style={{ width: '18%', fontSize: '15px', fontWeight: '550', margin: '4px 5% -13px 5%', maxWidth: '200px'}} >Send</button>
        </form>
    </div>

  )
}

export default SendMessages;