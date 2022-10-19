import { useState } from 'react';
import './App.css';

function App() {
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
    }

    async function login(e) {
        e.preventDefault()
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
    }

    return ( 
        <>
       
        </>
    );
}

export default App;