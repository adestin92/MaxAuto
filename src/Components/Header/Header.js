import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-scroll';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header data-testid="header">
      <nav>
        <div className="logo-container">
          <img src="./Logos/logo.png" className="logo" alt="company logo"></img>
          <p>Max Auto Repair</p>
        </div>
        <div className="main-link">
          <ul>
            <Link
              className="hide"
              to="top-page"
              exact
              activeClassName="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
            >
              Home
            </Link>
            <Link
              className="hide"
              to="services"
              activeClassName="active"
              spy={true}
              smooth={true}
              offset={-30}
              duration={800}
            >
              Services
            </Link>
            <Link
              className="hide"
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={800}
              activeClassName="active"
            >
              About
            </Link>
            <Link
              className="hide"
              to="contact"
              activeClassName="active"
              spy={true}
              smooth={true}
              offset={-50}
              duration={800}
            >
              Contact
            </Link>
            <Link className="menu-button" onClick={toggleDropdown}>
              <svg
                id="menu-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="50"
                width="50"
                fill="white"
                viewBox="0 -960 960 960"
              >
                <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
              </svg>
            </Link>
          </ul>
        </div>

        {isDropdownOpen && (
          <div className="dropdown-content">
            <Link className="menu-button" onClick={toggleDropdown}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40"
                fill="white"
                viewBox="0 -960 960 960"
                width="40"
              >
                <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
            </Link>
            <Link
              className=""
              onClick={toggleDropdown}
              to="top-page"
              exact
              activeClassName="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
            >
              Home
            </Link>
            <Link
              className=""
              onClick={toggleDropdown}
              to="services"
              activeClassName="active"
              spy={true}
              smooth={true}
              offset={-50}
              duration={800}
            >
              Services
            </Link>
            <Link
              className=""
              onClick={toggleDropdown}
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
              activeClassName="active"
            >
              About
            </Link>
            <Link
              className=""
              onClick={toggleDropdown}
              to="contact"
              activeClassName="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
            >
              Contact
            </Link>

            <div className="company-info">
              <div>
                <img
                  src="./Logos/logo.png"
                  className="logo"
                  alt="company logo"
                ></img>
                <p>Max Auto Repair</p>
              </div>
              <ul className="dropdown-contact">
                <li>
                  <div>
                    <img src="./icons/pin_drop.svg"></img>
                    <p>545 E Max Ave, Worcestershire, MA 16033</p>
                  </div>
                </li>

                <li>
                  <div>
                    <img src="./icons/hours.svg"></img>
                    <p>Mon - Fri: 9am - 6pm</p>
                  </div>
                </li>

                <li>
                  <div>
                    <img src="./icons/phone.svg"></img>
                    <p>(774) 555-2222</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
