import React from "react";
import "./HeaderHero.css"; // Import the CSS file

const HeaderHero = () => {
  return (
    <div className="hero-container">
      {/* Header */}
      <header className="header">
        <h1 className="logo">AVALLON</h1>
        <button className="contact-button">Contact us</button>
      </header>

      {/* Hero Section */}
      <div className="hero-content">
        <h2 className="hero-title">SECURE YOUR FINANCIAL FUTURE</h2>
        <p className="hero-text">
          Discover tailored investment and loan solutions designed to help you achieve your financial goals. 
          Partner with Avallon and experience expert guidance every step of the way.
        </p>
        <button className="explore-button">Explore Services</button>
      </div>
    </div>
  );
};

export default HeaderHero;
