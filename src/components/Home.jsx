// src/components/Home.jsx
import React, { useState, useEffect } from 'react';
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

// service images for the "Наши услуги" cards
import serviceImg1     from '../assets/visa.jpg';
import serviceImg2     from '../assets/Customer2.jpeg';
import serviceImg3     from '../assets/bosstalk.jpeg';

// static badge image
import badgeImg        from '../assets/badge.png';

export default function Home() {
  // Our services data (unchanged)
  const services = [
    {
      title: 'Консультация по визам',
      text:  'Экспертная помощь в сборе документов и заполнении анкет.',
      url:   'https://www.instagram.com/reel/DHfm2_UoJpr/?igsh=ZDdwaXhwdGVxaWVl',
      image: serviceImg1,
    },
    {
      title: 'Поступление в ВУЗ',
      text:  'Подбор университетов, помощь в оформлении и сопровождении.',
      url:   'https://www.instagram.com/reel/DD6Hx6Voo3D/?igsh=MW11a2Z1bHM1c3Z5eg==',
      image: serviceImg2,
    },
    {
      title: 'Подготовка к интервью',
      text:  'Индивидуальная подготовка к интервью в Посольстве США.',
      url:   'https://www.instagram.com/reel/DIgCI34oQ4A/?igsh=MWMwNjZtdHp2aHJ3bw==',
      image: serviceImg3,
    }
  ];

  // carousel offerings (unchanged)
  const offerings = [
    { img: vusaStudent,   text: 'Подаём документы в неограниченное количество вузов' },
    { img: picture4,       text: 'Подбор вариантов по индивидуальному запросу' },
    { img: studentPicture, text: 'Полное сопровождение в процессе поступления' },
    { img: visaImg,        text: 'Тщательная подготовка к визовому интервью' },
    { img: picture3,       text: 'Инструкции и гайды после получения визы' },
    { img: vusaStudent2,   text: 'Предоставляем помещение для сдачи теста' },
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
          <h1 className="hero-title">Добро пожаловать в EdUS</h1>
          <p className="hero-subtitle">
            Сопровождаем студентов на пути к зарубежному образованию и оформлению туристических виз.
          </p>
          <div className="hero-social">
            <a className="hero-social-link instagram"
               href="https://www.instagram.com/edus.kg"
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
          <div className="hero-badge">
            <span id="iasBadge" data-account-id="6491"></span>
            <script
              async defer
              crossOrigin="anonymous"
              src="https://www-cdn.icef.com/scripts/iasbadgeid.js"
            ></script>
          </div>
        </div>
      </section>

      {/* About / Carousel */}
      <section id="about" className="about">
        <h2 className="section-title">О нас</h2>
        <p className="section-text">
          EdUS — признанная на международном уровне команда профессионалов и официально аккредитованное агентство&nbsp;
          <a
            href="https://www.icef.com/agency/0016M00002h1BP3QAM"
            target="_blank"
            rel="noopener noreferrer"
            className="icef-link"
          >
            ICEF ID No: 6491
          </a>.
          Мы сопровождаем абитуриентов на каждом этапе образовательного пути за рубежом, предоставляя персонализированные консультации и экспертную поддержку для поступления в ведущие университеты и колледжи США, а также для оформления туристических виз.
        </p>

        {/* Static ICEF badge */}
        <div className="about-badge">
          <a
            href="https://www.icef.com/agency/0016M00002h1BP3QAM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={badgeImg}
              alt="ICEF accredited agency badge"
              className="about-badge-image"
            />
          </a>
        </div>

        <Link to="/about-us" className="section-btn">Узнать больше</Link>

        <h3 className="about-subtitle">Что мы предлагаем</h3>
        <div className="about-carousel-wrapper">
          <button className="carousel-arrow left" onClick={prevSlide}>&#10094;</button>
          <div className="about-carousel">
            {visibleItems.map((item, idx) => {
              // build WhatsApp link with prefilled text:
              const waMsg = encodeURIComponent(`Здравствуйте! Я заинтересован в услуге: ${item.text}`);
              const waLink = `https://wa.me/996507221215?text=${waMsg}`;
              return (
                <a
                  key={idx}
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="carousel-card"
                >
                  <img src={item.img} alt={item.text}/>
                  <p className="carousel-card-text">{item.text}</p>
                </a>
              );
            })}
          </div>
          <button className="carousel-arrow right" onClick={nextSlide}>&#10095;</button>
        </div>

        <div className="about-btn-container">
          <Link to="/about-us" className="section-btn">Узнать больше</Link>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services">
        <h2 className="section-title">Наши услуги</h2>
        <div className="services-grid">
          {services.map(({ title, text, url, image }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="services-card"
            >
              <img src={image} alt={title} className="services-card-image"/>
              <h3 className="services-card-title">{title}</h3>
              <p className="services-card-text">{text}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
