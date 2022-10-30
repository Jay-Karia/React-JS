import React from "react";
import { useState, useEffect } from "react";
import "../App.css";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");

    async function register(e) {
        e.preventDefault();

        if (cPassword !== password) return;

        const user = {
            name: name,
            email: email,
            password: password,
        };

        fetch("http://localhost:8000/register", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(user),
        });
    }

    useEffect(() => {
        fetch("http://localhost:8000/isUserAuth", {
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                alert(data.msg);
            });
    });

    return (
        <>
            <h1 align="center">Register</h1>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20px",
                }}
            >
                <div className="container" align="center">
                    <form
                        className="form"
                        onSubmit={(e) => {
                            register(e);
                        }}
                    >
                        <input
                            type="text"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            placeholder="First Name"
                        />
                        <input
                            type="email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            placeholder="Email"
                        />
                        <input
                            type="password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            placeholder="Password"
                        />
                        <input
                            type="password"
                            onChange={(e) => {
                                setCPassword(e.target.value);
                            }}
                            placeholder="Confirm Password"
                        />

                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    );
}
