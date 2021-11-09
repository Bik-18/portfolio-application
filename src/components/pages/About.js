import React from "react";
import "./About.css";
import img from "../../images/png-img-man.png";
function About() {
    return (
        <>
            <div id="about" >
                <h1>About Me</h1>
                <div className="about-container">
                    <div className="about-pic">
                        <img src={img} alt="man"></img>
                    </div>

                    <div className="about-content">
                        <p>I'am Associate software developer in Mphasis and having around 2+ years of professional experience 
                            in ReactJs and Unqork Technology.I am also certified as Associate Configrator and have done three
                            poc’s related to policy application on both ReactJS and Unqork.I have good understanding of all
                            the elements in Html5/CSS3, Javascript, React Component,state, props,hooks,life cycle methods,router
                            etc.
                        </p>
                        <div className="icon-div">
                            <p>Languages/Liberary/Technology </p>
                            <div className="icons-container">
                                <i class="fab fa-html5"></i>
                                <i class="fab fa-css3-alt"></i>
                                <i class="fab fa-js-square"></i>
                                <i class="fab fa-bootstrap"></i>
                                <i class="fab fa-react"></i>
                                <i class="fab fa-github-square"></i>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default About;