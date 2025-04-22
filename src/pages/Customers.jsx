import React from 'react';
import '../styles/Customers.css';
import cust1 from '../assets/Customer1.jpeg';
import cust2 from '../assets/Customer2.jpeg';
import cust3 from '../assets/Customer3.jpeg';

export default function Customers() {
  const reviews = [
    { name: 'Customer 1', image: cust1, text: 'Спасибо EdUS за отличную помощь в оформлении визы в США! Сервис на высшем уровне.' },
    { name: 'Customer 2',  image: cust2, text: 'EdUS сделали процесс получения визы простым и понятным. Очень благодарен!' },
    { name: 'Customer 3',  image: cust3, text: 'Потрясающая поддержка от EdUS — профессионально и быстро.' }
  ];

  return (
    <section id="customers" className="customers">
      <h2 className="customers-title">Наши клиенты</h2>
      <div className="customers-grid">
        {reviews.map((r, i) => (
          <div key={i} className="customer-card">
            <img src={r.image} alt={r.name} className="customer-photo" />
            <h3 className="customer-name">{r.name}</h3>
            <p className="customer-text">{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
