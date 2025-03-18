import React from "react";
import "./AboutSection.css";
import londonImage from "../assets/maybe.png";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>EMPOWERING WEALTH CREATION FROM THE HEART OF LONDON, UK</h2>
        <p>
        Based in the vibrant financial hub of London, United Kingdom, Crest-Nexus is a trusted investment 
        firm dedicated to unlocking financial opportunities for businesses and individuals worldwide. With 
        a commitment to excellence and innovation, we specialise in tailored financial solutions designed 
        to fuel growth and secure prosperity.
        </p>
      </div>
      <div className="about-image">
        <img src={londonImage} alt="London Cityscape" />
      </div>
    </section>
  );
};

export default AboutSection;
