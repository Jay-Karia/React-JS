import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function navbar() {
    const navigate = useNavigate();
    const [username, setUsername] = useState(null);

    async function logout() {
        localStorage.removeItem("token");
        await navigate.push("/login");
    }

    useEffect(() => {
        fetch("/isUserAuth", {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        })
            .then((res) => res.json())
            .then((data) => (data.isLoggedIn ? setUsername(data.name) : null));
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
                        logout;
                    }}
                >
                    Logout
                </div>
            </li>
            <li>
                <Link to={"/u/" + username}></Link>
            </li>
        </ul>
    );
}
