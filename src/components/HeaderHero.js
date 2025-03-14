import React, { useState, useEffect } from "react";
import "./HeaderHero.css";

const HeaderHero = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50, // Adjust for fixed headers
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="hero-container">
      {/* Overlay for the faded effect */}
      <div className="hero-overlay"></div>
      {/* Header */}
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <h1 className="logo" onClick={() => window.location.reload()} style={{ cursor: "pointer" }}>AVALLON</h1>
        <button className="contact-button" onClick={() => scrollToSection("contact")} style={{ cursor: "pointer" }}>Contact us</button>
      </header>

      {/* Hero Section */}
      <div className="hero-content">
        <h2 className="hero-title">SECURE YOUR FINANCIAL FUTURE</h2>
        <p className="hero-text">
          Discover tailored investment and loan solutions designed to help you achieve your financial goals. 
          Partner with Avallon and experience expert guidance every step of the way.
        </p>
        <button className="explore-button" onClick={() => scrollToSection("services")} style={{ cursor: "pointer"}}>Explore Services</button>
      </div>
    </div>
  );
};

export default HeaderHero;
