// Footer.js

import React from 'react';
import './Footer.css'; // Include your custom styles

const Footer = () => {
  return (
    <footer className="footer-container" data-testid="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <p>
            <strong>Contact Us</strong>
          </p>
          <div className="address">
            <img src="./icons/pin_drop.svg"></img>
            <p>545 E Max Ave, Worcestershire, MA 16033</p>
          </div>
          <div className="address">
            <img src="./icons/hours.svg"></img>
            <p>Mon - Fri: 9am - 6pm</p>
          </div>
          <div className="address-n">
            <img src="./icons/phone.svg"></img>
            <p>(774) 555-2222</p>
          </div>
        </div>
        <div className="hours">
          <p>
            <strong>Hours</strong>
          </p>
          <div className="hours-list">
            <li>Monday: 8:00am - 6:00pm</li>
            <li>Tuesday: 8:00am - 6:00pm</li>
            <li>Wednesday: 8:00am - 6:00pm</li>
            <li>Thursday: 8:00am - 6:00pm</li>
            <li>Friday: 8:00am - 6:00pm</li>
            <li>Saturday: closed</li>
            <li>Sunday: Closed</li>
          </div>
        </div>
        <div className="footer-social">
          <p>
            <strong>Connect with us</strong>
          </p>
          <img
            className="socials"
            alt="facebook icon"
            src="./Logos/facebook.png"
          ></img>
          <img
            className="socials"
            alt="instagram icon"
            src="./Logos/instagram.png"
          ></img>
          <img
            className="socials"
            alt="instagram icon"
            src="./Logos/yelp.png"
          ></img>
          <img
            className="socials"
            alt="instagram icon"
            src="./Logos/twitter.png"
          ></img>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Max Auto Repair. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
