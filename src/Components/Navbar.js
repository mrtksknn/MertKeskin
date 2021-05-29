import React, { useState, useEffect } from "react";
import "../Styles/Navbar.css";
import logo from "../Images/logo.PNG";
import menuBars from "../Images/menu-bars.png";
import menuClose from "../Images/menu-close.png";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [, setScreenWidth] = useState(0);

    const trackScreenWidth = () => {
        const width = window.innerWidth;
        setScreenWidth(width);
        if(width > 900) {
            setOpen(true);
        }
    };

    useEffect(() => {
        trackScreenWidth();
        window.addEventListener("resize", trackScreenWidth);
        return () => window.removeEventListener("resize", trackScreenWidth);
    }, []);

    return (
        <div className="Navbar">
            <div className="nav-wrapper">
                <div className="logo">
                    <img
                        src={logo}
                        alt="logo"
                    />
                </div>
                <div className="list-wrapper">
                    <img 
                        src={menuBars}
                        alt="menu"
                        style={{ opacity: !open ? 1 : 0 }}
                        onClick = { () =>{
                            setOpen(!open);
                        }}
                    />
                    <img 
                        src={menuClose}
                        alt="close"
                        style={{ opacity: open ? 1 : 0 }}
                        onClick = { () =>{
                            setOpen(!open);
                        }}
                    />
                    <ul style={{ left: open ? "0" : "-100vw" }}>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">About Me</a>
                        </li>
                        <li>
                            <a href="/">Projects</a>
                        </li>
                        <li>
                            <a href="/">Comments</a>
                        </li>
                        <li>
                            <a href="/">Contacts</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;