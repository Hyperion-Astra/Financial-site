import React, { useState } from "react";
import "./ContactForm.css"; // Make sure you have this CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID"; // Replace with your actual Formspree ID

    const response = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact-section" id="contact">
      <div className="contact-text">
        <h2>CONNECT WITH OUR EXPERTS TODAY</h2>
        <p>Reach out to Avallon in Greater London for personalized investment and loan services.</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="tonne">Send Message</button>
        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
