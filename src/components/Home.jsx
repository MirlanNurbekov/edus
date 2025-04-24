// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import '../styles/Home.css';
import studentImg from '../assets/students.jpeg';

export default function Home() {
  const services = [
    {
      title: 'Консультация по визам',
      text: 'Экспертная помощь в сборе документов и заполнении анкет.',
      path: '/consultation'
    },
    {
      title: 'Поступление в ВУЗ',
      text: 'Подбор университетов, помощь в оформлении и сопровождение.',
      path: '/enrollment'
    },
    {
      title: 'Подготовка к интервью',
      text: 'Индивидуальная подготовка к интервью в Посольстве США',
      path: '/preparation'
    }
  ];

  return (
    <main className="home">
      <section
        className="hero"
        style={{ backgroundImage: `url(${studentImg})` }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Добро пожаловать в EdUS</h1>
          <p className="hero-subtitle">
            Помогаем студентам с обучением за рубежом и оформлением туристических виз.
          </p>

          {/* Навигация на страницу «Узнать больше» */}
          <Link to="/usinfo" className="hero-btn">
            Узнать больше
          </Link>

          {/* Здесь — наши соцсети: Instagram и WhatsApp */}
          <div className="hero-social">
            <a
              className="hero-social-link instagram"
              href="https://www.instagram.com/edus.kg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="EdUS в Instagram"
            >
              <FaInstagram size={32} />
            </a>
            <a
              className="hero-social-link youtube"
              href="https://www.youtube.com/@edus-d6q"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="EdUS на YouTube"
            >
               <FaYoutube size={32} />
            </a>
            <a
              className="hero-social-link whatsapp"
              href="https://wa.me/996507221215"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Связаться в WhatsApp"
            >
              <FaWhatsapp size={32} />
            </a>
          </div>

          {/* Новая строка с ICEF-бейджем */}
          <div className="hero-badge">
            <span
              id="iasBadge"
              data-account-id="6491"
            ></span>
            <script
              async
              defer
              crossorigin="anonymous"
              src="https://www-cdn.icef.com/scripts/iasbadgeid.js"
            ></script>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2 className="section-title">О нас</h2>
        <p className="section-text">
          EdUS — команда профессионалов, сопровождающая вас на каждом этапе поступления<br/>
          в зарубежные вузы и оформления туристических виз, чтобы ваше образование и<br/>
          путешествия были максимально комфортными.
        </p>
      </section>

      <section id="services" className="services">
        <h2 className="section-title">Наши услуги</h2>
        <div className="services-grid">
          {services.map(({ title, text, path }) => (
            <Link key={title} to={path} className="services-card">
              <h3 className="services-card-title">{title}</h3>
              <p className="services-card-text">{text}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
