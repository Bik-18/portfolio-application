import React from "react";
import { } from "./NavBar.css";

function NavBar() {
    return (
        <>
            <div className="navBar">
                <div className="container">
                    <span className="logo">Bikash Gupta</span>
                    <div className="nav">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#resume">Resume</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default NavBar;