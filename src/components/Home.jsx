import React from 'react';
import '../styles/Home.css';
import studentImg from '../assets/students.jpeg';

export default function Home() {
  const services = [
    {
      title: 'Консультация по визам',
      text: 'Экспертная помощь в сборе документов и заполнении анкет.'
    },
    {
      title: 'Поступление в ВУЗ',
      text: 'Подбор университетов, помощь в оформлении и сопровождение.'
    },
    {
      title: 'Подготовка к интервью',
      text: 'Индивидуальная подготовка к интервью в Посольстве США'
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
          <h1 className="hero-title">Поступление в университеты США</h1>
          <p className="hero-subtitle">
          Полное сопровождение от подбора вузов до получения визы
          </p>
          <a href="#services" className="hero-btn">Узнать больше</a>
        </div>
      </section>

      <section id="about" className="about">
        <h2 className="section-title">О нас</h2>
        <p className="section-text">
        Мы помогаем осуществить мечты об учёбе в США. Предоставляем индивидуальную поддержку и экспертные советы по поступлению в ведущие университеты и колледжи.
        </p>
      </section>

      <section id="services" className="services">
        <h2 className="section-title">Наши услуги</h2>
        <div className="services-grid">
          {services.map(item => (
            <div key={item.title} className="services-card">
              <h3 className="services-card-title">{item.title}</h3>
              <p className="services-card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
);
}
