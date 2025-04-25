// src/pages/AboutUs.jsx
import React from 'react';
import '../styles/Page.css';
import bossImg from '../assets/boss.PNG';
import { FaHandshake, FaLightbulb } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <main className="home">
      <section id="about" className="about about-page">
        <h2 className="section-title">О нас</h2>

        <div className="about-page-content">
          <div className="about-page-text-icons">
            <div className="text-icon">
              <FaHandshake className="text-icon__icon" size={60} />
              <p className="section-text">
                EdUS — признанная на международном уровне команда профессионалов и официально аккредитованное агентство&nbsp;
                <a
                  href="https://www.icef.com/agency/0016M00002h1BP3QAM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icef-link"
                >
                  ICEF ID No: 6491
                </a>. Мы сопровождаем абитуриентов на каждом этапе образовательного пути за рубежом: от тщательного отбора программ обучения и подготовки полного пакета документов до организации проживания и помощи с адаптацией в новой стране.
              </p>
            </div>
            <div className="text-icon">
              <FaLightbulb className="text-icon__icon" size={60} />
              <p className="section-text">
                Наша команда располагает глубоким знанием требований ведущих университетов США и процессов визового оформления. Мы строим индивидуальный план поступления для каждого студента с учётом его академических интересов, финансовых возможностей и личных предпочтений. EdUS берёт на себя все организационные вопросы: ведёт переговоры с приёмными комиссиями, контролирует сроки подачи документов и сопровождает вас до момента получения долгожданного приглашения на учёбу. Мы верим, что международное образование — это инвестиция в будущее. Ваша цель становится нашей миссией, и каждое достижение мы празднуем вместе с вами.
              </p>
            </div>
          </div>
          <div className="about-page-image">
            <img src={bossImg} alt="Руководитель EdUS" />
          </div>
        </div>
      </section>
    </main>
  );
}
