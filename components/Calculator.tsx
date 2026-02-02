
import React, { useState } from 'react';
import { 
  CalculatorState, 
  InventorySize, 
  Commitment, 
  PhotoOption, 
  AdOption 
} from '../types';
import { Language, translations } from '../translations';

interface CalculatorProps {
  state: CalculatorState;
  onUpdate: <K extends keyof CalculatorState>(field: K, value: CalculatorState[K]) => void;
  lang: Language;
}

const SectionWrapper: React.FC<{ 
  number: string, 
  title: string, 
  description: string, 
  children: React.ReactNode,
  lang: string
}> = ({ number, title, description, children, lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang as Language].form;

  return (
    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <div className="flex items-center space-x-6">
          <span className="flex-shrink-0 w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-lg font-black group-hover:bg-indigo-600 transition-colors">
            {number}
          </span>
          <h3 className="text-2xl font-black text-slate-900 tracking-tight uppercase">{title}</h3>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest transition-colors self-end md:self-auto ${
            isOpen ? 'text-indigo-600' : 'text-slate-400 hover:text-slate-600'
          }`}
        >
          <span>{isOpen ? t.closeInfo : t.whyMatters}</span>
          <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </div>
      
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 opacity-100 mb-10' : 'max-h-0 opacity-0'}`}>
        <div className="p-8 bg-indigo-50/50 border-l-4 border-indigo-600 rounded-r-3xl text-sm md:text-base text-slate-700 font-medium leading-relaxed">
          {description}
        </div>
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
        {children}
      </div>
    </div>
  );
};

const Calculator: React.FC<CalculatorProps> = ({ state, onUpdate, lang }) => {
  const t = translations[lang];
  const f = t.form;

  return (
    <div className="space-y-12">
      <SectionWrapper 
        number="01" 
        title={t.sections.details.title} 
        description={t.sections.details.desc}
        lang={lang}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Input label={f.dealershipName} value={state.dealershipName} onChange={(v) => onUpdate('dealershipName', v)} placeholder={f.placeholder} required />
          <Input label={f.contactPerson} value={state.contactPerson} onChange={(v) => onUpdate('contactPerson', v)} placeholder={f.placeholder} required />
          <Input label={f.phone} value={state.phone} onChange={(v) => onUpdate('phone', v)} placeholder={f.placeholder} required />
          <Input label={f.email} type="email" value={state.email} onChange={(v) => onUpdate('email', v)} placeholder={f.placeholder} required />
        </div>
      </SectionWrapper>

      <SectionWrapper 
        number="02" 
        title={t.sections.inventory.title} 
        description={t.sections.inventory.desc}
        lang={lang}
      >
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.values(InventorySize).map((size) => (
              <button
                key={size}
                onClick={() => onUpdate('inventorySize', size)}
                className={`relative px-6 py-6 text-xs font-black uppercase tracking-widest rounded-3xl border-2 transition-all duration-300 group ${
                  state.inventorySize === size 
                  ? 'border-indigo-600 bg-indigo-600 text-white shadow-xl shadow-indigo-100 -translate-y-1' 
                  : 'border-slate-100 bg-slate-50 text-slate-400 hover:border-slate-200'
                }`}
              >
                {size}
                {state.inventorySize === size && (
                  <span className="absolute -top-2 -right-2 bg-white text-indigo-600 p-1 rounded-full shadow-lg border border-indigo-100">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </span>
                )}
              </button>
            ))}
          </div>

          {state.inventorySize === InventorySize.CUSTOM && (
            <div className="animate-in slide-in-from-top-4 duration-300">
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 ml-2">
                {f.customInventoryLabel}
              </label>
              <input
                type="number"
                min="0"
                value={state.customInventoryCount || ''}
                onChange={(e) => onUpdate('customInventoryCount', parseInt(e.target.value) || 0)}
                className="w-full bg-slate-100 border-2 border-indigo-200 rounded-2xl px-6 py-4 text-sm font-bold text-slate-900 focus:bg-white focus:border-indigo-600 outline-none transition-all"
                placeholder="e.g. 150"
              />
            </div>
          )}
        </div>
      </SectionWrapper>

      <SectionWrapper 
        number="03" 
        title={t.sections.commitment.title} 
        description={t.sections.commitment.desc}
        lang={lang}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.values(Commitment).map((c) => (
            <button
              key={c}
              onClick={() => onUpdate('commitment', c)}
              className={`p-8 rounded-3xl border-2 text-left transition-all duration-300 flex flex-col justify-between h-full ${
                state.commitment === c 
                ? 'border-indigo-600 bg-indigo-50 text-indigo-900 shadow-sm shadow-indigo-100 -translate-y-1' 
                : 'border-slate-100 bg-slate-50 text-slate-400 hover:border-slate-200'
              }`}
            >
              <span className="text-lg font-black leading-tight mb-4">{c}</span>
              <span className={`px-3 py-1.5 inline-block text-[10px] uppercase tracking-widest font-black rounded-lg ${
                c === Commitment.MONTHLY ? 'bg-amber-100 text-amber-700' : 
                c === Commitment.SIX_TWELVE_MONTHS ? 'bg-emerald-100 text-emerald-700' : 'bg-indigo-100 text-indigo-700'
              }`}>
                {c === Commitment.MONTHLY ? f.adjustmentStandard : c === Commitment.SIX_TWELVE_MONTHS ? f.adjustmentHighVolume : f.recommended}
              </span>
            </button>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper 
        number="04" 
        title={t.sections.photography.title} 
        description={t.sections.photography.desc}
        lang={lang}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.values(PhotoOption).map((opt) => (
            <button
              key={opt}
              onClick={() => onUpdate('photoOption', opt)}
              className={`p-8 rounded-3xl border-2 text-left transition-all duration-300 relative overflow-hidden group ${
                state.photoOption === opt 
                ? 'border-indigo-600 bg-indigo-50 text-indigo-900 shadow-sm' 
                : 'border-slate-100 bg-slate-50 text-slate-400 hover:border-slate-200'
              }`}
            >
              <div className="relative z-10 flex flex-col">
                <span className="text-base font-black tracking-tight mb-2">{opt}</span>
                <span className="text-[10px] uppercase tracking-widest font-black opacity-50">
                  {f.visualsTag}
                </span>
              </div>
              {state.photoOption === opt && (
                <div className="absolute right-0 bottom-0 w-24 h-24 bg-indigo-100 rounded-tl-full -mr-12 -mb-12 transition-transform group-hover:scale-110"></div>
              )}
            </button>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper 
        number="05" 
        title={t.sections.advertising.title} 
        description={t.sections.advertising.desc}
        lang={lang}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Object.values(AdOption).map((opt) => (
            <button
              key={opt}
              onClick={() => onUpdate('adOption', opt)}
              className={`group flex flex-col items-center justify-center p-6 rounded-3xl border-2 transition-all duration-300 ${
                state.adOption === opt 
                ? 'border-indigo-600 bg-slate-900 text-white shadow-xl -translate-y-1' 
                : 'border-slate-100 bg-slate-50 text-slate-400 hover:border-slate-200'
              }`}
            >
              <span className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-50">{f.planTag}</span>
              <span className="text-sm font-black uppercase tracking-tighter">{opt.split(' (')[0]}</span>
            </button>
          ))}
        </div>
      </SectionWrapper>

      {/* Consents */}
      <div className="space-y-6 px-4 py-8 bg-slate-900 rounded-[2.5rem] text-white">
        <label className="flex items-start cursor-pointer group px-4">
          <div className="relative flex items-center pt-1">
            <input 
              type="checkbox" 
              checked={state.consentContact}
              onChange={(e) => onUpdate('consentContact', e.target.checked)}
              className="w-6 h-6 bg-transparent border-2 border-white/20 rounded-lg focus:ring-0 checked:bg-indigo-500 checked:border-indigo-500 transition-all cursor-pointer" 
            />
          </div>
          <span className="ml-6 text-sm text-slate-300 font-medium leading-relaxed group-hover:text-white transition-colors">
            {f.agreeContact}
          </span>
        </label>
        
        <label className="flex items-start cursor-pointer group px-4">
          <div className="relative flex items-center pt-1">
            <input 
              type="checkbox" 
              checked={state.consentPricing}
              onChange={(e) => onUpdate('consentPricing', e.target.checked)}
              className="w-6 h-6 bg-transparent border-2 border-white/20 rounded-lg focus:ring-0 checked:bg-indigo-500 checked:border-indigo-500 transition-all cursor-pointer" 
            />
          </div>
          <span className="ml-6 text-sm text-slate-300 font-medium leading-relaxed group-hover:text-white transition-colors">
            {f.agreePricing}
          </span>
        </label>
      </div>
    </div>
  );
};

interface InputProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  type?: string;
  className?: string;
  required?: boolean;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ label, value, onChange, type = 'text', className = '', required, placeholder }) => (
  <div className={className}>
    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3 ml-2">
      {label} {required && <span className="text-indigo-600">*</span>}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-slate-100 border-2 border-transparent rounded-2xl px-6 py-4 text-sm font-bold text-slate-900 focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-50 outline-none transition-all placeholder-slate-400"
      placeholder={placeholder}
    />
  </div>
);

export default Calculator;
