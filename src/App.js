// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import IconBox from './components/IconBox';
import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';
import Plans from './components/Plans'; 
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ'; // Import FAQ component
import Blog from './components/Blog'; // Import Blog component
import Contact from './components/Contact'; // Import Contact component
import Footer from './components/Footer'; // Import Footer component
import './App.css'; // Import global styles

function App() {
  return (
    <div className="App">
      <Header />
      <Hero id="hero" />
      <IconBox id="services" />
      <AboutUs id="about" />
      <HowItWorks id="howitworks" />
      <Plans id="plans" />
      <Testimonial id="testimonial" />
      <Blog id="blog" />
      <FAQ id="faq" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}

export default App;
