import React, { useContext } from 'react';
import '../styles/Page.css';
import { FaPassport, FaUniversity, FaCommentDots } from 'react-icons/fa';
import img1 from '../assets/1.png';
import img2 from '../assets/2.PNG';
import img3 from '../assets/3.PNG';
import { LanguageContext } from '../context/LanguageContext';

export default function OurServices() {
  const { t } = useContext(LanguageContext);

  const servicesVisual = [
    { image: img1, Icon: FaPassport },
    { image: img2, Icon: FaUniversity },
    { image: img3, Icon: FaCommentDots }
  ];

  return (
    <main className="home">
      <section id="services" className="services">
        <h2 className="section-title">{t.ourservices_title}</h2>
        <div className="services-grid">
          {servicesVisual.map(({ image, Icon }, i) => {
            const { title, description } = t.ourservices_cards[i];
            const msg = `${t.ourservices_msg_prefix}${title}`;
            const whatsappLink = `https://wa.me/996507221215?text=${encodeURIComponent(msg)}`;

            return (
              <div key={i} className="services-card">
                <img src={image} alt={title} className="services-card-image" />
                <h3 className="services-card-title">{title}</h3>
                <p className="services-card-text">{description}</p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="section-btn"
                >
                  {t.ourservices_button}
                </a>
              </div>
            );
          })}
        </div>

        <div className="services-video">
          <iframe
            width="560"
            height="315"
            src={t.ourservices_video_src}
            title={t.ourservices_video_title}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}
