import React from "react";
import { useState, useEffect } from "react";
import "../App.css";
import { useNavigate } from "react-router";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");

    const navigate = useNavigate();

    async function register(e) {
        e.preventDefault();

        if (cPassword !== password) {
            document.getElementsByClassName("confirm")[0].style.boxShadow =
                "0 0 1px 1px red";
            alert("Your password does not match");
            return;
        }

        document.getElementsByClassName("confirm")[0].style.boxShadow = "0";

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
        })
            .then((res) => res.json())
            .then((data) => {
                alert(data.msg);
                if (!data.isLoggedIn) return;
                navigate("/profile");
            });
    }

    useEffect(() => {
        fetch("http://localhost:8000/isUserAuth", {
            headers: {
                "Content-type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {});
    });

    return (
        <>
            <h1 align="center" style={{ color: "white" }}>
                Register
            </h1>
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
                        <div className="input_field">
                            <label htmlFor="title">First Name</label>
                            <br />
                            <input
                                type="text"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                placeholder="First Name"
                            />
                        </div>
                        <div className="input_field">
                            <label htmlFor="title">Email</label>
                            <br />
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
                            <br />
                            <input
                                type="password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                placeholder="Password"
                            />
                        </div>
                        <div className="input_field">
                            <label htmlFor="title">Confirm Password</label>
                            <br />
                            <input
                                type="password"
                                onChange={(e) => {
                                    setCPassword(e.target.value);
                                }}
                                className="confirm"
                                placeholder="Confirm Password"
                            />
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}
