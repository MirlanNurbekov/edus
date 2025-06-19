import React, { useContext } from 'react';
import '../styles/Page.css';
import { FaInstagram, FaWhatsapp, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { LanguageContext } from '../context/LanguageContext';

export default function Contacts() {
  const { t } = useContext(LanguageContext);

  return (
    <main className="home">
      <section className="contacts">
        <h2 className="section-title">{t.contact_title}</h2>

        <p className="section-text">
          {t.contact_address_label}
          <br />
          {t.contact_address_line1}
        </p>

        <p className="section-text">
          {t.contact_map_intro}
          <a
            href="https://2gis.kg/bishkek/geo/70000001091372703"
            target="_blank"
            rel="noopener noreferrer"
            className="link-blue"
          >
            {t.contact_map_link_text}
          </a>
        </p>

        <div className="map-container">
          <img
            src="https://static.maps.2gis.com/1.0?s=800x400&c=42.870582,74.612472&z=16&pt=42.870582,74.612472"
            alt={t.contact_image_alt}
            style={{ width: '100%', height: 'auto', borderRadius: '0.5rem' }}
          />
        </div>

        <p className="section-text">
          {t.contact_phone_label}&nbsp;
          <a href="tel:+996507221215" className="link-white">
            +996 507 221 215
          </a>
        </p>

        <p className="section-text">
          {t.contact_email_label}&nbsp;
          <a href="mailto:edus.apply@gmail.com" className="link-white">
            edus.apply@gmail.com
          </a>
        </p>

        <div className="contacts-social">
          <a
            href="https://www.instagram.com/edus.visa/?igsh=amwyZzF6ZnpweGM0#"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon instagram"
            aria-label={t.contact_instagram_aria}
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.youtube.com/@edus-d6q"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon youtube"
            aria-label={t.contact_youtube_aria}
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://wa.me/996507221215"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-icon whatsapp"
            aria-label={t.contact_whatsapp_aria}
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="mailto:edus.apply@gmail.com"
            className="contact-icon email"
            aria-label={t.contact_email_aria}
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </section>
    </main>
  );
}
