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
        <h1 className="banner-heading">WHY CHOOSE US</h1>
        <p className="banner-text">
        Operating from one of the world’s premier financial capitals, we bring local insight and global reach to every client. 
        FUTHERMORE, Every client is unique. We craft bespoke strategies to align with your specific goals and circumstances. 
        With a proven track record and a client-first approach, we’re here to build lasting relationships grounded in integrity and results.
        </p>
        <button className="banner-button" onClick={() => scrollToSection("services")}>Explore Options</button>
      </div>
    </section>
  );
};

export default FinancialSection;
