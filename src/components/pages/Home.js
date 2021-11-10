import React from "react";
import "./Home.css";

function Home() {
    return (
        <>
            <div id="home">
                <div className="home-content">
                    <div className="text-1">Hi, I am Bikash Gupta</div>
                    <div className="text-2">A Front-End Developer</div>
                    <p>Get ready to turn idea into reality</p>
                    <a href="#contact"><button className="btn-1" href="#contact">Hire Me</button></a>
                    
                    <button className="btn-2">Get Resume</button>
                </div>
            </div>
        </>
    )
}

export default Home;