import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython} from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faCloud, faDatabase } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
     "MySQL",
    "PostgreSQL",
    "SQLite",
    "Azure SQL",
    "MongoDB",
    "Redis",
    "SQLAlchemy",
    "Stored Procedures",
    "Database Normalization",
    "Transaction Management",
    "Query Optimization"
];

const labelsSecond = [
     "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Flask",
    "Express.js",
    "Node.js",
    "Python",
    "REST APIs",
    "JWT Auth"
];

const labelsThird = [
   "Microsoft Azure",
    "Azure SQL",
    "Cloud Deployment",
    "App Services",
    "Azure Portal",
    "Resource Groups",
    "Cloud Databases",
    "DevOps Pipelines",
    "CI/CD Integration",
    "Virtual Machines",
    "Storage Accounts"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>Database Engineering & Architecture</h3>
                    <p>I specialize in designing, building, and managing robust database systems that power real-time applications. From schema design to transaction management and performance tuning, I have hands-on experience handling both relational and distributed databases.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I build end-to-end applications with intuitive frontends and secure, scalable backends. My work includes a full-stack banking system, a productivity monitoring desktop app, and several Flask + React projects.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCloud} size="3x"/>
                    <h3>Cloud Integration & Azure Services</h3>
                    <p>Experienced in deploying and managing cloud applications using Microsoft Azure. I’ve worked with Azure SQL, App Services, Resource Groups, and CI/CD pipelines to ensure scalable and efficient deployments. Comfortable with the Azure Portal, VMs, and cloud storage for real-world application needs.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;