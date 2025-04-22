import React from 'react';
import '../styles/Navbar.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <img
            src={require('../assets/logo.jpg')}
            alt="EdUS Logo"
            className="navbar-logo"
          />
          <span className="navbar-title">EdUS</span>
        </div>
        <ul className="navbar-links">
          <li><a href="#">Главная</a></li>
          <li><a href="#about">О нас</a></li>
          <li><a href="#services">Услуги</a></li>
          <li>
            <select defaultValue="ru">
              <option value="ru">RU</option>
              <option value="en">EN</option>
              <option value="kg">KG</option>
            </select>
          </li>
        </ul>
        <div className="navbar-social">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
    </nav>
);
}
