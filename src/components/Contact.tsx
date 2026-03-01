import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Contact.scss';

const Contact: React.FC = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="bg-dot-pattern"></div>
      <div className="container">
        <div className="contact-content-wrapper animate-fade-in">
          <div className="contact-card organic-shape glass">
            <h2 className="section-title">Let's Connect</h2>
            <p className="contact-description">
              Have a project in mind, a question, or just want to say hi?
              My inbox is always open. I'll try my best to get back to you!
            </p>

            <a href="mailto:Shrishd242@gmail.com" className="email-cta-btn">
              <EmailIcon className="email-icon" />
              <span>Say Hello</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
