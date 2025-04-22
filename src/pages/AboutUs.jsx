// src/pages/AboutUs.jsx
import React from 'react';
import '../styles/Page.css';

export default function AboutUs() {
  return (
    <div className="page-container">
      <h1>О нас</h1>
      <p>
        EdUS — команда профессионалов, сопровождающая вас на каждом этапе:
      </p>
      <ul>
        <li>Консультации по выбору программы обучения</li>
        <li>Помощь в оформлении документов и заявок</li>
        <li>Сопровождение при подаче на визу и адаптация за рубежом</li>
      </ul>
    </div>
  );
}
