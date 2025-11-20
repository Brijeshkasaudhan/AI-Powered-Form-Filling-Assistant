import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-title">About Janta Sahara</h1>
        <p className="about-description">
          Janta Sahara is your trusted assistant for simplifying government forms and public services in India.
          Our mission is to make accessing rights and opportunities easy for every citizen, everywhere.
        </p>
        <h2 className="about-subheading">Why Janta Sahara?</h2>
        <ul className="about-list">
          <li>No more confusion: step-by-step help in Hindi and English.</li>
          <li>Fill forms faster using AI and voice input.</li>
          <li>Privacy first: Powered by secure, modern technology.</li>
          <li>Created by passionate developers for every Indian citizen!</li>
        </ul>
        <h2 className="about-subheading">Meet the Developer</h2>
        <div className="about-developer">
          <p><strong>Ankita Patel</strong> – Full Stack Web Developer, CETPA student, hackathon builder, creating smarter technology for people.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
