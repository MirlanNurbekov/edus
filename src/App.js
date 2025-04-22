import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Customers from './components/Customers';
import Footer from './components/Footer';
import './styles/Navbar.css';
import './styles/Home.css';
import './styles/Customers.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Customers />
      <Footer />
    </div>
  );
}

export default App;
