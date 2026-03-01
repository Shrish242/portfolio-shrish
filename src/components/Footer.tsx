import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="social-links">
            <a href="https://github.com/Shrish242" target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHubIcon />
            </a>
            <a href="https://www.linkedin.com/in/shrishdhakal/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} Shrish Dhakal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
