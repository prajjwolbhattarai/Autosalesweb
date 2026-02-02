
import React from 'react';
import { Language, translations } from '../translations';

const PricingReference: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];
  const labels = t.pricingTables;

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            {t.reference}
          </h2>
          <div className="h-1 w-16 bg-indigo-600 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TableCard title={labels.platform} icon="📦">
            <Row label="1–15 vehicles" value={`€300${labels.unitMo}`} />
            <Row label="16–30 vehicles" value={`€400${labels.unitMo}`} />
            <Row label="31–60 vehicles" value={`€700${labels.unitMo}`} />
            <Row label="61–100 vehicles" value={`€1,000${labels.unitMo}`} />
          </TableCard>
          
          <TableCard title={labels.setup} icon="⚡">
            <Row label="Up to 30 vehicles" value="€700" />
            <Row label="31–80 vehicles" value="€1,000" />
            <Row label="80+ vehicles" value="€2,000" />
          </TableCard>

          <TableCard title={labels.photo} icon="📸">
            <Row label={`Per vehicle (${labels.unitOneTime})`} value="€40" />
            <Row label={`Up to 10 cars ${labels.unitMo}`} value="€250" />
            <Row label={`Up to 25 cars ${labels.unitMo}`} value="€500" />
          </TableCard>

          <TableCard title={labels.ads} icon="🚀">
            <Row label="Basic Tier" value={`€300${labels.unitMo}`} />
            <Row label="Standard Tier" value={`€700${labels.unitMo}`} />
            <Row label="Advanced Tier" value={`€1,000${labels.unitMo}`} />
          </TableCard>
        </div>
        
        <div className="mt-16 p-8 bg-slate-50 rounded-[2rem] border border-slate-100 text-center">
          <p className="text-slate-500 text-sm font-bold max-w-2xl mx-auto">
            All prices are net and subject to 19% VAT where applicable. 
            Commitment discounts are applied to the "Base Platform" monthly fee during calculation.
          </p>
        </div>
      </div>
    </section>
  );
};

const TableCard: React.FC<{ title: string, icon: string, children: React.ReactNode }> = ({ title, icon, children }) => (
  <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:border-indigo-100 transition-all hover:shadow-xl hover:shadow-indigo-500/5 group flex flex-col h-full">
    <div className="flex items-center space-x-4 mb-8">
      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-black text-slate-900 text-sm uppercase tracking-[0.2em]">{title}</h3>
    </div>
    <div className="space-y-1 mt-auto">{children}</div>
  </div>
);

const Row: React.FC<{ label: string, value: string }> = ({ label, value }) => (
  <div className="flex justify-between items-center py-4 border-b border-slate-50 last:border-0">
    <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{label}</span>
    <span className="text-slate-900 font-black tracking-tight">{value}</span>
  </div>
);

export default PricingReference;
