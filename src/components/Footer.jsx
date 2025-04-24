// src/components/Footer.jsx
import React from 'react';
import '../styles/Footer.css';
import { FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>&copy; {new Date().getFullYear()} EdUS. Все права защищены.</span>
        <div className="footer-social">
          <a
            href="https://www.instagram.com/edus.kg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="EdUS в Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@edus-d6q"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="EdUS на YouTube"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.tiktok.com/@edus.kg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="EdUS на TikTok"
          >
            <SiTiktok />
          </a>
          <a
            href="mailto:edus.apply@gmail.com"
            aria-label="Написать на Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/996507221215"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Связаться в WhatsApp"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}
