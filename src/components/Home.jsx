// src/components/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import '../styles/Page.css';
import studentImg from '../assets/students.jpeg';
import visaImg from '../assets/visa.jpg';
import vusaStudent from '../assets/1.png';
import studentPicture from '../assets/Customer3.jpeg';
import vusaStudent2 from '../assets/2.PNG'
import picture3 from '../assets/3.PNG'
import picture4 from '../assets/4.PNG'

export default function Home() {
  const services = [
    {
      title: 'Консультация по визам',
      text: 'Экспертная помощь в сборе документов и заполнении анкет.',
      path: '/enrollment'
    },
    {
      title: 'Поступление в ВУЗ',
      text: 'Подбор университетов, помощь в оформлении и сопровождении.',
      path: '/enrollment'
    },
    {
      title: 'Подготовка к интервью',
      text: 'Индивидуальная подготовка к интервью в Посольстве США.',
      path: '/enrollment'
    }
  ];

  const offerings = [
    { img: vusaStudent,     text: 'Подаём документы в неограниченное количество вузов' },
    { img: picture4,         text: 'Подбор вариантов по индивидуальному запросу' },
    { img: studentPicture,   text: 'Полное сопровождение в процессе поступления' },
    { img: visaImg,          text: 'Тщательная подготовка к визовому интервью' },
    { img: picture3,          text: 'Инструкции и гайды после получения визы' },
    { img: vusaStudent2,     text: 'Предоставляем помещение для сдачи теста' }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % offerings.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [offerings.length]);

  const prevSlide = () => setCurrent(prev => (prev - 1 + offerings.length) % offerings.length);
  const nextSlide = () => setCurrent(prev => (prev + 1) % offerings.length);

  // pick 3 items starting from current
  const visibleItems = [0,1,2].map(i => offerings[(current + i) % offerings.length]);

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
          <Link to="/usinfo" className="section-btn">Узнать больше</Link>
          <div className="hero-social">
            <a className="hero-social-link instagram" href="https://www.instagram.com/edus.kg" target="_blank" rel="noopener noreferrer"><FaInstagram size={32}/></a>
            <a className="hero-social-link youtube"   href="https://www.youtube.com/@edus-d6q" target="_blank" rel="noopener noreferrer"><FaYoutube size={32}/></a>
            <a className="hero-social-link whatsapp" href="https://wa.me/996507221215" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={32}/></a>
          </div>
          <div className="hero-badge">
            <span id="iasBadge" data-account-id="6491"></span>
            <script async defer crossorigin="anonymous" src="https://www-cdn.icef.com/scripts/iasbadgeid.js"></script>
          </div>
        </div>
      </section>

      {/* About / Carousel */}
      <section id="about" className="about">
        <h2 className="section-title">О нас</h2>
        <p className="section-text">
          EdUS — признанная на международном уровне команда профессионалов и официально аккредитованное агентство&nbsp;
          <a href="https://www.icef.com/agency/0016M00002h1BP3QAM" target="_blank" rel="noopener noreferrer" className="icef-link">
            ICEF ID No: 6491
          </a>.
          Мы сопровождаем абитуриентов на каждом этапе образовательного пути за рубежом, предоставляя персонализированные консультации и экспертную поддержку для поступления в ведущие университеты и колледжи США, а также для оформления туристических виз.
        </p>

        <h3 className="about-subtitle">Что мы предлагаем</h3>
        <div className="about-carousel-wrapper">
          <button className="carousel-arrow left"  onClick={prevSlide}>&#10094;</button>
          <div className="about-carousel">
            {visibleItems.map((item, idx) => (
              <Link key={idx} to="/our-services" className="carousel-card">
                <img src={item.img} alt={item.text} />
                <p className="carousel-card-text">{item.text}</p>
              </Link>
            ))}
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
          {services.map(({ title, text, path }, i) => (
            <Link key={i} to={path} className="services-card">
              <h3 className="services-card-title">{title}</h3>
              <p className="services-card-text">{text}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
