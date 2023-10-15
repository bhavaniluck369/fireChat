import React from 'react'
import { auth } from '../firebase'


function SignOut() {
  const divStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'fixed',
    width: '100%',
    backgroundColor: '#FAFAFA',
    top: 0,
    borderBottom: 'solid 1px lightgray',
    zIndex: '10',
    padding: '10px'
  }
  const buttonStyle = {
    padding: '20px',
    fontSize: '15px',
    borderRadius: '25px',
    fontWeight: '600',
    margin: '10px 0',
    marginRight: '10px'
  }
  return (
    <div style={divStyle}>
      <h1 style={{ fontSize: '25px', color: 'blue' }}>ChatPro</h1>
      <button style={buttonStyle} onClick={() => auth.signOut()} variant='outlined'>Signout</button>
    </div>
  )
}

export default SignOut;