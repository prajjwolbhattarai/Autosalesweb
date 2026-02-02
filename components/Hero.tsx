
import React from 'react';
import { Language, translations } from '../translations';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang].hero;

  return (
    <div className="relative bg-white pt-12 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center lg:text-left lg:col-span-7">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-black uppercase tracking-wider mb-8">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
              <span>{t.tag}</span>
            </div>
            <h1 className="text-5xl tracking-tight font-black text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl leading-[0.9] uppercase">
              {t.title} <br/>
              <span className="text-indigo-600 italic">{t.titleAccent}</span>
            </h1>
            <p className="mt-8 text-lg text-slate-500 sm:mt-10 sm:text-xl lg:text-2xl max-w-2xl font-medium leading-relaxed">
              {t.desc}
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center px-10 py-5 bg-slate-900 text-white text-sm font-black uppercase tracking-widest rounded-2xl hover:bg-indigo-600 transition-all shadow-2xl shadow-slate-200 hover:-translate-y-1 active:scale-95"
              >
                {t.primaryBtn}
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-slate-900 text-sm font-black uppercase tracking-widest rounded-2xl border-2 border-slate-100 hover:border-slate-200 transition-all hover:-translate-y-1"
              >
                {t.secondaryBtn}
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-40">
              <div className="text-[10px] font-black uppercase tracking-[0.2em]">Inventory Sync</div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em]">Pro Photos</div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em]">Paid Ads</div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em]">Lead Gen</div>
            </div>
          </div>
          
          <div className="mt-16 lg:mt-0 lg:col-span-5 relative">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                className="w-full h-[400px] md:h-[600px] object-cover"
                src="https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=800"
                alt="Modern car inventory"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur p-6 rounded-3xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{t.stats.sales}</p>
                    <p className="text-3xl font-black text-slate-900">+42%</p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1">{t.stats.onboarding}</p>
                    <p className="text-xl font-black text-indigo-600">{t.stats.onboardingVal}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
