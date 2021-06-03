import React, { useState, useEffect } from "react";
import "../Styles/Navbar.css";
import logo from "../Images/real-logo.PNG";


const Navbar = () => {


    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-white" style={{borderRadius: "5px"}}>
                <a className="navbar-brand" href="#">
                    <img src={logo} className="logo" alt="logo"/>
                </a>
                <button className="navbar-toggler dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse dropdown-menu" aria-labelledby="dropdownMenuLink" style={{position: "inherit", justifyContent: "flex-end", border: "none"}}>
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#Home">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#AboutMe">About Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Comments">Comments</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Contact">Contact</a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;