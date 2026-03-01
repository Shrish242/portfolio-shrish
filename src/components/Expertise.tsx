import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faCloud, faDatabase, faBrain } from "@fortawesome/free-solid-svg-icons";
import Tilt from 'react-parallax-tilt';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "MySQL", "PostgreSQL", "SQLite", "Azure SQL", "MongoDB", "Redis",
    "SQLAlchemy", "Stored Procedures", "Database Normalization",
    "Transaction Management", "Query Optimization"
];

const labelsSecond = [
    "React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Flask",
    "Express.js", "Node.js", "Python", "REST APIs", "JWT Auth"
];

const labelsThird = [
    "Microsoft Azure", "Azure SQL", "Cloud Deployment", "App Services",
    "Azure Portal", "Resource Groups", "Cloud Databases", "DevOps Pipelines",
    "CI/CD Integration", "Virtual Machines", "Storage Accounts"
];

const labelsFourth = [
    "LLM Integration", "Prompt Engineering", "AI Workflow Design",
    "API-based AI Systems", "Structured Output Design", "Automation Pipelines"
];

function Expertise() {
    return (
        <section className="expertise-section" id="expertise">
            <div className="bg-topo-pattern" style={{ opacity: 0.2 }}></div>
            <div className="container">
                <h2 className="section-title animate-fade-in">Expertise</h2>
                <div className="expertise-grid">
                    <Tilt className="expertise-tilt-wrapper" perspective={1000} scale={1.02} gyroscope={true} transitionSpeed={2500} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                        <div className="expertise-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
                            <div className="card-icon database">
                                <FontAwesomeIcon icon={faDatabase} size="2x" />
                            </div>
                            <h3>Database Engineering</h3>
                            <p>I specialize in designing, building, and managing robust database systems. From schema design to transaction management and performance tuning, I handle both relational and distributed databases.</p>
                            <div className="tech-stack-container">
                                <div className="tech-stack">
                                    {labelsFirst.map((label, index) => (
                                        <span key={index} className="tech-pill">{label}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Tilt>

                    <Tilt className="expertise-tilt-wrapper" perspective={1000} scale={1.02} gyroscope={true} transitionSpeed={2500} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                        <div className="expertise-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <div className="card-icon react">
                                <FontAwesomeIcon icon={faReact} size="2x" />
                            </div>
                            <h3>Full Stack Development</h3>
                            <p>I build end-to-end applications with intuitive frontends and secure, scalable backends. My work includes banking systems and productivity monitoring apps with React and Flask.</p>
                            <div className="tech-stack-container">
                                <div className="tech-stack">
                                    {labelsSecond.map((label, index) => (
                                        <span key={index} className="tech-pill">{label}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Tilt>

                    <Tilt className="expertise-tilt-wrapper" perspective={1000} scale={1.02} gyroscope={true} transitionSpeed={2500} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                        <div className="expertise-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
                            <div className="card-icon cloud">
                                <FontAwesomeIcon icon={faCloud} size="2x" />
                            </div>
                            <h3>Cloud & Azure</h3>
                            <p>Experienced in deploying and managing cloud applications using Microsoft Azure. I ensure scalable and efficient deployments using Azure SQL, App Services, and CI/CD pipelines.</p>
                            <div className="tech-stack-container">
                                <div className="tech-stack">
                                    {labelsThird.map((label, index) => (
                                        <span key={index} className="tech-pill">{label}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Tilt>

                    <Tilt className="expertise-tilt-wrapper" perspective={1000} scale={1.02} gyroscope={true} transitionSpeed={2500} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                        <div className="expertise-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
                            <div className="card-icon ai">
                                <FontAwesomeIcon icon={faBrain} size="2x" />
                            </div>
                            <h3>Applied AI & LLM Systems</h3>
                            <p>I design AI-powered workflows and integrate large language models into production systems. My work includes structured prompt engineering, API-based AI integration, and automation-driven application features.</p>
                            <div className="tech-stack-container">
                                <div className="tech-stack">
                                    {labelsFourth.map((label, index) => (
                                        <span key={index} className="tech-pill">{label}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Tilt>
                </div>
            </div>
        </section>
    );
}

export default Expertise;
