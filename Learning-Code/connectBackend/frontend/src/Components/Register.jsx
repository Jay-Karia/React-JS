import React from 'react'
import { useState } from 'react'
import '../App.css'

export default function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function register(e) {
        e.preventDefault()
        const response = await fetch('http://localhost:8000/api/register', {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin':true
            },
            body: JSON.stringify({
                'name': name,
                'email': email,
                'password': password
            })
        })

        const data = response.json()
        if (data.status === 'ok') {
            console.log('Registered successfully')
        }
    }
  return (
    <>
     <h1 align='center'>Sign Up</h1>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'20px'}}>
            <div className='container' align='center'>
                <form className='form' onSubmit={register}>
                    <input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder='First Name'/>
                    <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Email'/>
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password'/>

                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    </>
  )
}
