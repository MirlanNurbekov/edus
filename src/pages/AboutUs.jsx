import React, { useContext } from 'react';
import '../styles/Page.css';
import bossImg from '../assets/boss.PNG';
import { FaHandshake, FaLightbulb } from 'react-icons/fa';
import { LanguageContext } from '../context/LanguageContext';

export default function AboutUs() {
  const { t } = useContext(LanguageContext);

  return (
    <main className="home">
      <section id="about" className="about about-page">
        <h2 className="section-title">{t.aboutus_title}</h2>

        <div className="about-page-content">
          <div className="about-page-text-icons">
            <div className="text-icon">
              <FaHandshake className="text-icon__icon" size={60} />
              <p className="section-text">
                {t.aboutus_intro}
                <a
                  href="https://www.icef.com/agency/0016M00002h1BP3QAM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icef-link"
                >
                  {t.about_icef_text}
                </a>
                {t.aboutus_outro}
              </p>
            </div>

            <div className="text-icon">
              <FaLightbulb className="text-icon__icon" size={60} />
              <p className="section-text">{t.aboutus_text2}</p>
            </div>
          </div>

          <div className="about-page-image">
            <img src={bossImg} alt={t.aboutus_image_alt} />
          </div>
        </div>
      </section>
    </main>
  );
}
