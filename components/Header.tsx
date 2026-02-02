
import React from 'react';
import { Language, translations } from '../translations';

interface HeaderProps {
  currentLang: Language;
  onLangChange: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ currentLang, onLangChange }) => {
  const t = translations[currentLang];

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg transform hover:rotate-6 transition-transform cursor-pointer">
              <span className="text-white font-black text-2xl leading-none">P</span>
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tighter uppercase hidden sm:block">Prajjwol <span className="text-indigo-600">Bhattarai</span></span>
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-8 mr-8">
              <a href="#services" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-indigo-600 transition-colors">{t.nav.services}</a>
              <a href="#pricing" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-indigo-600 transition-colors">{t.nav.pricing}</a>
              <a href="#faq" className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-indigo-600 transition-colors">{t.nav.faq}</a>
            </div>
            
            <div className="flex bg-slate-100/50 p-1.5 rounded-2xl border border-slate-200">
              {(['en', 'de', 'tr'] as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => onLangChange(lang)}
                  className={`px-3.5 py-1.5 rounded-xl text-[10px] font-black uppercase transition-all duration-300 ${
                    currentLang === lang 
                      ? 'bg-white text-indigo-600 shadow-sm border border-slate-100' 
                      : 'text-slate-400 hover:text-slate-900'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;