import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import { useNavigate } from "react-router";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

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
                if (data.status !== "error") {
                    localStorage.setItem("token", data.token);
                } else {
                    document.getElementsByTagName("input")[0].style.boxShadow =
                        "0 0 1px 1px red";
                    document.getElementsByTagName("input")[1].style.boxShadow =
                        "0 0 1px 1px red";
                }
            });
    }
    useEffect(() => {
        fetch("http://localhost:8000/isUserAuth", {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (!data.isLoggedIn) return;
                navigate("/profile");
            });
    });

    return (
        <>
            <h1 align="center" style={{ color: "white" }}>
                Login
            </h1>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20px",
                }}
            >
                <div
                    className="container"
                    style={{ height: "20rem" }}
                    align="center"
                >
                    <form className="form" onSubmit={login}>
                        <div className="input_field">
                            <label htmlFor="title">Email</label>
                            <input
                                type="email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                placeholder="Email"
                            />
                        </div>
                        <div className="input_field">
                            <label htmlFor="title">Password</label>
                            <input
                                type="password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                placeholder="Password"
                            />
                        </div>

                        <button type="submit">Log In</button>
                    </form>
                </div>
            </div>
        </>
    );
}
