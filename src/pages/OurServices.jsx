// src/pages/OurServices.jsx
import React from 'react';
import '../styles/Page.css';
import { FaPassport, FaUniversity, FaCommentDots } from 'react-icons/fa';
import img1 from '../assets/1.png';
import img2 from '../assets/2.PNG';
import img3 from '../assets/3.PNG';

export default function OurServices() {
  const services = [
    {
      image: img1,
      Icon: FaPassport,
      title: 'Консультации по визовым процедурам',
      description: `Наши специалисты по визам проведут вас через каждую деталь подачи: от проверки полного пакета документов и заполнения форм до сопровождения на всех этапах взаимодействия с консульством. Мы минимизируем риски отказа, контролируя сроки и соответствие требованиям.`,
    },
    {
      image: img2,
      Icon: FaUniversity,
      title: 'Поступление в зарубежные вузы',
      description: `Анализируем ваши академические достижения и профессиональные цели, чтобы составить персональный список университетов. Готовим сильное мотивационное письмо, рекомендации и пакет документов, а также ведём переписку с приёмными комиссиями от вашего имени.`,
    },
    {
      image: img3,
      Icon: FaCommentDots,
      title: 'Подготовка к посольскому интервью',
      description: `Проводим имитацию интервью по типичным вопросам консульства, подробно анализируем ваши ответы и даём конкретные рекомендации по аргументации и уверенности. Вы будете полностью готовы к любым вопросам и точно знаете, какие документы и ответы ожидает интервьюер.`,
    }
  ];

  return (
    <main className="home">
      <section id="services" className="services">
        <h2 className="section-title">Наши услуги</h2>

        <div className="services-grid">
          {services.map(({ image, Icon, title, description }) => {
            const text = `Здравствуйте, меня интересуют подробности по услуге ${title}`;
            const whatsappLink = `https://wa.me/996507221215?text=${encodeURIComponent(text)}`;

            return (
              <div key={title} className="services-card">
                <img src={image} alt={title} className="services-card-image" />
                <h3 className="services-card-title">{title}</h3>
                <p className="services-card-text">{description}</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="section-btn"
                >
                  Узнать больше
                </a>
              </div>
            );
          })}
        </div>

        <div className="services-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/PQOh5Jz2D6E?start=122"
            title="EdUS Overview"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </main>
  );
}
