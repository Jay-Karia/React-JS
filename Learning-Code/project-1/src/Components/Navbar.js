import React from 'react';
import PropTypes from "prop-types";

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg`} style={{backgroundColor: props.theme.theme}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        {props.title}
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    {props.aboutText}
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
                {/*<div className="form-check form-switch text-light">*/}
                {/*    <input*/}
                {/*        className="form-check-input"*/}
                {/*        type="checkbox"*/}
                {/*        role="switch"*/}
                {/*        id="flexSwitchCheckDefault"*/}
                {/*    />*/}
                {/*    <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> {`Red Theme`}</label>*/}
                {/*</div>*/}
                <button className="button" onClick={() => {
                    props.changeTheme("hsl(5, 100%, 20%)", "white", "red", "red")
                }}>Red
                </button>

                <button className="button" onClick={() => {
                    props.changeTheme("hsl(150, 100%, 20%)", "white", "green", "green")
                }}>Green
                </button>

                <button className="button" onClick={() => {
                    props.changeTheme("hsl(200, 100%, 20%)", "white", "blue", "blue")
                }}>Blue
                </button>

                {/*<select>*/}
                {/*    <option>Light</option>*/}
                {/*    <option>Red</option>*/}
                {/*    <option>Green</option>*/}
                {/*    <option>Blue</option>*/}
                {/*</select>*/}
                {/*<button onClick={props.changeTheme}>Set Theme</button>*/}

            </nav>
        </>

    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Default Title",
    aboutText: "Default About Text"
}