// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import USinfo from './pages/USinfo';
import AboutUs from './pages/AboutUs';
import OurServices from './pages/OurServices';
import Customers from './pages/Customers';
import Enrollment from './pages/Enrollment';
import Footer from './components/Footer';
import Contact from './pages/Contacts';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usinfo" element={<USinfo />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/enrollment" element={<Enrollment />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
