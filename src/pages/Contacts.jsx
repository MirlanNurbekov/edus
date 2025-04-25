// src/pages/Contacts.jsx
import React from 'react';
import '../styles/Page.css';
import { FaInstagram, FaWhatsapp, FaYoutube, FaEnvelope } from 'react-icons/fa';

export default function Contacts() {
  return (
    <main className="home">
      <section className="contacts">
        <h2 className="section-title">Контакты</h2>

        <p className="section-text">
          Мы находимся по адресу:<br/>
          ул. Сагынбая Манасчы 106, БЦ Моссовет, 1 этаж, офис 108
        </p>

        <p className="section-text">
          Для вашего удобства —&nbsp;
          <a
            href="https://2gis.kg/bishkek/geo/70000001095170045/74.612472,42.870582"
            target="_blank"
            rel="noopener noreferrer"
            className="link-blue"
          >
            карта в 2Гис
          </a>
        </p>

        {/* ← Embedded Google Map */}
        <div className="map-container">
          <iframe
            title="EdUS Office Location"
            src="https://maps.google.com/maps?q=42.870582,74.612472&z=16&output=embed"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <p className="section-text">
          Телефон:&nbsp;
          <a href="tel:+996507221215" className="link-white">
            +996 507 221 215
          </a>
        </p>

        <p className="section-text">
          Email:&nbsp;
          <a href="mailto:edus.apply@gmail.com" className="link-white">
            edus.apply@gmail.com
          </a>
        </p>

        <div className="contacts-social">
          <a
            href="https://www.instagram.com/edus.kg"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon instagram"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.youtube.com/@edus-d6q"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon youtube"
            aria-label="YouTube"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://wa.me/996507221215"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon whatsapp"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="mailto:edus.apply@gmail.com"
            className="contact-icon email"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </section>
    </main>
  );
}
