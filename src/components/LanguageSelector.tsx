import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language.startsWith('pt') ? 'en' : 'pt';
    i18n.changeLanguage(nextLang);
  };

  const isPt = i18n.language.startsWith('pt');

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-md text-sm font-medium"
      title="Toggle Language"
    >
      <span className={isPt ? "text-white" : "text-gray-500"}>PT</span>
      <span className="text-gray-600">|</span>
      <span className={!isPt ? "text-white" : "text-gray-500"}>EN</span>
    </button>
  );
};
