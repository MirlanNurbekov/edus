import React, { useState } from 'react';
import '../styles/Navbar.css';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import logo from '../assets/logo.jpg';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand */}
        <div className="navbar-brand">
          <img src={logo} alt="EdUS Logo" className="navbar-logo" />
          <span className="navbar-title">EdUS</span>
        </div>

        {/* Mobile toggle */}
        <button
          className="navbar-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        {/* Links + Socials + Language */}
        <div className={`navbar-links${open ? ' show' : ''}`}>
          <a href="#">Главная</a>
          <a href="#about">О нас</a>
          <a href="#services">Наши услуги</a>
          <a href="#customers">Наши клиенты</a>

          {/* Social icons */}
          <div className="navbar-social">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/edus.kg?igsh=amwyZzF6ZnpweGM0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>

          {/* Language selector */}
          <select className="navbar-lang" defaultValue="ru">
            <option value="ru">RU</option>
            <option value="en">EN</option>
            <option value="kg">KG</option>
          </select>
        </div>
      </div>
    </nav>
);
}
