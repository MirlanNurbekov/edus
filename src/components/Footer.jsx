import React, { useContext } from 'react';
import '../styles/Footer.css';
import { FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import { LanguageContext } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useContext(LanguageContext);
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <span>&copy; {year} EdUS. {t.footer_copy}</span>
        <div className="footer-social">
          <a
            href="https://www.instagram.com/edus.visa/?igsh=amwyZzF6ZnpweGM0#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.footer_instagram_aria}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@edus-d6q"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.footer_youtube_aria}
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.tiktok.com/@edus.kg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.footer_tiktok_aria}
          >
            <SiTiktok />
          </a>
          <a
            href="mailto:edus.apply@gmail.com"
            aria-label={t.footer_email_aria}
          >
            <FaEnvelope />
          </a>
          <a
            href="https://wa.me/996507221215"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.footer_whatsapp_aria}
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}
