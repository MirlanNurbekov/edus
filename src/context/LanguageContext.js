import React, { createContext, useState } from 'react';
import en from '../translations/en';
import ru from '../translations/ru';
import kg from '../translations/kg';

export const translations = { en, ru, kg };
export const LanguageContext = createContext({
  lang: 'ru',
  setLang: () => {},
  t: translations.ru
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ru');
  const t = translations[lang] || translations.ru;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
