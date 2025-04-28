// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import USinfo from './pages/USinfo';
import AboutUs from './pages/AboutUs';
import OurServices from './pages/OurServices';
import Customers from './pages/Customers';
import Enrollment from './pages/Enrollment';
import Contact from './pages/Contacts';
import Error from './components/Error';
import Footer from './components/Footer';

function App() {
  // Disable right-click and common DevTools shortcuts
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      // Block F12, Ctrl+Shift+I/J/C, Ctrl+U
      if (
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I','J','C','i','j','c'].includes(e.key)) ||
        (e.ctrlKey && ['U','u'].includes(e.key))
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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
        {/* Catch-all for 404s */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
