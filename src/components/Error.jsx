// src/components/Error.jsx
import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import '../styles/Page.css';

export default function Error() {
  return (
    <div className="home">
      <h1 className="contacts">404 — Страница не найдена</h1>
      <div className="error-icon">
        <FaExclamationTriangle />
      </div>
      <p className="contacts">
      Извините, страница, которую вы пытаетесь открыть, не существует или произошла ошибка.
      </p>
    </div>
  );
}
