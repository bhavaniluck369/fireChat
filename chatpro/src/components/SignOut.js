import React from 'react'
import { auth } from '../firebase'



function SignOut() {
  const divStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'sticky',
    width: '100%',
    backgroundColor: '#FAFAFA',
    top: 0,
    borderBottom: 'solid 1px lightgray',
    zIndex: '10',
  }
  const buttonStyle = {
    width:'86px',
    height:'36px',
    fontSize: '15px',
    borderRadius: '15px',
    fontWeight: '600',
    marginTop:'18px',
    marginRight: '10px'
  }
  return (
    <div style={divStyle}>
      <h1 style={{ fontSize: '28px', color: 'blue',marginLeft:'10px' }}>ChatPro</h1>
      <button style={buttonStyle} onClick={() => auth.signOut()}>SignOut</button>
    </div>
  )
}

export default SignOut;