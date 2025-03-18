import React from "react";
import "./Footer.css";

const Footer = () => {
  
  return (
    <div className="container">

        <h1 className="logo" onClick={() => window.location.reload()} style={{ cursor: "pointer" }}>CREST-NEXUS</h1>
        <p className="ton">@ 2025. Made by Hyperion_Astra</p>
      
    </div>
  );
};

export default Footer;
