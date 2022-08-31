import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-dark navbar-dark`}>
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
            <span className="navbar-toggler-icon" />
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
        <div className="d-flex">
          <div
            className="bg-primary rounded mx-2" onClick={()=>{props.applyTheme('hsl(200, 82%, 35%)', 'white', 'hsl(179, 53%, 1%)', 'blue', 'primary', 'hsl(179, 53%, 70%)', 'white', 'black')}}
            style={{ height: "30px", aspectRatio: "1" }}
          ></div>
          <div
            className="bg-warning rounded mx-2" onClick={()=>{props.applyTheme('hsl(50, 72%, 45%)', 'black', 'hsl(57, 63%, 1%)', 'yellow', 'warning','hsl(57, 63%, 80%)', 'black', 'black')}}
            style={{ height: "30px", aspectRatio: "1" }}
          ></div>
          <div
            className="bg-success rounded mx-2" onClick={()=>{props.applyTheme('hsl(150, 82%, 35%)', 'white', 'hsl(140, 53%, 1%)', 'green', 'success', 'hsl(140, 53%, 70%)', 'white', 'black')}}
            style={{ height: "30px", aspectRatio: "1" }}
          ></div>
          <div
            className="bg-light rounded mx-2" onClick={()=>{props.applyTheme('white', 'black', 'green', 'black', 'light', 'hsl(0, 5%, 90%)', 'white', 'black')}}
            style={{ height: "30px", aspectRatio: "1"}}
          ></div>
          <div
            className="bg-dark rounded mx-2" onClick={()=>{props.applyTheme('black', 'white', 'green', 'white', 'dark', 'hsl(0, 5%, 10%)', 'black', 'white')}}
            style={{ height: "30px", aspectRatio: "1" , border:'2px solid white'}}
          ></div>
          <div
            className="bg-danger rounded mx-2" onClick={()=>{props.applyTheme('hsl(5, 50%, 30%)', 'white', 'hsl(57, 63%, 1%)', 'red', 'danger', 'hsl(4,27%,68%)', 'white', 'black')}}
            style={{ height: "30px", aspectRatio: "1"}}
          ></div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Default Title",
  aboutText: "Default About Text",
};
