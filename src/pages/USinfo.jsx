// src/components/USinfo.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/USinfo.css';

export default function USinfo() {
  return (
    <main className="usinfo">
      <section className="usinfo-content">
        <h2>Узнать больше об EdUS</h2>
        <p>
          EdUS — это команда экспертов, которая помогает:
        </p>
        <ul>
          <li>Выбрать подходящую программу обучения за рубежом</li>
          <li>Подготовить и оформить все необходимые документы</li>
          <li>Сопровождать вас на всех этапах — от подачи до получения визы</li>
        </ul>
        <Link to="/" className="btn btn-secondary">
          ← Вернуться на главную
        </Link>
      </section>
    </main>
);
}
