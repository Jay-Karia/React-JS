import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Hello
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="/register">
                  Sign Up
                </a>
                <a className="nav-link" href="/login">
                  Login
                </a>
                
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}