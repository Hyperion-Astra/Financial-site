import React from "react";
import "./AboutSection.css";
import londonImage from "../assets/maybe.png";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>EMPOWERING FINANCIAL FUTURES IN GREATER LONDON</h2>
        <p>
          At Avallon, we are committed to transforming financial possibilities for individuals and businesses throughout Greater London. 
          Our expert team specializes in offering tailored investment and loan services designed to meet your unique needs. 
          With a deep understanding of the financial landscape, we leverage our expertise to guide you towards sustainable growth and prosperity. 
          Trust Avallon to be your partner in achieving financial success, where your ambitions take center stage.
        </p>
      </div>
      <div className="about-image">
        <img src={londonImage} alt="London Cityscape" />
      </div>
    </section>
  );
};

export default AboutSection;
