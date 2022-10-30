import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
// import { useHistory } from "react-router";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const history = useHistory();

    async function login(e) {
        e.preventDefault();

        const user = {
            email: email,
            password: password,
        };

        fetch("http://localhost:8000/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                alert(data.msg);
                localStorage.setItem("token", data.token);
            });
    }
    useEffect(() => {
        fetch("http://localhost:8000/isUserAuth", {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((res, data) => {
            alert(data);
        });
    }, []);

    return (
        <>
            <h1 align="center">Login</h1>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20px",
                }}
            >
                <div className="container" align="center">
                    <form className="form" onSubmit={login}>
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

                        <button type="submit">Log In</button>
                    </form>
                </div>
            </div>
        </>
    );
}
