import React, { useState } from 'react';
import '../styles/Navbar.css';
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import logo from '../assets/NavBarLogo.jpg';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand as Home link */}
        <div className="navbar-brand">
          <a href="/" aria-label="Go to home">
            <img src={logo} alt="EdUS Logo" className="navbar-logo" />
          </a>
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

          {/* Divider */}
          <div className="navbar-divider" />

          {/* Social icons */}
          <div className="navbar-social">
            <a
              href="https://www.tiktok.com/@edus.kg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="EdUS on TikTok"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.youtube.com/@edus-d6q"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="EdUS on YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/edus.kg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="EdUS on Instagram"
            >
              <FaInstagram />
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
