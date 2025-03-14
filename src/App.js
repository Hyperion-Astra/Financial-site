import React from "react";
import './App.css';
import HeaderHero from "./components/HeaderHero";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import ServicesSection from "./components/ServicesSection";
import ContactForm from "./components/ContactForm";
import FinancialSection from "./components/FinancialSection";


function App() {
  return (
    <div className="App">
      <HeaderHero />
      <AboutSection />
      <ServicesSection />
      <FinancialSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
