import { useState } from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
    return ( 
        <>
            <BrowserRouter>
            <Routes>
                <Route path="/login" exact element={<Login/>}></Route>
                <Route path="/register" exact element={<Register/>}></Route>
            </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;