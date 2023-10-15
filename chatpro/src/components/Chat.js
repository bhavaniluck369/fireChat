import React, { useState, useEffect, useRef } from 'react';
import SignOut from './SignOut';
import SendMessages from './SendMessages';
import { db, auth } from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';



function Chat() {
  const scroll = useRef()
  const [messages, setMessages] = useState([])

  useEffect(() => {



    if (auth.currentUser) {
      const q = query(collection(db, 'msgs'), orderBy('createdAt'));

      const unsub = onSnapshot(q, (snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });

      return unsub;
    }
  }, []);

  console.log('Chat component rendered');

  return (
    <div>
      <SignOut />
      <div className="msgs">
        {messages.map((m) => (
          <div>
            <div key={m.id} className='msg'>
              <img src={m.data.photoURL} alt="" />
              <p className='chat'>{m.data.text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessages scroll={scroll} />
      <div ref={scroll}></div>
    </div>
  )
}

export default Chat;