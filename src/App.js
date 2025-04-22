import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import USinfo from './pages/USinfo';
import Customers from './components/Customers';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usinfo" element={<USinfo />} />
      </Routes>
      <Customers />
      <Footer />
    </Router>
  );
}

export default App;
