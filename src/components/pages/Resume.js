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
                </div>
            </div>
        </>
    )
}

export default Resume;