// src/pages/OurServices.jsx
import React from 'react';
import '../styles/Page.css';

export default function OurServices() {
  return (
    <div className="page-container">
      <h1>Наши услуги</h1>
      <ul>
        <li>
          <strong>Консультация по визам:</strong> экспертная помощь в сборе
          документов и заполнении анкет.
        </li>
        <li>
          <strong>Поступление в ВУЗ:</strong> подбор университетов, помощь в
          оформлении и сопровождение.
        </li>
        <li>
          <strong>Подготовка к интервью:</strong> индивидуальная подготовка к
          интервью в Посольстве США.
        </li>
      </ul>
    </div>
  );
}
