import React from 'react';
import './Home.css';
import Header from './Header/Header';
import ServicesProducts from './Services/Services';
import HeroSection from './Hero/Hero';
import AboutUs from './About/About';
import Testimonials from './Testimonials/Testimonial';
import Footer from './Footer/Footer';
import { Element } from 'react-scroll';
import ContactForm from './Contact/contact';

// Main HomePage Component
const HomePage = () => (
  <div>
    <Header />
    <Element name="top-page">
      <HeroSection />
    </Element>

    <Element name="services">
      <ServicesProducts />
    </Element>

    <Testimonials />

    <Element name="about">
      <AboutUs />
    </Element>

    <Element name="contact">
      <ContactForm />
    </Element>

    <Footer />

    {/* Add other components for Portfolio, Testimonials, Blog, CTA Buttons, Contact, etc. */}
    {/* Add styling as needed */}
  </div>
);

export default HomePage;
