import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Corrected import
import Header from './components/Header';
import Hero from './components/Hero';
import IconBox from './components/IconBox';
import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';
import Plans from './components/Plans'; 
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ'; 
import Blog from './components/Blog'; 
import Contact from './components/Contact'; 
import Footer from './components/Footer'; // Import Footer component
import Signup from './components/Signup'; // Import the Signup component
import Checkout from './components/Checkout'; // Import Checkout component
import './App.css'; // Import global styles

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero id="hero" />
              <IconBox id="services" />
              <AboutUs id="about" />
              <HowItWorks id="howitworks" />
              <Plans id="plans" />
              <Testimonial id="testimonial" />
              <Blog id="blog" />
              <FAQ id="faq" />
              <Contact id="contact" />
            </>
          } />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer /> {/* Footer is here */}
      </div>
    </Router>
  );
}

export default App;
