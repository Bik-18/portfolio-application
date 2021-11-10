import React from "react";
import { } from "./NavBar.css";

function NavBar() {
    
    return (
        <>
            {/* <div className="navBar">
                <div className="container">
                    <input type="checkbox" id="check"></input>
                    <label for="check" class="checkbtn">
                        <i class="fas fa-bars"></i>
                    </label>
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
            </div> */}

            <nav>
                <input type="checkbox" id="check"></input>
                <label htmlFor="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <span>Biaksh Gupta</span>
                
                <ul>
                    
                        <li><a href="#home" >Home</a></li>
                        <li><a href="#about" >About</a></li>
                        <li><a href="#portfolio" >Portfolio</a></li>
                        <li><a href="#resume" >Resume</a></li>
                        <li><a href="#contact" >Contact</a></li>
                    

                </ul>
            </nav>
        </>
    )
}

export default NavBar;