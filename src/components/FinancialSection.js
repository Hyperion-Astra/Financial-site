import React from "react";
import "./FinancialSection.css"; // Ensure this CSS file is linked

const FinancialSection = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="financial-banner">
      <div className="banner-content">
        <h1 className="banner-heading">ELEVATE YOUR FINANCIAL FUTURE</h1>
        <p className="banner-text">
          Discover smart investment and tailored loan solutions with Avallon,
          right here in Greater London. Our expert team is ready to guide your
          financial growth.
        </p>
        <button className="banner-button" onClick={() => scrollToSection("services")}>Explore Options</button>
      </div>
    </section>
  );
};

export default FinancialSection;
