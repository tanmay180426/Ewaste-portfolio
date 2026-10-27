import React from 'react';
import { ASSIGNMENT_CATALOGUE } from '../data/catalogue';
import { 
  Calculator, 
  ExternalLink, 
  Download, 
  ShieldCheck, 
  FileCheck2,
  Cpu,
  Info
} from 'lucide-react';

export const InteractiveToolsPage: React.FC = () => {
  const eprTool = ASSIGNMENT_CATALOGUE.find(i => i.id === 'assign-epr-calculator');

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-emerald-950 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
            Regulatory Compliance Software
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            E-Waste EPR Registration & Target Calculator
          </h1>
          <p className="text-sm text-slate-500 dark:text-emerald-400/80 mt-1 max-w-3xl">
            An interactive statutory calculation suite implementing the Central Pollution Control Board (CPCB) E-Waste (Management) Rules 2022 Extended Producer Responsibility targets.
          </p>
        </div>

        {eprTool && (
          <div className="flex items-center gap-2">
            <a
              href={eprTool.publicAssetPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-emerald-950 text-xs font-medium text-slate-700 dark:text-emerald-300 hover:bg-slate-50 dark:hover:bg-[#10221c] transition-colors"
            >
              <span>Fullscreen App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={eprTool.publicAssetPath}
              download={eprTool.originalFilename}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download HTML</span>
            </a>
          </div>
        )}
      </div>

      {/* Information Banner */}
      <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 flex items-start gap-3 text-xs text-emerald-900 dark:text-emerald-200">
        <Info className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-bold block">Statutory EPR Framework (Schedule I):</span>
          <p className="leading-relaxed">
            The E-Waste Rules 2022 mandate registered electronics producers to achieve graduated annual collection and recycling targets (ranging from 60% in FY2023-24 to 80% by FY2027-28) based on historical sales volumes and average product lifespans. This live tool models liability calculations across equipment tiers.
          </p>
        </div>
      </div>

      {/* Live Embedded Calculator App */}
      <div className="w-full bg-white dark:bg-[#0c1814] rounded-2xl border border-slate-200 dark:border-emerald-950 shadow-2xl overflow-hidden min-h-[640px]">
        <iframe
          src="/tools/ewaste-epr-calculator.html"
          title="CPCB E-Waste EPR Target Calculator"
          className="w-full h-[720px] border-0"
        />
      </div>

    </div>
  );
};
