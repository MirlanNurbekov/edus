// src/components/Students.jsx
import React, { useState, useEffect } from 'react';
import '../styles/Page.css';

// import your student photos
import almira    from '../assets/students/almira.jpeg';
import bekbars   from '../assets/students/bekbars.jpeg';
import bermet    from '../assets/students/bermet.jpeg';
import elnura    from '../assets/students/elnura.jpeg';
import izat      from '../assets/students/izat.jpeg';

// import your visa photos
import visa1     from '../assets/visa/1.jpeg';
import visa2     from '../assets/visa/2.jpeg';
import visa3     from '../assets/visa/3.jpeg';
import visa4     from '../assets/visa/4.jpeg';
import visa5     from '../assets/visa/5.jpeg';

export default function Students() {
  // student testimonials
  const slides = [
    {
      name: 'Альмира',
      img: almira,
      review: 'Меня зовут Альмира. Благодаря команде EdUS я получила визу в США и успешно поступила в свой избранный университет. Они проконтролировали каждый этап подготовки документов, подробно объяснили все нюансы и добились для меня стипендии, о которой я даже не смела мечтать. Сегодня я с радостью знакомлюсь с новой культурой, завожу друзей со всего мира и уверенно строю своё профессиональное будущее. Сердечная благодарность EdUS за тёплую поддержку, чёткую организацию и веру в мои силы!',
    },
    {
      name: 'Бекбарс',
      img: bekbars,
      review: 'Привет, я Бекбарс. EdUS помогли мне пройти весь путь — от тщательной проверки пакета документов до уверенной подготовки к визовому интервью. Благодаря их поддержке я получил визу для обучения по программе Computer Science в Чикаго и с радостью окунулся в студенческую жизнь: знакомлюсь с новыми друзьями, участвую в проектах и строю планы на карьеру в IT. Огромное спасибо EdUS за профессионализм, внимание к деталям и веру в мои возможности!',
    },
    {
      name: 'Бермeт',
      img: bermet,
      review: 'Я — Бермeт. EdUS взяли на себя все тяжёлые вопросы оформления визы и помогли найти уютное жильё рядом с кампусом. Благодаря их чёткому плану я без стресса оформила все документы, прошла интервью и быстро адаптировалась в новой среде. Сейчас я с удовольствием изучаю маркетинг, участвую в университетских проектах и наслаждаюсь каждым днём за границей. Большое спасибо EdUS за индивидуальный подход, заботу и уверенность в моих силах!',
    },
    {
      name: 'Эльнура',
      img: elnura,
      review: 'Привет, я Эльнура. С поддержкой EdUS я тщательно подготовилась к экзаменам, оформила все документы и успешно поступила в один из ведущих вузов Лондона. Их команда внимательно проверяла каждую деталь моего досье, поддерживала во время интервью и помогла найти комфортное жильё. Сейчас я наслаждаюсь насыщенной студенческой жизнью в сердце британской столицы и уверена в своём будущем. Спасибо EdUS за профессионализм, искреннюю заботу и веру в мои силы!',
    },
    {
      name: 'Изат',
      img: izat,
      review: 'Привет, я Изат. Благодаря EdUS весь процесс оформления прошёл без стресса: они помогли собрать документы, подробно объяснили все этапы и подготовили меня к собеседованию. Теперь я учусь на экономическом факультете в Торонто, активно участвую в студенческой жизни и строю планы на успешную карьеру. Огромное спасибо EdUS за чёткую организацию, тёплую поддержку и вдохновение!',
    }
  ];

  // tourist visa images
  const visaSlides = [visa1, visa2, visa3, visa4, visa5];

  // state for student carousel
  const [current, setCurrent] = useState(0);
  // state for visa carousel
  const [visaIndex, setVisaIndex] = useState(0);

  // auto-advance students every 6s
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  // auto-advance visas every 3s
  useEffect(() => {
    const id = setInterval(() => {
      setVisaIndex(prev => (prev + 1) % visaSlides.length);
    }, 3000);
    return () => clearInterval(id);
  }, [visaSlides.length]);

  const prev = () => setCurrent(prev => (prev - 1 + slides.length) % slides.length);
  const next = () => setCurrent(prev => (prev + 1) % slides.length);

  const prevVisa = () =>
    setVisaIndex(prev => (prev - 1 + visaSlides.length) % visaSlides.length);
  const nextVisa = () =>
    setVisaIndex(prev => (prev + 1) % visaSlides.length);

  return (
    <main className="home">
      {/* Students Carousel */}
      <section className="students">
        <h2 className="section-title">Наша гордость — это наши студенты</h2>

        <div className="students-carousel-wrapper">
          <button className="carousel-arrow left" onClick={prev}>&#10094;</button>
          <div className="students-carousel">
            <div className="student-slide">
              <img
                src={slides[current].img}
                alt={slides[current].name}
                className="student-photo"
              />
              <div className="student-review">
                <h4 className="student-name">{slides[current].name}</h4>
                <p>{slides[current].review}</p>
              </div>
            </div>
          </div>
          <button className="carousel-arrow right" onClick={next}>&#10095;</button>
        </div>

        <div className="carousel-dots">
          {slides.map((_, i) => (
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
        <h2 className="section-title">Туристические визы</h2>
        <div className="visas-carousel-wrapper">
          <button className="carousel-arrow left" onClick={prevVisa}>&#10094;</button>
          <div className="visas-carousel">
            <img
              src={visaSlides[visaIndex]}
              alt={`Visa ${visaIndex + 1}`}
              className="visa-photo"
            />
          </div>
          <button className="carousel-arrow right" onClick={nextVisa}>&#10095;</button>
        </div>
      </section>
    </main>
  );
}
