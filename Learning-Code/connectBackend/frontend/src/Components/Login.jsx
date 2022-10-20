import React from 'react'
import { useState } from 'react'
import '../App.css'

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  
  
  async function login(e) {
      e.preventDefault()
    //   await console.log('Hello');
      const response = await fetch('http://localhost:8000/api/login', {
          method:'POST',
          headers:{
              'Content-Type':'application/json',
              'Access-Control-Allow-Origin':true
        },
        body: JSON.stringify({
            'email': email,
            'password': password
        })
    })
    
    const data = await response.json()
    if (data.msg==="User exists") {
        alert(data.token)
        window.location.href = '/dashboard'
    } else {
        alert('Password or email does not match')
    }
}

  return (
    <>
    <h1 align='center'>Login</h1>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'20px'}}>
            <div className='container' align='center'>
                <form className='form' onSubmit={login}>
                    <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>

                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    </>
  )
}
