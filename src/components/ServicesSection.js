import React, { useState } from "react";
import "./ServicesSection.css";

const services = [
  {
    title: "COMPREHENSIVE WEALTH MANAGEMENT",
    description: "Tailored strategies for wealth growth and preservation, ensuring your long-term financial security.",
    moreInfo: "We provide expert financial guidance and investment solutions to ensure your wealth remains secure and grows over time. Our approach includes risk assessment, asset allocation, and personalized planning."
  },
  {
    title: "PERSONALIZED LOAN SOLUTIONS",
    description: "Custom loan options designed to suit your unique financial needs and goals, with flexible terms.",
    moreInfo: "We offer tailored loan services with competitive rates, ensuring you get the right financial support for your specific needs, whether for business expansion or personal investments."
  },
  {
    title: "STRATEGIC INVESTMENT PLANNING",
    description: "Expert guidance on investment opportunities to maximize returns and minimize risks effectively.",
    moreInfo: "Our advisors work closely with you to identify profitable opportunities, balancing risk and reward to maximize your financial potential through smart investment strategies."
  },
  {
    title: "ESTATE PLANNING SERVICES",
    description: "Comprehensive estate planning to safeguard assets and ensure smooth inheritance processes.",
    moreInfo: "We help structure your estate efficiently, ensuring your assets are distributed according to your wishes while minimizing tax liabilities for your beneficiaries."
  },
];

const ServicesSection = () => {
  const [expanded, setExpanded] = useState(Array(services.length).fill(false));

  const toggleExpand = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <section className="services-section" id="services"> 
      <h2 className="section-title">Financial Solutions</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            {expanded[index] && <p className="more-info-text">{service.moreInfo}</p>}
            <button className="more-info-btn" onClick={() => toggleExpand(index)}>
              {expanded[index] ? "Read Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
