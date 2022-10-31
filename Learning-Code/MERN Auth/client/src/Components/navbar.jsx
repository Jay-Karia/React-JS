import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const [Username, SetUsername] = useState("");

    async function logout() {
        localStorage.removeItem("token");
        navigate("/login");
    }

    useEffect(() => {
        fetch("/isUserAuth", {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        })
            .then((res) => res.json())
            .then((data) => (data.isLoggedIn ? SetUsername(data.name) : null));
    });

    return (
        <ul>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/register">Register</a>
            </li>
            <li>
                <a href="/login">Login</a>
            </li>
            <li>
                <div
                    onClick={() => {
                        logout();
                    }}
                    style={{ cursor: "pointer" }}
                >
                    Logout
                </div>
            </li>
            <li>
                <Link to={"/u/" + Username}></Link>
            </li>
        </ul>
    );
}

export default Navbar;
