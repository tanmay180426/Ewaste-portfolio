import React from 'react';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Recycle, 
  GraduationCap, 
  ShieldCheck
} from 'lucide-react';
import { PageView } from '../types';
import { STUDENT_PROFILE } from '../data/catalogue';

interface NavbarProps {
  currentPage: PageView;
  setCurrentPage: (page: PageView) => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  totalIndexedFiles: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  isDark,
  setIsDark,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  totalIndexedFiles
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-[#07110e]/90 backdrop-blur-md border-b border-slate-200 dark:border-emerald-950/60 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Student Identity */}
          <div 
            onClick={() => setCurrentPage('overview')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-forest-800 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
              <Recycle className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white">
                  {STUDENT_PROFILE.name}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-300/40">
                  <ShieldCheck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                  {STUDENT_PROFILE.rollNumber}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-emerald-400/80 font-medium truncate max-w-[220px] sm:max-w-none">
                {STUDENT_PROFILE.course} • {STUDENT_PROFILE.college}
              </p>
            </div>
          </div>

          {/* Center Navigation Shortcuts (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'assignments', label: 'Assignments' },
              { id: 'posters', label: 'Posters & Comics' },
              { id: 'research', label: 'Research & Data' },
              { id: 'notes', label: 'Notes & Scans' },
              { id: 'tools', label: 'EPR Calculator' },
              { id: 'profile', label: 'Academic Profile' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setCurrentPage(tab.id as PageView)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  currentPage === tab.id
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-emerald-300 dark:hover:bg-emerald-950/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Verified badge */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/40 text-emerald-700 dark:text-emerald-300 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{totalIndexedFiles} Files Indexed</span>
            </div>

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-emerald-950/50 transition-colors"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-emerald-950/50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-4 space-y-1 bg-white dark:bg-[#091410] border-b border-slate-200 dark:border-emerald-950/60 shadow-xl">
          <div className="px-3 py-2 mb-2 bg-emerald-50 dark:bg-emerald-950/40 rounded-lg flex items-center justify-between text-xs font-medium text-emerald-800 dark:text-emerald-300">
            <span>Roll No: {STUDENT_PROFILE.rollNumber}</span>
            <span>VIT Mumbai</span>
          </div>

          {[
            { id: 'overview', label: 'Portfolio Overview' },
            { id: 'assignments', label: 'Complete Assignment Library' },
            { id: 'posters', label: 'Posters & Infographics Gallery' },
            { id: 'research', label: 'Research & Data Analysis' },
            { id: 'notes', label: 'Notes & Scanned Documents' },
            { id: 'tools', label: 'Interactive EPR Calculator' },
            { id: 'profile', label: 'Student Academic Profile' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                setCurrentPage(tab.id as PageView);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                currentPage === tab.id
                  ? 'bg-emerald-600 text-white font-semibold'
                  : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-emerald-950/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
