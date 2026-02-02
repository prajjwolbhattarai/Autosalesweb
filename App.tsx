
import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Calculator from './components/Calculator';
import PricingReference from './components/PricingReference';
import WhyUs from './components/WhyUs';
import FAQ from './components/FAQ';
import PurchaseOrder from './components/PurchaseOrder';
import { 
  InventorySize, 
  Commitment, 
  PhotoOption, 
  AdOption, 
  CalculatorState, 
  PricingBreakdown 
} from './types';
import { 
  PLATFORM_PRICING, 
  SETUP_FEE_LOGIC, 
  COMMITMENT_MULTIPLIERS, 
  PHOTO_PRICES, 
  AD_PRICES 
} from './constants';
import { Language, translations } from './translations';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const t = translations[lang];

  const [formData, setFormData] = useState<CalculatorState>({
    dealershipName: '',
    contactPerson: '',
    phone: '',
    email: '',
    city: '',
    inventorySize: InventorySize.SIZE_1_15,
    customInventoryCount: 0,
    commitment: Commitment.THREE_MONTHS,
    photoOption: PhotoOption.NONE,
    platforms: ['mobile.de (Included)', 'AutoScout24 (Included)', 'Kleinanzeigen (Included)'],
    adOption: AdOption.NONE,
    consentContact: false,
    consentPricing: false,
  });

  const pricing = useMemo<PricingBreakdown>(() => {
    let baseMonthly: number;
    let setupFee: number;

    if (formData.inventorySize === InventorySize.CUSTOM) {
      // Calculate custom price: €200 base + €10 per car
      baseMonthly = 200 + (formData.customInventoryCount * 10);
      // Custom setup: €500 base + €5 per car
      setupFee = 500 + (formData.customInventoryCount * 5);
    } else {
      baseMonthly = PLATFORM_PRICING[formData.inventorySize];
      setupFee = SETUP_FEE_LOGIC[formData.inventorySize];
    }

    const multiplier = COMMITMENT_MULTIPLIERS[formData.commitment];
    
    const isPhotoBundle = formData.photoOption === PhotoOption.BUNDLE_10 || formData.photoOption === PhotoOption.BUNDLE_25;
    const photoMonthly = isPhotoBundle ? PHOTO_PRICES[formData.photoOption] : 0;
    const photoOneTime = formData.photoOption === PhotoOption.PER_VEHICLE ? 40 : 0;

    const adMonthly = AD_PRICES[formData.adOption];
    const adjustedBase = baseMonthly * multiplier;

    return {
      setupFee: setupFee,
      baseMonthly: baseMonthly,
      commitmentAdjustment: adjustedBase - baseMonthly,
      photoFee: photoMonthly,
      adFee: adMonthly,
      totalMonthly: adjustedBase + photoMonthly + adMonthly,
      totalOneTime: setupFee + photoOneTime,
    };
  }, [formData]);

  const handleUpdateField = <K extends keyof CalculatorState>(field: K, value: CalculatorState[K]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleOnboarding = () => {
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isSubmitted) {
    return (
      <PurchaseOrder 
        state={formData} 
        pricing={pricing} 
        lang={lang} 
        onBack={() => setIsSubmitted(false)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Header currentLang={lang} onLangChange={setLang} />
      
      <Hero lang={lang} />

      {/* SECTION 1: Everything You Need to Scale (Services) */}
      <Services lang={lang} />

      {/* SECTION 2: Instant Pricing Calculator */}
      <section id="pricing" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase leading-none">
              {t.calculator}
            </h2>
            <div className="h-2 w-24 bg-indigo-600 mt-6 hidden lg:block"></div>
            <p className="mt-6 text-slate-500 font-medium text-lg max-w-2xl">{t.servicesSub}</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <Calculator state={formData} onUpdate={handleUpdateField} lang={lang} />
            </div>
            <div className="lg:col-span-4 sticky top-28">
              <SummaryPanel 
                pricing={pricing} 
                state={formData} 
                lang={lang} 
                onSubmit={handleOnboarding}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyUs lang={lang} />

      {/* Pricing Table Reference */}
      <PricingReference lang={lang} />

      {/* FAQ */}
      <FAQ lang={lang} />

      <footer className="bg-slate-950 py-16 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-3 grayscale opacity-50">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-slate-950 font-black text-lg">P</span>
              </div>
              <span className="text-xl font-black text-white tracking-tighter uppercase">Prajjwol Bhattarai</span>
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">{t.footer}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const SummaryPanel: React.FC<{ 
  pricing: PricingBreakdown, 
  state: CalculatorState, 
  lang: Language,
  onSubmit: () => void 
}> = ({ pricing, state, lang, onSubmit }) => {
  const t = translations[lang];
  const labels = t.summaryLabels;
  const isFormValid = state.dealershipName && state.email && state.consentContact && state.consentPricing;

  return (
    <div className="bg-slate-900 text-white rounded-[2rem] p-8 shadow-2xl border border-white/10 relative overflow-hidden group">
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl group-hover:bg-indigo-500/30 transition-colors duration-500"></div>
      
      <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
        <h3 className="text-xl font-black uppercase tracking-tight">{labels.summary}</h3>
        <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-black rounded-full uppercase">{labels.instantUpdate}</span>
      </div>
      
      <div className="space-y-4 mb-10">
        <div className="flex justify-between items-center group/row">
          <span className="text-slate-400 text-sm">{labels.setup}</span>
          <span className="font-bold text-white bg-white/5 px-2 py-1 rounded">€{pricing.setupFee.toLocaleString()}</span>
        </div>
        
        <div className="flex justify-between items-center group/row">
          <span className="text-slate-400 text-sm">{labels.basePlatform}</span>
          <span className="font-bold text-white">€{pricing.baseMonthly.toLocaleString()}</span>
        </div>

        {pricing.commitmentAdjustment !== 0 && (
          <div className={`flex justify-between items-center font-bold text-sm ${pricing.commitmentAdjustment < 0 ? 'text-emerald-400' : 'text-amber-400'}`}>
            <span>{labels.adjustment}</span>
            <span className="italic">{pricing.commitmentAdjustment > 0 ? '+' : ''}€{pricing.commitmentAdjustment.toFixed(0)}</span>
          </div>
        )}

        {pricing.photoFee > 0 && (
          <div className="flex justify-between items-center">
            <span className="text-slate-400 text-sm">{labels.photoBundle}</span>
            <span className="font-bold text-white">€{pricing.photoFee.toLocaleString()}</span>
          </div>
        )}

        {pricing.adFee > 0 && (
          <div className="flex justify-between items-center">
            <span className="text-slate-400 text-sm">{labels.adsManagement}</span>
            <span className="font-bold text-white">€{pricing.adFee.toLocaleString()}</span>
          </div>
        )}
      </div>

      <div className="bg-indigo-600/10 border border-indigo-500/20 rounded-2xl p-6 mb-8 text-center relative">
        <p className="text-indigo-400 text-[10px] font-black uppercase tracking-widest mb-2">{labels.monthlyTotal}</p>
        <p className="text-6xl font-black text-white leading-none tracking-tighter tabular-nums">€{pricing.totalMonthly.toLocaleString()}</p>
        <p className="text-indigo-300/40 text-[9px] mt-4 font-bold uppercase tracking-widest">{labels.subjectToReview}</p>
      </div>

      <button
        disabled={!isFormValid}
        className={`w-full py-5 rounded-2xl font-black text-lg transition-all duration-300 shadow-xl active:scale-95 flex items-center justify-center space-x-2 ${
          isFormValid 
          ? 'bg-emerald-500 hover:bg-emerald-400 text-white cursor-pointer hover:-translate-y-1' 
          : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-white/5'
        }`}
        onClick={onSubmit}
      >
        <span>{labels.onboarding}</span>
        {isFormValid && (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        )}
      </button>

      {!isFormValid && (
        <p className="mt-4 text-center text-slate-500 text-[10px] font-bold uppercase tracking-wider leading-relaxed">
          {t.form.validationError}
        </p>
      )}
    </div>
  );
};

export default App;