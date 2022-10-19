import React from 'react'

export default function Login() {
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
