
import React from 'react';
import { Language, translations } from '../translations';

interface ServicesProps {
  lang: Language;
}

const Services: React.FC<ServicesProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            {t.services}
          </h2>
          <div className="h-2 w-24 bg-indigo-600 mx-auto mt-8"></div>
          <p className="mt-8 text-slate-500 max-w-2xl mx-auto font-medium text-xl leading-relaxed">
            {t.servicesSub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          {t.serviceList.map((s: any, i: number) => (
            <div key={i} className="group relative bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100 flex flex-col h-full transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/5 hover:-translate-y-2">
              <div className="mb-8">
                <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase mb-6 ${
                  s.tag === 'MANDATORY' || s.tag === 'OBLIGATORISCH' || s.tag === 'ZORUNLU'
                    ? 'bg-slate-900 text-white' 
                    : s.tag === 'INCLUDED' || s.tag === 'INKLUSIVE' || s.tag === 'DAHİL'
                      ? 'bg-emerald-500 text-white'
                      : 'bg-indigo-600 text-white shadow-lg shadow-indigo-100'
                }`}>
                  {s.tag}
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-[1.1] tracking-tighter uppercase">{s.title}</h3>
                <p className="text-indigo-600 text-sm font-black mt-2 uppercase tracking-widest opacity-80">{s.subtitle}</p>
              </div>
              
              <p className="text-slate-500 text-base mb-10 font-medium leading-relaxed">{s.desc}</p>
              
              <div className="mt-auto">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-px flex-grow bg-slate-200"></div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 whitespace-nowrap">{s.includedTitle}</h4>
                  <div className="h-px flex-grow bg-slate-200"></div>
                </div>
                
                <ul className="space-y-3 mb-12">
                  {s.features.map((f: string, fi: number) => (
                    <li key={fi} className="flex items-start text-sm text-slate-700 font-bold bg-white p-5 rounded-2xl border border-slate-100 group-hover:border-indigo-100 transition-colors shadow-sm">
                      <div className="flex-shrink-0 w-6 h-6 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center mr-4 mt-0.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <span className="leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="p-6 bg-white/50 rounded-2xl border border-dashed border-slate-200">
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    <span className="text-indigo-600 font-black uppercase tracking-widest mr-2 text-[10px]">The Strategy:</span> 
                    {s.why}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How They Work Together Section */}
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-black mb-10 uppercase tracking-tighter leading-[1.1]">{t.howTogetherTitle}</h3>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-12 font-medium">
                {t.howTogetherContent}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { step: '01. Organize', color: 'indigo' },
                  { step: '02. Enhance', color: 'indigo' },
                  { step: '03. Distribute', color: 'emerald' },
                  { step: '04. Accelerate', color: 'emerald' }
                ].map((item) => (
                  <div key={item.step} className="bg-white/5 px-6 py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest border border-white/10 flex items-center group/item hover:bg-white/10 transition-colors">
                    <span className="mr-3 w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                    {item.step}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-indigo-600 p-10 md:p-16 rounded-[3rem] shadow-2xl relative group">
              <div className="absolute inset-0 bg-slate-950 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              <h4 className="text-indigo-200 text-[10px] font-black uppercase tracking-[0.2em] mb-8">{t.simpleSummaryTitle}</h4>
              <p className="text-2xl md:text-3xl font-black leading-[1.2] mb-12 text-white">
                {t.simpleSummary}
              </p>
              <div className="pt-10 border-t border-white/20">
                <a href="#pricing" className="inline-flex items-center text-sm font-black uppercase tracking-widest text-white hover:translate-x-2 transition-transform group/link">
                  Build Your Digital Engine
                  <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
