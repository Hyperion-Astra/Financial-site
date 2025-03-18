import React, { useState } from "react";
import "./ServicesSection.css";

const services = [
  {
    title: "STANDBY LETTERS OF CREDIT",
    description: "Secure your transactions with our expertly managed SBLC services. We offer robust financial guarantees to enhance trust and facilitate global trade or large-scale projects.",
    moreInfo: "We provide expert financial guidance and investment solutions to ensure your wealth remains secure and grows over time. Our approach includes risk assessment, asset allocation, and personalized planning."
  },
  {
    title: "LOAN FINANCING",
    description: " Access flexible, competitive loan options to fund your ambitions—whether launching a new venture, expanding operations, or bridging financial gaps. We provide swift, reliable capital tailored to your needs.",
    moreInfo: "We offer tailored loan services with competitive rates, ensuring you get the right financial support for your specific needs, whether for business expansion or personal investments."
  },
  {
    title: "MONIETIZATION",
    description: " Transform your financial instruments into immediate liquidity. Our monetisation services unlock the value of your assets, providing fast cash flow to seize opportunities or meet urgent demands.",
    moreInfo: "Our advisors work closely with you to identify profitable opportunities, balancing risk and reward to maximize your financial potential through smart investment strategies."
  },
  {
    title: "JOINT VENTURES",
    description: " Partner with us to co-invest in high-potential opportunities. We collaborate with businesses and entrepreneurs to share resources, expertise, and risks, driving mutual success in profitable ventures.",
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
      <h2 className="section-title">SERVICES</h2>
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
