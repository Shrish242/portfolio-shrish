import React from "react";
import mock01 from '../assets/images/project1.png';
import mock02 from '../assets/images/project2.png';
import mock03 from '../assets/images/project3.png';
import mock04 from '../assets/images/project4.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Shrish242/Banking-System" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Shrish242/Banking-System" target="_blank" rel="noreferrer"><h2>Banking System with SQL & Cloud Integration</h2></a>
                <p>Built a full-stack banking application featuring secure account management, transaction tracking, and dashboards. Leveraged MySQL and integrated with Azure SQL for cloud deployment and scalability. Implemented seamless cloud resource management.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Shrish242/Monitor-Eye" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Shrish242/Monitor-Eye" target="_blank" rel="noreferrer"><h2>Monitor Eye – Productivity Monitoring Desktop App</h2></a>
                <p>Developed a desktop app using Flask, PyWebView, and SQLite to track user activity and generate detailed reports. Integrated OpenAI’s Gemini API to provide AI-driven productivity suggestions, enhancing user experience with intelligent insights.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Shrish242/Paraphraser" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Shrish242/Paraphraser" target="_blank" rel="noreferrer"><h2>Paraphraser Model Fine-Tuning with Pegasus</h2></a>
                <p>Fine-tuned the Pegasus transformer model using custom datasets for high-quality paraphrasing. Developed training pipelines and evaluation scripts to improve model accuracy, enabling natural language generation tailored to specific user data.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Shrish242/Billy_The_Pirate" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Shrish242/Billy_The_Pirate" target="_blank" rel="noreferrer"><h2>Discord Bot Game (JavaScript)</h2></a>
                <p>Created an interactive game bot for Discord using JavaScript as one of my first coding projects. Designed game logic, event handling, and user interaction flows within the Discord platform, sharpening skills in asynchronous programming and API integration.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;