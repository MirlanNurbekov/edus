import React, { useState, useEffect, useContext } from 'react';
import '../styles/Page.css';
import { LanguageContext } from '../context/LanguageContext';

// student photos
import almira from '../assets/students/almira.jpeg';
import bekbars from '../assets/students/bekbars.jpeg';
import bermet from '../assets/students/bermet.jpeg';
import elnura from '../assets/students/elnura.jpeg';
import izat from '../assets/students/izat.jpeg';

// visa photos
import visa1 from '../assets/visa/1.jpeg';
import visa2 from '../assets/visa/2.jpeg';
import visa3 from '../assets/visa/3.jpeg';
import visa4 from '../assets/visa/4.jpeg';
import visa5 from '../assets/visa/5.jpeg';

export default function Students() {
  const { t } = useContext(LanguageContext);

  const slidesImages = [almira, bekbars, bermet, elnura, izat];
  const slidesData = t.students_slides;
  const visaSlidesImages = [visa1, visa2, visa3, visa4, visa5];

  const [current, setCurrent] = useState(0);
  const [visaIndex, setVisaIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrent(prev => (prev + 1) % slidesImages.length),
      6000
    );
    return () => clearInterval(id);
  }, [slidesImages.length]);

  useEffect(() => {
    const id = setInterval(
      () => setVisaIndex(prev => (prev + 1) % visaSlidesImages.length),
      3000
    );
    return () => clearInterval(id);
  }, [visaSlidesImages.length]);

  const prev = () =>
    setCurrent(prev => (prev - 1 + slidesImages.length) % slidesImages.length);
  const next = () =>
    setCurrent(prev => (prev + 1) % slidesImages.length);

  const prevVisa = () =>
    setVisaIndex(prev => (prev - 1 + visaSlidesImages.length) % visaSlidesImages.length);
  const nextVisa = () =>
    setVisaIndex(prev => (prev + 1) % visaSlidesImages.length);

  return (
    <main className="home">
      {/* Students Carousel */}
      <section className="contacts">
        <h2 className="section-title">{t.students_title}</h2>
        <div className="students-carousel-wrapper">
          <button className="carousel-arrow left" onClick={prev}>&#10094;</button>
          <div className="students-carousel">
            <div className="student-slide">
              <img
                src={slidesImages[current]}
                alt={slidesData[current].name}
                className="student-photo"
              />
              <div className="student-review">
                <h4 className="student-name">{slidesData[current].name}</h4>
                <p>{slidesData[current].review}</p>
              </div>
            </div>
          </div>
          <button className="carousel-arrow right" onClick={next}>&#10095;</button>
        </div>
        <div className="carousel-dots">
          {slidesImages.map((_, i) => (
            <span
              key={i}
              className={i === current ? 'dot active' : 'dot'}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </section>

      {/* Tourist Visas Carousel */}
      <section className="tourist-visas">
        <h2 className="section-title">{t.tourist_visas_title}</h2>
        <div className="visas-carousel-wrapper">
          <button className="carousel-arrow left" onClick={prevVisa}>&#10094;</button>
          <div className="visas-carousel">
            <img
              src={visaSlidesImages[visaIndex]}
              alt={`${t.visa_image_alt_prefix}${visaIndex + 1}`}
              className="visa-photo"
            />
          </div>
          <button className="carousel-arrow right" onClick={nextVisa}>&#10095;</button>
        </div>
      </section>
    </main>
  );
}
