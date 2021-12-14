import React from "react";
import "./Portfolio.css";

function Portfolio() {
    return (
        <>
            <div id="portfolio">
                <h1>Portfolio</h1>
                <div className="portfolio-container">
                    <div className="card">
                        <h2>React Blog App</h2>
                        <hr></hr>
                        <p>This Application includes React.JS, React Router and Context Api mainly. All the features of React such as class component, functional component, hooks, state, props have been used. and for styling purposes css has been used and also made the application responsive.This Application will render different types  of blogs based on their category after filtering out the blogs in different pages.

                        </p>
                        <div className="button-container">
                            <a href="https://github.com/Bik-18/portfolio-application" target="_blank" rel="noreferrer">
                                <button>Repo</button>
                            </a>
                            <a href="https://kind-shirley-9f03b5.netlify.app/" target="_blank" rel="noreferrer">
                                <button>Host</button>
                            </a>
                        </div>

                    </div>
                    <div className="card">
                        <h2>Todo App</h2>
                        <hr></hr>
                        <p>This Application is built using HTML,CSS & JavaScript. This application will dynamically
                            create cards and render them on the DOM . Cards have some functionality like adding tasks,
                            marking the task if done and deleting the card itself from the DOM. And it also has responsive
                            features.
                        </p>
                        <div className="button-container">
                            <a href="https://github.com/Bik-18/todoAppUsingJS.git" target="_blank" rel="noreferrer">
                                <button>Repo</button>
                            </a>
                            <a href="https://bik-18.github.io/todoAppUsingJS/" target="_blank" rel="noreferrer">
                                <button>Host</button>
                            </a>
                        </div>

                    </div>

                    <div className="card">
                        <h2>Digital CLock</h2>
                        <hr></hr>
                        <p>This application is mainly based on JavaScript along with that Html Forms and CSS. This
                            application is using eventsHandlers and responding according to value set on the dropdown.
                        </p>
                        <div className="button-container">
                            <a href="https://github.com/Bik-18/jsAssignmentClockXD.git" target="_blank" rel="noreferrer">
                                <button>Repo</button>
                            </a>
                            <a href="https://bik-18.github.io/jsAssignmentClockXD/" target="_blank" rel="noreferrer">
                                <button>Host</button>
                            </a>
                        </div>

                    </div>

                    <div className="card">
                        <div className="card-container">
                            <h2>Animated Car</h2>
                            <hr></hr>
                            <p>This Application is created using translation and transform property of css along with z-index
                                and position property is used to place the object and mainly focused on animation.
                            </p>
                        </div>
                        <div className="button-container">
                            <a href="https://github.com/Bik-18/cssAssignmentAnimation.git" target="_blank" rel="noreferrer">
                                <button>Repo</button>
                            </a>
                            <a href="https://bik-18.github.io/cssAssignmentAnimation/index3.html" target="_blank" rel="noreferrer">
                                <button>Host</button>
                            </a>
                        </div>

                    </div>

                    <div className="card">
                        <div className="card-container">
                            <h2>Basic Html Page</h2>
                            <hr></hr>
                            <p>This Application is created using Html Elements,Tags and its attributte.It is the
                                simple page decsribing about Back Tracking concept of Data Structures. All useful
                                tags and attributte were used for creating this page.
                            </p>
                        </div>
                        <div className="button-container">
                            <a href="https://github.com/Bik-18/FirstProjectUsingHtml" target="_blank" rel="noreferrer">
                                <button>Repo</button>
                            </a>
                            <a href="https://bik-18.github.io/FirstProjectUsingHtml" target="_blank" rel="noreferrer">
                                <button>Host</button>
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Portfolio;