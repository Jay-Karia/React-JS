import React from 'react'
import { useEffect } from 'react';
import jwt from 'jsonwebtoken'
import { Buffer } from 'buffer';
global.Buffer = Buffer;

export default function Dashboard() {
    async function populateQuote() {
        const req = await fetch('http://localhost:8000//api/quote', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        })
        const data = req.json()
        console.log(data)
    }

    useEffect(()=>{
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.decode(token)
            if (!user) {
                localStorage.removeItem('token')
                window.location.href = '/'
            } else {
                populateQuote()
            }
        }
    })
  return (
    <>

    </>
  )
}
