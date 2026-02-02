
import React from 'react';
import { Language, translations } from '../translations';

interface WhyUsProps {
  lang: Language;
}

const WhyUs: React.FC<WhyUsProps> = ({ lang }) => {
  const t = translations[lang].whyUs;

  return (
    <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-white to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-[10px] font-black uppercase tracking-widest mb-8 border border-white/10">
              {t.tag}
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-10 leading-[1.1] uppercase tracking-tighter">
              {t.title} <br/> <span className="text-indigo-500">{t.titleAccent}</span>
            </h2>
            <p className="text-slate-400 text-xl mb-16 max-w-xl font-medium leading-relaxed">
              {t.desc}
            </p>
            <div className="space-y-8">
              {t.items.map((p, i) => (
                <div key={i} className="flex items-start space-x-6 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mt-1 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-black text-xl text-white uppercase tracking-tight">{p.title}</h4>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed mt-1">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <div className="relative rounded-[3rem] overflow-hidden p-3 bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-sm">
               <img src="https://images.unsplash.com/photo-1551288049-bbb6532841ad?auto=format&fit=crop&q=80&w=800" alt="Professional analytics" className="rounded-[2.5rem] shadow-2xl brightness-90 contrast-110" />
               
               <div className="absolute bottom-12 -left-8 bg-indigo-600 text-white p-10 rounded-[2rem] shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                 <p className="text-[10px] uppercase font-black tracking-widest opacity-60 mb-2">{t.badgeReduction}</p>
                 <p className="text-5xl font-black tracking-tighter leading-none">-60%</p>
                 <p className="text-xs font-bold mt-4 uppercase tracking-widest whitespace-nowrap">{t.badgeVs}</p>
               </div>
               
               <div className="absolute top-12 -right-8 bg-emerald-500 text-white p-8 rounded-[2rem] shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                 <div className="flex items-center space-x-3">
                   <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/></svg>
                   </div>
                   <div>
                     <p className="text-[10px] uppercase font-black tracking-widest opacity-80 mb-0.5">{t.badgeEfficiency}</p>
                     <p className="text-xl font-black leading-none">{t.badgeVelocity}</p>
                   </div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
