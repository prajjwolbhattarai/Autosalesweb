
import React, { useState } from 'react';
import { Language, translations } from '../translations';

interface FAQProps {
  lang: Language;
}

const FAQ: React.FC<FAQProps> = ({ lang }) => {
  const [active, setActive] = useState<number | null>(0);
  const t = translations[lang].faq;

  return (
    <section id="faq" className="py-32 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">{t.title}</h2>
          <div className="h-1 w-16 bg-indigo-600 mx-auto mt-6"></div>
        </div>

        <div className="space-y-4">
          {t.items.map((f, i) => (
            <div 
              key={i} 
              className={`group bg-white rounded-3xl border transition-all duration-300 ${
                active === i ? 'border-indigo-600 shadow-xl' : 'border-slate-100 shadow-sm hover:border-slate-200'
              }`}
            >
              <button 
                onClick={() => setActive(active === i ? null : i)}
                className="w-full text-left p-8 md:p-10 flex justify-between items-center"
              >
                <h3 className="font-black text-slate-900 text-lg md:text-xl uppercase tracking-tight leading-snug pr-8">
                  {f.q}
                </h3>
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                  active === i ? 'bg-indigo-600 text-white rotate-180' : 'bg-slate-100 text-slate-400'
                }`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                active === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-10 md:px-10 md:pb-12 border-t border-slate-50 pt-8">
                  <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium">
                    {f.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
