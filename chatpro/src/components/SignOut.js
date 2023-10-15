import React from 'react'
import {auth} from '../firebase'


function SignOut() {
  return (
    <div style={{
      display: 'flex', justifyContent: 'center', position: 'fixed', width: '100%', backgroundColor: '#FAFAFA', top: 0, borderBottom: 'solid 1px lightgray', zIndex: '10'
  }}>
        <button className="btn btn-primary" onClick={() => auth.signOut() } variant='outlined'>Signout</button>
    </div>
  )
}

export default SignOut;