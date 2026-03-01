import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Tilt from 'react-parallax-tilt';
import Profile from '../assets/images/Profile.jpg';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <section className="hero-section" id="home">
      <div className="bg-topo-pattern"></div>
      <div className="bg-dot-pattern"></div>

      {/* Magic floating particles */}
      <div className="magic-particles">
        <div className="particle p1"></div>
        <div className="particle p2"></div>
        <div className="particle p3"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text animate-fade-in">
            <div className="social-links geographic-lines">
              <a href="https://github.com/Shrish242" target="_blank" rel="noreferrer" aria-label="GitHub">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/shrishdhakal/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
            </div>

            <h1 className="hero-title">
              Hi, I'm <br />
              <span className="text-accent geographic-highlight">Shrish Dhakal</span>
            </h1>

            <h2 className="hero-subtitle flex-align-center">
              Software Engineer & Digital Craftsman <AutoAwesomeIcon className="magic-icon" />
            </h2>

            <p className="hero-bio">
              I build robust, elegant systems that solve real-world problems. Passionate about writing pristine code, exploring AI innovations, and delivering user experiences that feel like magic.
            </p>

            <div className="hero-cta">
              <a href="#projects" className="btn-primary glow-effect">View My Work</a>
              <a href="#contact" className="btn-secondary">Let's Connect</a>
            </div>
          </div>

          <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Tilt className="parallax-effect" perspective={1000} scale={1.05} gyroscope={true} trackOnWindow={false} transitionSpeed={2500}>
              <div className="image-blob organic-shape magic-glow">
                <img src={Profile} alt="Shrish Dhakal Avatar" />
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;