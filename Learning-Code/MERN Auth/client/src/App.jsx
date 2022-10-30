import "./App.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./Components/register.jsx";
import Login from "./Components/login.jsx";
import Profile from "./Components/profile.jsx";
import Navbar from "./Components/navbar.jsx";

function App() {
    return (
        <>
            <Navbar />
            <Router>
                <Routes>
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/profile" element={<Profile />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
