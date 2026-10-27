import React from 'react';
import { STUDENT_PROFILE } from '../data/catalogue';
import { PageView } from '../types';
import { Leaf, GraduationCap, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-emerald-950/60 bg-white/70 dark:bg-[#07110e]/70 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white">
                <Leaf className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-slate-900 dark:text-white text-base">
                {STUDENT_PROFILE.websiteTitle}
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-emerald-400/80 leading-relaxed max-w-md">
              {STUDENT_PROFILE.tagline} A standalone, public academic portfolio documenting assignments, research, datasets, and environmental models for the autonomous E-Waste Management course.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-500 dark:text-emerald-400">
              <span className="flex items-center gap-1 font-mono">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-600" />
                Roll: {STUDENT_PROFILE.rollNumber}
              </span>
              <span>•</span>
              <span>{STUDENT_PROFILE.department}</span>
              <span>•</span>
              <span>{STUDENT_PROFILE.college}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-emerald-500">
              Portfolio Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              {[
                { id: 'overview', label: 'Portfolio Overview' },
                { id: 'assignments', label: 'Complete Library' },
                { id: 'posters', label: 'Posters & Comics' },
                { id: 'research', label: 'Sikkim Research Data' },
                { id: 'notes', label: 'Notes & Handwritten Scans' },
                { id: 'tools', label: 'EPR Target Calculator' },
                { id: 'profile', label: 'Academic Profile' },
              ].map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      setCurrentPage(link.id as PageView);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Academic Verification */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-emerald-500">
              Faculty Access Note
            </h4>
            <p className="text-xs text-slate-600 dark:text-emerald-300/80 leading-relaxed">
              Publicly accessible evaluation repository. No credentials or login required. All 22 bundled assignments, PDFs, spreadsheets, and diagrams are locally indexed for fast evaluation.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/40 text-emerald-800 dark:text-emerald-300 text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Autonomous Evaluation Ready</span>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-emerald-950/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-emerald-400/60">
          <p>© {new Date().getFullYear()} {STUDENT_PROFILE.name} ({STUDENT_PROFILE.rollNumber}). Vidyalankar Institute of Technology, Mumbai.</p>
          <p className="flex items-center gap-1">
            Built for E-Waste Course Evaluation • Department of Computer Engineering
          </p>
        </div>
      </div>
    </footer>
  );
};
