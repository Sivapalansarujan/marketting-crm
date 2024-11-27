import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import IconBox from './components/IconBox';
import AboutUs from './components/AboutUs';
import HowItWorks from './components/HowItWorks';
import Plans from './components/Plans'; 
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ'; // Import the FAQ component
import Blog from './components/Blog'; // Import the Blog component
import Contact from './components/Contact'; // Import the Contact component
import Footer from './components/Footer'; // Import Footer component
import './App.css'; // Import global styles

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <IconBox />
      <AboutUs />
      <HowItWorks />
      <Plans />
      <Testimonial />
      <Blog /> {/* Add Blog component */}
      <FAQ /> {/* Add FAQ component */}
      <Contact /> {/* Add Contact component */}
      <Footer /> {/* Add Footer component */}
    </div>
  );
}

export default App;
