import React, { useContext, useState } from 'react'
import Usercontext from '../context/usercontext'
function Login() {
    const[username,setusername]=useState('')
    const[password,setpassword]=useState('')

    const{setuser}=useContext(Usercontext)

    const handlesumbit=(e)=>
    { e.preventDefault()
       setuser({username,password})
    }
  return (
    <div>
       <h2>Login</h2>
       <input type='text'  value={username} onChange={(e)=>setusername(e.target.value)} placeholder='username'/>
       <input type='text'  value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='password' />
       <button onClick={handlesumbit}>submit</button>
    
    </div>
  )
}

export default Login