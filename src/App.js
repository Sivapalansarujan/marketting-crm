import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IconBox from "./components/IconBox";
import AboutUs from "./components/AboutUs";
import HowItWorks from "./components/HowItWorks";
import Plans from "./components/Plans";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Checkout from "./components/Checkout";
import Blog1 from "./components/Blog1";
import Blog2 from "./components/Blog2";
import Blog3 from "./components/Blog3";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy"; 
import "./App.css"; 

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
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
            }
          />

          {/* Additional Pages */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/blog1" element={<Blog1 />} />
          <Route path="/blog2" element={<Blog2 />} />
          <Route path="/blog3" element={<Blog3 />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
