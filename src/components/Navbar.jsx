import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaBars,
  FaTimes
} from 'react-icons/fa';
import logo from '../assets/NavBarLogo.jpg';

// 1) Make sure this path points at your context file:
import { LanguageContext } from '../context/LanguageContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useContext(LanguageContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" aria-label="Go to home">
            <img src={logo} alt="EdUS Logo" className="navbar-logo" />
          </Link>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`navbar-links${open ? ' show' : ''}`}>
          <Link to="/" onClick={() => setOpen(false)}>{t.home}</Link>
          <Link to="/about-us" onClick={() => setOpen(false)}>{t.about_us}</Link>
          <Link to="/our-services" onClick={() => setOpen(false)}>{t.our_services}</Link>
          <Link to="/customers" onClick={() => setOpen(false)}>{t.customers}</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>{t.contact}</Link>

          <div className="navbar-divider" />

          <div className="navbar-social">
            <a href="https://www.tiktok.com/@edus.kg" target="_blank" rel="noopener noreferrer" aria-label="EdUS on TikTok">
              <FaTiktok />
            </a>
            <a href="https://www.youtube.com/@edus-d6q" target="_blank" rel="noopener noreferrer" aria-label="EdUS on YouTube">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/edus.kg" target="_blank" rel="noopener noreferrer" aria-label="EdUS on Instagram">
              <FaInstagram />
            </a>
          </div>

          <select
            className="navbar-lang"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="ru">RU</option>
            <option value="en">EN</option>
            <option value="kg">KG</option>
          </select>
        </div>
      </div>
    </nav>
  );
}
