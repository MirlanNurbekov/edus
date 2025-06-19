import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import '../styles/Page.css';

import studentImg      from '../assets/students.jpeg';
import visaImg         from '../assets/visa.jpg';
import vusaStudent     from '../assets/1.png';
import studentPicture  from '../assets/Customer3.jpeg';
import vusaStudent2    from '../assets/2.PNG';
import picture3        from '../assets/3.PNG';
import picture4        from '../assets/4.PNG';

import serviceImg1     from '../assets/visa.jpg';
import serviceImg2     from '../assets/Customer2.jpeg';
import serviceImg3     from '../assets/bosstalk.jpeg';
import badgeImg        from '../assets/badge.png';

// pull in our LanguageContext
import { LanguageContext } from '../context/LanguageContext';

export default function Home() {
  const { t } = useContext(LanguageContext);

  // just URLs & images here—titles/text come from t.services[]
  const services = [
    {
      url: 'https://www.instagram.com/reel/DHfm2_UoJpr/?igsh=ZDdwaXhwdGVxaWVl',
      image: serviceImg1,
    },
    {
      url: 'https://www.instagram.com/edus.visa/?igsh=amwyZzF6ZnpweGM0#',
      image: serviceImg2,
    },
    {
      url: 'https://www.instagram.com/reel/DIgCI34oQ4A/?igsh=MWMwNjZtdHp2aHJ3bw==',
      image: serviceImg3,
    }
  ];

  // carousel images only—text comes from t.offerings[]
  const offerings = [
    { img: vusaStudent },
    { img: picture4 },
    { img: studentPicture },
    { img: visaImg },
    { img: picture3 },
    { img: vusaStudent2 },
  ];

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(
      () => setCurrent(prev => (prev + 1) % offerings.length),
      5000
    );
    return () => clearInterval(timer);
  }, [offerings.length]);

  const prevSlide = () =>
    setCurrent(prev => (prev - 1 + offerings.length) % offerings.length);
  const nextSlide = () =>
    setCurrent(prev => (prev + 1) % offerings.length);

  const visibleItems = [0, 1, 2].map(i => offerings[(current + i) % offerings.length]);

  return (
    <main className="home">
      {/* Hero */}
      <section className="hero" style={{ backgroundImage: `url(${studentImg})` }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">{t.hero_title}</h1>
          <p className="hero-subtitle">{t.hero_subtitle}</p>
          <div className="hero-social">
            <a className="hero-social-link instagram"
               href="https://www.instagram.com/edus.visa/?igsh=amwyZzF6ZnpweGM0#"
               target="_blank"
               rel="noopener noreferrer">
              <FaInstagram size={32}/>
            </a>
            <a className="hero-social-link youtube"
               href="https://www.youtube.com/@edus-d6q"
               target="_blank"
               rel="noopener noreferrer">
              <FaYoutube size={32}/>
            </a>
            <a className="hero-social-link whatsapp"
               href="https://wa.me/996507221215"
               target="_blank"
               rel="noopener noreferrer">
              <FaWhatsapp size={32}/>
            </a>
          </div>
        </div>
      </section>

      {/* About / Carousel */}
      <section id="about" className="about">
        <h2 className="section-title">{t.about_title}</h2>
        <p className="section-text">
          {t.about_intro}
          <a
            href="https://www.icef.com/agency/0016M00002h1BP3QAM"
            target="_blank"
            rel="noopener noreferrer"
            className="icef-link"
          >
            {t.about_icef_text}
          </a>
          {t.about_outro}
        </p>

        <div className="about-badge">
          <a
            href="https://www.icef.com/agency/0016M00002h1BP3QAM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={badgeImg}
              alt={t.badge_alt}
              className="about-badge-image"
            />
          </a>
        </div>

        <Link to="/about-us" className="section-btn">{t.learn_more}</Link>

        <h3 className="about-subtitle">{t.offerings_title}</h3>
        <div className="about-carousel-wrapper">
          <button className="carousel-arrow left" onClick={prevSlide}>&#10094;</button>
          <div className="about-carousel">
            {visibleItems.map((item, idx) => {
              const index = (current + idx) % offerings.length;
              const waMsg = encodeURIComponent(`${t.whatsapp_intro}${t.offerings[index]}`);
              const waLink = `https://wa.me/996507221215?text=${waMsg}`;
              return (
                <a
                  key={idx}
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="carousel-card"
                >
                  <img src={item.img} alt={t.offerings[index]}/>
                  <p className="carousel-card-text">{t.offerings[index]}</p>
                </a>
              );
            })}
          </div>
          <button className="carousel-arrow right" onClick={nextSlide}>&#10095;</button>
        </div>

        <div className="about-btn-container">
          <Link to="/about-us" className="section-btn">{t.learn_more}</Link>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services">
        <h2 className="section-title">{t.services_title}</h2>
        <div className="services-grid">
          {services.map(({ url, image }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="services-card"
            >
              <img src={image} alt={t.services[i].title} className="services-card-image"/>
              <h3 className="services-card-title">{t.services[i].title}</h3>
              <p className="services-card-text">{t.services[i].text}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
