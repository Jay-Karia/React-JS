import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Components/Login';
import Register from './Components/Register';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';

function App() {
    return ( 
        <>
        <Navbar/>
            <BrowserRouter>
            <Routes>
                <Route path="/login" exact element={<Login/>}></Route>
                <Route path="/register" exact element={<Register/>}></Route>
                <Route path="/dashboard" exact element={<Dashboard/>}></Route>
            </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;