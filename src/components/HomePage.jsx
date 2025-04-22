import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/Home.css';

// Navbar component with language switcher and navigation links
const Navbar = () => (
  <nav className="bg-white shadow-md">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">EdUS</div>
      <div className="flex items-center space-x-6">
        <a href="#" className="text-gray-600 hover:text-blue-600">Главная</a>
        <a href="#about" className="text-gray-600 hover:text-blue-600">О нас</a>
        <a href="#services" className="text-gray-600 hover:text-blue-600">Услуги</a>
        <select className="border border-gray-300 rounded p-1" defaultValue="ru">
          <option value="ru">RU</option>
          <option value="en">EN</option>
          <option value="kg">KG</option>
        </select>
      </div>
    </div>
  </nav>
);

// Hero section with background image and welcome text
const Hero = () => (
  <section
    className="bg-cover bg-center h-96 flex items-center"
    style={{ backgroundImage: "url('/images/hero.jpg')" }}
  >
    <div className="container mx-auto px-4">
      <div className="bg-white bg-opacity-80 p-8 rounded-lg max-w-lg">
        <h1 className="text-4xl font-bold mb-4">Добро пожаловать в EdUS</h1>
        <p className="text-lg text-gray-700">
          Помогаем студентам с обучением за рубежом и оформлением туристических виз.
        </p>
      </div>
    </div>
  </section>
);

// About Us section
const About = () => (
  <section id="about" className="container mx-auto px-4 py-16">
    <h2 className="text-3xl font-semibold mb-6">О нас</h2>
    <p className="text-gray-700 leading-relaxed">
      EdUS — это команда профессионалов, оказывающая поддержку при поступлении в
      зарубежные вузы и оформлении туристических виз. Мы сопровождаем вас на всех
      этапах процесса, чтобы ваше образование и путешествия были максимально
      комфортными.
    </p>
  </section>
);

// Services section showing key offerings
const Services = () => (
  <section id="services" className="bg-gray-100 py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-6">Наши услуги</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold mb-2">Консультация по визам</h3>
          <p className="text-gray-600">
            Экспертная помощь в сборе документов и заполнении анкет.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold mb-2">Поступление в ВУЗ</h3>
          <p className="text-gray-600">
            Подбор университетов, помощь в оформлении и сопровождение.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-2xl font-bold mb-2">Подготовка к тестам</h3>
          <p className="text-gray-600">
            Курсы по подготовке к IELTS, TOEFL, SAT и другим экзаменам.
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Footer with social media links
const Footer = () => (
  <footer className="bg-white shadow-inner py-8">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
      <div className="text-gray-600">&copy; {new Date().getFullYear()} EdUS. Все права защищены.</div>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="#" aria-label="Facebook"><FaFacebook size={24} /></a>
        <a href="#" aria-label="Twitter"><FaTwitter size={24} /></a>
        <a href="#" aria-label="Instagram"><FaInstagram size={24} /></a>
        <a href="#" aria-label="LinkedIn"><FaLinkedin size={24} /></a>
      </div>
    </div>
  </footer>
);

// Main HomePage component assembling all sections
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
