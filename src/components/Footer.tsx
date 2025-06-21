import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Shrish242" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/shrishdhakal/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
       <p>
       © 2025 Shrish Dhakal. All rights reserved for modifications and custom content.
      </p>
    </footer>
  );
}

export default Footer;