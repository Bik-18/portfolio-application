import React from "react";
import "./Resume.css";

function Resume() {
    return (
        <>
            <div id="resume">
                <h1>RESUME</h1>
                <div className="table-container">
                    <h2>Education</h2>
                    <hr></hr>
                    <table>
                        <tr>
                            <th>Year of Passing</th>
                            <th>Degree</th>
                            <th>University/Board</th>
                            <th>Percentage/CGPA</th>
                        </tr>
                        <tr>
                            <td>2018</td>
                            <td>B.E.</td>
                            <td>IES College Of Technology</td>
                            <td>CGPA= 7.23</td>
                        </tr>
                        <tr>
                            <td>2013</td>
                            <td>12th</td>
                            <td>BSEB</td>
                            <td>70.8%</td>
                        </tr>
                        <tr>
                            <td>2011</td>
                            <td>10th</td>
                            <td>OCE(Nepal)</td>
                            <td>69.75%</td>
                        </tr>
                    </table>
                    <div className="www">
                        <div className="xxx">
                            <h4>IES College of Technology, Bhopal</h4>
                            <h5>B.E. Computer Science Engineering</h5>
                            <p className="yyy">
                                <strong>Attended:</strong>
                                <em>2014-2018</em>
                                <br></br>
                                <strong>CGPA: </strong>
                                <em>7.23</em>
                            </p>
                        </div>
                        <div className="xxx">
                            <h4>BSEB</h4>
                            <h5>12th(Science)</h5>
                            <p className="yyy">
                                <strong>Year of Passing:</strong>
                                <em>2013</em>
                                <br></br>
                                <strong>Percentage: </strong>
                                <em>70.8%</em>
                            </p>
                        </div>
                        <div className="xxx">
                            <h4>OCE</h4>
                            <h5>10th</h5>
                            <p className="yyy">
                                <strong>Year of Passing:</strong>
                                <em>2011</em>
                                <br></br>
                                <strong>Percentage: </strong>
                                <em>69.75%</em>
                            </p>
                        </div>
                    </div>

                    <h2>Skills</h2>
                    <hr></hr>
                    <ul className="ranger">
                        <li>HTMl
                            <ul className="empty-box"><li><span className="html"></span></li></ul>
                        </li>

                        <li>CSS
                        <ul className="empty-box"><li><span className="css"></span></li></ul>
                        </li>
                        <li>JAVA SCRIPT
                        <ul className="empty-box"><li><span className="javascript"></span></li></ul>
                        </li>
                        <li>REACT
                        <ul className="empty-box"><li><span className="react"></span></li></ul>
                        </li>
                        <li>GIT
                        <ul className="empty-box"><li><span className="git"></span></li></ul>
                        </li>

                    </ul>

                </div>

            </div>

        </>
    )
}

export default Resume;