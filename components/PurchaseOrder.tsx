
import React, { useRef } from 'react';
import { CalculatorState, InventorySize, PricingBreakdown, PhotoOption, AdOption } from '../types';
import { Language, translations } from '../translations';

interface PurchaseOrderProps {
  state: CalculatorState;
  pricing: PricingBreakdown;
  lang: Language;
  onBack: () => void;
}

const PurchaseOrder: React.FC<PurchaseOrderProps> = ({ state, pricing, lang, onBack }) => {
  const t = translations[lang];
  const po = t.po;
  const orderDate = new Date().toLocaleDateString(lang === 'de' ? 'de-DE' : lang === 'tr' ? 'tr-TR' : 'en-US');
  const orderNumber = `PB-${Math.floor(100000 + Math.random() * 900000)}`;
  const documentRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (!documentRef.current) return;
    
    const element = documentRef.current;
    const opt = {
      margin: 10,
      filename: `PurchaseOrder_${state.dealershipName.replace(/\s+/g, '_')}_${orderNumber}.pdf`,
      image: { type: 'jpeg', quality: 1.0 },
      html2canvas: { scale: 3, useCORS: true, letterRendering: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    // @ts-ignore
    window.html2pdf().from(element).set(opt).save();
  };

  const inventoryLabel = state.inventorySize === InventorySize.CUSTOM 
    ? `${state.customInventoryCount} vehicles (Custom)` 
    : state.inventorySize;

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4 sm:px-6 lg:px-8 print:bg-white print:p-0">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Navigation / Actions - Hidden on print */}
        <div className="flex justify-between items-center no-print">
          <button 
            onClick={onBack}
            className="flex items-center space-x-2 text-slate-500 hover:text-slate-900 font-bold uppercase text-xs tracking-widest transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            <span>{po.back}</span>
          </button>
          <button 
            onClick={handleDownload}
            className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-black uppercase text-xs tracking-widest hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-95 flex items-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            <span>{po.download}</span>
          </button>
        </div>

        {/* The Document Container - Optimized for A4 */}
        <div 
          ref={documentRef} 
          style={{ width: '190mm', margin: '0 auto' }} 
          className="bg-white shadow-2xl overflow-hidden print:shadow-none print:border-none border border-slate-100"
        >
          {/* Page 1: Order Summary & Pricing */}
          <div className="flex flex-col bg-white">
            <div className="p-12 space-y-12">
              {/* Document ID Row */}
              <div className="flex justify-between items-end border-b-2 border-slate-900 pb-4">
                <div>
                  <h1 className="text-3xl font-black uppercase tracking-tighter text-slate-900">{po.title}</h1>
                  <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest mt-1">Prajjwol Bhattarai — Digital Dealership Solutions</p>
                </div>
                <div className="text-right">
                  <p className="text-slate-900 font-mono text-xs font-bold">ID: {orderNumber}</p>
                  <p className="text-slate-500 font-mono text-xs">{orderDate}</p>
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 border-b pb-1">{po.dealershipInfo}</h4>
                  <div className="space-y-1 text-slate-900 font-bold">
                    <p className="text-lg uppercase leading-tight">{state.dealershipName}</p>
                    <p className="text-xs">{state.contactPerson}</p>
                    <p className="text-xs">{state.email}</p>
                    <p className="text-xs">{state.phone}</p>
                  </div>
                </div>
                <div className="text-right">
                  <h4 className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3 border-b pb-1 text-right">{po.serviceProvider}</h4>
                  <div className="space-y-1 text-slate-900 font-bold">
                    <p className="text-lg uppercase leading-tight">Prajjwol Bhattarai</p>
                    <p className="text-xs">Digital Marketing Operations</p>
                    <p className="text-xs">hello@prajjwol.com</p>
                    <p className="text-xs">Digital Solutions Team</p>
                  </div>
                </div>
              </div>

              {/* Order Items Table */}
              <div className="pt-4">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-slate-900">
                      <th className="py-3 text-[9px] font-black uppercase tracking-widest text-slate-400">{po.description}</th>
                      <th className="py-3 text-[9px] font-black uppercase tracking-widest text-slate-400">{po.configuration}</th>
                      <th className="py-3 text-[9px] font-black uppercase tracking-widest text-slate-400 text-right">{po.feeType}</th>
                      <th className="py-3 text-[9px] font-black uppercase tracking-widest text-slate-400 text-right">{po.amount}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs">
                    <tr>
                      <td className="py-6 pr-4">
                        <p className="font-black text-slate-900 uppercase">Core Platform Setup</p>
                        <p className="text-[10px] text-slate-500 font-medium">Multi-platform distribution setup & sync</p>
                      </td>
                      <td className="py-6 px-4">
                        <span className="text-[9px] font-bold bg-slate-100 px-2 py-1 rounded">{inventoryLabel}</span>
                      </td>
                      <td className="py-6 px-4 text-right text-[9px] font-bold uppercase text-slate-500">{po.oneTime}</td>
                      <td className="py-6 pl-4 text-right font-black">€{pricing.setupFee.toLocaleString()}</td>
                    </tr>
                    <tr>
                      <td className="py-6 pr-4">
                        <p className="font-black text-slate-900 uppercase">Platform Subscription</p>
                        <p className="text-[10px] text-slate-500 font-medium">Monthly management & software access</p>
                      </td>
                      <td className="py-6 px-4">
                        <span className="text-[9px] font-bold bg-indigo-50 text-indigo-600 px-2 py-1 rounded">{state.commitment}</span>
                      </td>
                      <td className="py-6 px-4 text-right text-[9px] font-bold uppercase text-slate-500">{po.monthly}</td>
                      <td className="py-6 pl-4 text-right font-black">€{pricing.baseMonthly.toLocaleString()}</td>
                    </tr>
                    {pricing.commitmentAdjustment !== 0 && (
                      <tr className="bg-slate-50/50">
                        <td className="py-6 pr-4">
                          <p className="font-black text-slate-900 uppercase">Commitment Adjustment</p>
                          <p className="text-[10px] text-slate-500 font-medium">Term-based pricing modification</p>
                        </td>
                        <td className="py-6 px-4"></td>
                        <td className="py-6 px-4 text-right text-[9px] font-bold uppercase text-slate-500">{po.monthly}</td>
                        <td className="py-6 pl-4 text-right font-black text-indigo-600">
                          {pricing.commitmentAdjustment > 0 ? '+' : ''}€{pricing.commitmentAdjustment.toFixed(0)}
                        </td>
                      </tr>
                    )}
                    {pricing.photoFee > 0 && (
                      <tr>
                        <td className="py-6 pr-4">
                          <p className="font-black text-slate-900 uppercase">Photography Package</p>
                          <p className="text-[10px] text-slate-500 font-medium">Professional visuals bundle</p>
                        </td>
                        <td className="py-6 px-4">
                          <span className="text-[9px] font-bold bg-slate-100 px-2 py-1 rounded">{state.photoOption}</span>
                        </td>
                        <td className="py-6 px-4 text-right text-[9px] font-bold uppercase text-slate-500">{po.monthly}</td>
                        <td className="py-6 pl-4 text-right font-black">€{pricing.photoFee.toLocaleString()}</td>
                    </tr>
                    )}
                    {pricing.adFee > 0 && (
                      <tr>
                        <td className="py-6 pr-4">
                          <p className="font-black text-slate-900 uppercase">Performance Ads</p>
                          <p className="text-[10px] text-slate-500 font-medium">Campaign management & creative assets</p>
                        </td>
                        <td className="py-6 px-4">
                          <span className="text-[9px] font-bold bg-slate-100 px-2 py-1 rounded">{state.adOption}</span>
                        </td>
                        <td className="py-6 px-4 text-right text-[9px] font-bold uppercase text-slate-500">{po.monthly}</td>
                        <td className="py-6 pl-4 text-right font-black">€{pricing.adFee.toLocaleString()}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Totals Section */}
              <div className="flex justify-end pt-12">
                <div className="w-80 space-y-4">
                  <div className="flex justify-between items-center px-2">
                    <span className="text-[10px] font-black uppercase text-slate-400">{po.setupNet}</span>
                    <span className="font-black text-lg text-slate-900">€{pricing.totalOneTime.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center bg-slate-900 text-white p-6 rounded-2xl shadow-xl">
                    <div>
                      <span className="block text-[10px] font-black uppercase tracking-widest opacity-60">{po.monthlyNet}</span>
                      <span className="text-3xl font-black">€{pricing.totalMonthly.toLocaleString()}</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-[9px] font-black uppercase">{po.recurring}</span>
                    </div>
                  </div>
                  <p className="text-[9px] text-slate-400 font-bold text-right italic uppercase tracking-wider">{po.excludingVat}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Explicit Page Break for html2pdf */}
          <div className="html2pdf__page-break" style={{ pageBreakBefore: 'always' }}></div>

          {/* Page 2 Content: Deliverables, Signatures & Legal */}
          <div className="flex flex-col bg-white">
            <div className="p-12 space-y-12">
              <h3 className="text-base font-black uppercase tracking-tight text-slate-900 border-b-2 border-slate-900 pb-2 inline-block">
                {po.deliverablesTitle}
              </h3>
              
              <div className="grid grid-cols-2 gap-12">
                {/* Provider Deliverables */}
                <div className="space-y-8">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-600 bg-indigo-50 px-3 py-1.5 rounded inline-block">
                    {po.providerRole}
                  </h4>
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-900 mb-2">Platform & Sync</p>
                      <ul className="space-y-1.5">
                        {po.platformTasks.map((task, i) => (
                          <li key={i} className="text-[10px] text-slate-600 font-bold flex items-start leading-tight">
                            <span className="mr-2 text-indigo-500 mt-0.5">•</span> {task}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {state.photoOption !== PhotoOption.NONE && (
                      <div>
                        <p className="text-[10px] font-black uppercase text-slate-900 mb-2">Photography Bundle</p>
                        <ul className="space-y-1.5">
                          {po.photoTasks.map((task, i) => (
                            <li key={i} className="text-[10px] text-slate-600 font-bold flex items-start leading-tight">
                              <span className="mr-2 text-indigo-500 mt-0.5">•</span> {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {state.adOption !== AdOption.NONE && (
                      <div>
                        <p className="text-[10px] font-black uppercase text-slate-900 mb-2">Ads Management</p>
                        <ul className="space-y-1.5">
                          {po.adsTasks.map((task, i) => (
                            <li key={i} className="text-[10px] text-slate-600 font-bold flex items-start leading-tight">
                              <span className="mr-2 text-indigo-500 mt-0.5">•</span> {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Dealership Responsibilities */}
                <div className="space-y-8">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 bg-slate-100 px-3 py-1.5 rounded inline-block">
                    {po.clientRole}
                  </h4>
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-900 mb-2">Access & Data</p>
                      <ul className="space-y-1.5">
                        {po.clientPlatformTasks.map((task, i) => (
                          <li key={i} className="text-[10px] text-slate-600 font-bold flex items-start leading-tight">
                            <span className="mr-2 text-slate-400 mt-0.5">•</span> {task}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {state.photoOption !== PhotoOption.NONE && (
                      <div>
                        <p className="text-[10px] font-black uppercase text-slate-900 mb-2">On-site Readiness</p>
                        <ul className="space-y-1.5">
                          {po.clientPhotoTasks.map((task, i) => (
                            <li key={i} className="text-[10px] text-slate-600 font-bold flex items-start leading-tight">
                              <span className="mr-2 text-slate-400 mt-0.5">•</span> {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {state.adOption !== AdOption.NONE && (
                      <div>
                        <p className="text-[10px] font-black uppercase text-slate-900 mb-2">Budget & Approval</p>
                        <ul className="space-y-1.5">
                          {po.clientAdsTasks.map((task, i) => (
                            <li key={i} className="text-[10px] text-slate-600 font-bold flex items-start leading-tight">
                              <span className="mr-2 text-slate-400 mt-0.5">•</span> {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Signature Area */}
              <div className="pt-20 grid grid-cols-2 gap-16">
                <div className="space-y-12">
                  <div className="h-16 border-b-2 border-slate-200 relative">
                    <span className="absolute bottom-2 left-0 text-[9px] font-black uppercase text-slate-400 tracking-widest">{po.placeDate}</span>
                  </div>
                  <div className="h-16 border-b-2 border-slate-200 relative">
                    <span className="absolute bottom-2 left-0 text-[9px] font-black uppercase text-slate-400 tracking-widest">{po.sigProvider}</span>
                    <p className="absolute -bottom-8 left-0 text-xs font-black text-slate-900 uppercase">Prajjwol Bhattarai</p>
                  </div>
                </div>
                <div className="space-y-12">
                  <div className="h-16 border-b-2 border-slate-200 relative">
                    <span className="absolute bottom-2 left-0 text-[9px] font-black uppercase text-slate-400 tracking-widest">{po.placeDate}</span>
                  </div>
                  <div className="h-16 border-b-2 border-slate-900 relative">
                    <span className="absolute bottom-2 left-0 text-[9px] font-black uppercase text-slate-400 font-black tracking-widest">{po.sigDealership}</span>
                  </div>
                </div>
              </div>

              {/* Legal & Terms */}
              <div className="pt-16 text-[9px] text-slate-400 font-bold leading-relaxed uppercase tracking-widest space-y-4">
                <p>{po.legal}</p>
                <p>{po.terms}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOrder;
