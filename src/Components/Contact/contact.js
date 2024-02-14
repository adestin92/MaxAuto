import React from 'react';
import './Contact.css';

const ContactForm = () => {
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic
    // For example, sending the form data to a server
  };

  return (
    <div className="contact-container" data-testid="contact">
      <div className="contact-form">
        <h2>Do Business with Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input type="text" id="name" placeholder="Enter Name" required />
          </div>
          <div className="form-group">
            <input type="email" id="email" placeholder="Enter Email" required />
          </div>
          <div className="form-group">
            <input type="date" id="date" required />
          </div>
          <textarea></textarea>
        </form>
        <button type="submit">Book Appointment</button>
      </div>

      <div className="maps">
        <h2>Visit Us</h2>
        <img src="./photos/google_maps.png" alt="maps location"></img>
      </div>
    </div>
  );
};

export default ContactForm;
