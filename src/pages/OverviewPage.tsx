import React from 'react';
import { 
  ASSIGNMENT_CATALOGUE, 
  STUDENT_PROFILE, 
  AssignmentItem,
  CATEGORIES 
} from '../data/catalogue';
import { PageView } from '../types';
import { 
  FileText, 
  Image as ImageIcon, 
  BarChart3, 
  FileSpreadsheet, 
  ArrowRight, 
  GraduationCap, 
  ShieldCheck, 
  ExternalLink, 
  Eye, 
  Download,
  Flame,
  Atom,
  Building2,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';

interface OverviewPageProps {
  setCurrentPage: (page: PageView) => void;
  onSelectItem: (item: AssignmentItem) => void;
}

export const OverviewPage: React.FC<OverviewPageProps> = ({
  setCurrentPage,
  onSelectItem
}) => {
  // Dynamically calculate metrics from the actual indexed files
  const totalDocuments = ASSIGNMENT_CATALOGUE.length; // 22
  const totalVisualAssets = ASSIGNMENT_CATALOGUE.filter(i => i.fileType === 'IMAGE' || i.previewThumbnail).length;
  const totalDatasets = ASSIGNMENT_CATALOGUE.filter(i => i.fileType === 'XLSX').length;
  const totalPdfs = ASSIGNMENT_CATALOGUE.filter(i => i.fileType === 'PDF').length;
  const totalReportsAndDecks = ASSIGNMENT_CATALOGUE.filter(i => ['DOCX', 'PPTX'].includes(i.fileType)).length;

  // Categories represented
  const distinctCategories = Array.from(new Set(ASSIGNMENT_CATALOGUE.map(i => i.category)));

  // Featured assignments
  const featuredAssignments = ASSIGNMENT_CATALOGUE.filter(i => i.featured);

  return (
    <div className="space-y-12 animate-fadeIn">
      
      {/* Hero Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-900 via-forest-900 to-[#07130e] text-white p-6 sm:p-10 lg:p-12 shadow-2xl border border-emerald-800/40">
        <div className="absolute inset-0 bg-radial-gradient opacity-60 pointer-events-none" />
        
        {/* Subtle decorative circles */}
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-limeaccent-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
            <GraduationCap className="w-4 h-4 text-emerald-400" />
            <span>Academic Portfolio • {STUDENT_PROFILE.course}</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Welcome to <span className="text-gradient-emerald">{STUDENT_PROFILE.name}'s</span> E-Waste Portfolio
            </h1>
            <p className="text-base sm:text-lg text-emerald-200/90 font-medium">
              {STUDENT_PROFILE.tagline}
            </p>
          </div>

          {/* Student Profile Card Badge */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 py-3 border-y border-emerald-800/40 text-xs">
            <div>
              <span className="text-emerald-400 block font-medium">Student Name</span>
              <span className="font-semibold text-white text-sm">{STUDENT_PROFILE.name}</span>
            </div>
            <div>
              <span className="text-emerald-400 block font-medium">Roll Number</span>
              <span className="font-mono font-semibold text-white text-sm">{STUDENT_PROFILE.rollNumber}</span>
            </div>
            <div>
              <span className="text-emerald-400 block font-medium">Institution</span>
              <span className="font-semibold text-white truncate block">{STUDENT_PROFILE.college}</span>
            </div>
            <div>
              <span className="text-emerald-400 block font-medium">Department</span>
              <span className="font-semibold text-white">{STUDENT_PROFILE.department}</span>
            </div>
          </div>

          <p className="text-sm text-emerald-100/80 leading-relaxed max-w-3xl">
            {STUDENT_PROFILE.overviewBio}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => setCurrentPage('assignments')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-charcoal-950 font-bold text-sm shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02]"
            >
              <FileText className="w-4 h-4" />
              <span>Browse All Assignments</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={() => setCurrentPage('research')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm backdrop-blur-md border border-white/15 transition-all"
            >
              <BarChart3 className="w-4 h-4 text-emerald-300" />
              <span>Explore Sikkim Field Data</span>
            </button>

            <button
              onClick={() => setCurrentPage('posters')}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm backdrop-blur-md border border-white/15 transition-all"
            >
              <ImageIcon className="w-4 h-4 text-limeaccent-400" />
              <span>View Posters & Comics</span>
            </button>
          </div>

        </div>
      </section>

      {/* Dynamic Statistics Bar (Calculated from Actual Catalogued Files) */}
      <section className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {[
          {
            label: "Total Documents",
            value: totalDocuments,
            subtext: "22 Verified Files",
            icon: <Layers className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
            color: "emerald"
          },
          {
            label: "Curated Categories",
            value: distinctCategories.length,
            subtext: "Academic Modules",
            icon: <Sparkles className="w-5 h-5 text-teal-600 dark:text-teal-400" />,
            color: "teal"
          },
          {
            label: "Visual Assets & Posters",
            value: totalVisualAssets,
            subtext: "High-Res Diagrams & Scans",
            icon: <ImageIcon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
            color: "indigo"
          },
          {
            label: "Research Datasets",
            value: totalDatasets,
            subtext: "Sikkim, Carbon & LEED Models",
            icon: <FileSpreadsheet className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
            color: "amber"
          },
          {
            label: "Reports & Presentations",
            value: totalPdfs + totalReportsAndDecks,
            subtext: "PDFs, DOCX & PPTX Packs",
            icon: <FileText className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
            color: "rose"
          }
        ].map((stat, idx) => (
          <div 
            key={idx}
            className="p-5 rounded-2xl bg-white dark:bg-[#0c1814] border border-slate-200 dark:border-emerald-950 shadow-card dark:shadow-card-dark flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-slate-500 dark:text-emerald-400 uppercase tracking-wider">
                {stat.label}
              </span>
              <div className="p-2 rounded-xl bg-slate-50 dark:bg-emerald-950/40">
                {stat.icon}
              </div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white">
                {stat.value}
              </div>
              <p className="text-xs text-slate-500 dark:text-emerald-400/80 mt-1 font-medium">
                {stat.subtext}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Quick Navigation Cards */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Portfolio Explorer
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-emerald-400">
              Direct access to all major course segments and student submissions
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Card 1: Sikkim Sub-National Assessment */}
          <div 
            onClick={() => setCurrentPage('research')}
            className="group cursor-pointer p-6 rounded-2xl bg-white dark:bg-[#0c1814] border border-slate-200 dark:border-emerald-950 hover:border-emerald-500/50 shadow-card dark:shadow-card-dark transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              Sikkim Sub-National Research
            </h3>
            <p className="text-xs text-slate-600 dark:text-emerald-300/80 leading-relaxed mb-4">
              Detailed FY2026 assessment of Sikkim's 6 districts: 310.5 tonnes generated vs 18.2 tonnes collected (5.86% capture rate), SPCB soil diagnostics, and 100-point state scorecard.
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              Explore Interactive Charts <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>

          {/* Card 2: Rare Earth Recovery */}
          <div 
            onClick={() => setCurrentPage('posters')}
            className="group cursor-pointer p-6 rounded-2xl bg-white dark:bg-[#0c1814] border border-slate-200 dark:border-emerald-950 hover:border-emerald-500/50 shadow-card dark:shadow-card-dark transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Atom className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              Hydrogen Decrepitation Process
            </h3>
            <p className="text-xs text-slate-600 dark:text-emerald-300/80 leading-relaxed mb-4">
              Comprehensive 7-stage chemical engineering flow chart for recovering critical rare-earth elements (Nd, Dy, Pr) from discarded NdFeB magnets in hard drives and EV motors.
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-teal-600 dark:text-teal-400">
              Inspect Technical Diagram <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>

          {/* Card 3: Toxic Chemicals & Notes */}
          <div 
            onClick={() => setCurrentPage('notes')}
            className="group cursor-pointer p-6 rounded-2xl bg-white dark:bg-[#0c1814] border border-slate-200 dark:border-emerald-950 hover:border-emerald-500/50 shadow-card dark:shadow-card-dark transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              Handwritten Notes & Scans
            </h3>
            <p className="text-xs text-slate-600 dark:text-emerald-300/80 leading-relaxed mb-4">
              Original handwritten submissions by Tanmay Lalge detailing Lead, Chromium, Arsenic, Cadmium, and Mercury with WHO drinking water limits and health hazards.
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 dark:text-amber-400">
              View Handwritten Scans <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>

        </div>
      </section>

      {/* Featured Submissions Showcase */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Key Featured Deliverables
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-emerald-400">
              Highlighted academic works verified and ready for faculty evaluation
            </p>
          </div>
          <button
            onClick={() => setCurrentPage('assignments')}
            className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
          >
            <span>View All ({totalDocuments})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredAssignments.slice(0, 6).map((item) => (
            <div 
              key={item.id}
              className="flex flex-col bg-white dark:bg-[#0c1814] rounded-2xl border border-slate-200 dark:border-emerald-950 overflow-hidden shadow-card dark:shadow-card-dark hover:border-emerald-500/40 transition-all hover:-translate-y-1"
            >
              {/* Thumbnail preview if exists */}
              {item.previewThumbnail ? (
                <div 
                  onClick={() => onSelectItem(item)}
                  className="h-44 w-full bg-slate-100 dark:bg-[#07110e] overflow-hidden relative cursor-pointer group"
                >
                  <img
                    src={item.previewThumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-charcoal-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
                    <span className="p-2 rounded-full bg-emerald-600">
                      <Eye className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-semibold">Inspect Document</span>
                  </div>
                  <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded bg-charcoal-900/80 backdrop-blur-md text-white uppercase tracking-wider">
                    {item.fileType}
                  </span>
                </div>
              ) : (
                <div 
                  onClick={() => onSelectItem(item)}
                  className="h-32 w-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-emerald-950/30 dark:to-charcoal-900 flex items-center justify-center cursor-pointer group p-4"
                >
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto rounded-xl bg-white dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-1 shadow-sm">
                      <FileText className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-medium text-slate-500 dark:text-emerald-300">
                      {item.originalFilename}
                    </span>
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 truncate max-w-[200px]">
                      {item.category}
                    </span>
                    <span className="font-mono text-slate-400 dark:text-emerald-500/70">
                      {item.fileSizeFormatted}
                    </span>
                  </div>

                  <h3 
                    onClick={() => onSelectItem(item)}
                    className="font-bold text-slate-900 dark:text-white text-base hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer line-clamp-2"
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-emerald-300/80 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-2 border-t border-slate-100 dark:border-emerald-950/60 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectItem(item)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/50 dark:hover:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 text-xs font-semibold transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  <a
                    href={item.publicAssetPath}
                    download={item.originalFilename}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-emerald-300 hover:bg-slate-100 dark:hover:bg-emerald-950/40 transition-colors"
                    title="Download Original File"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Category Overview Matrix */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#0c1814] border border-slate-200 dark:border-emerald-950 shadow-card dark:shadow-card-dark space-y-4">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Course Curriculum Modules Breakdown
          </h2>
          <p className="text-xs text-slate-500 dark:text-emerald-400">
            All 9 academic categories with corresponding indexed source documents
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {CATEGORIES.filter(c => c !== "All Categories").map((cat, idx) => {
            const count = ASSIGNMENT_CATALOGUE.filter(i => i.category === cat).length;
            return (
              <div 
                key={idx}
                onClick={() => setCurrentPage('assignments')}
                className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#08120f] border border-slate-200 dark:border-emerald-950/80 hover:border-emerald-500/50 cursor-pointer transition-all flex items-center justify-between group"
              >
                <div className="min-w-0 pr-3">
                  <span className="text-xs font-semibold text-slate-800 dark:text-emerald-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 truncate block">
                    {cat}
                  </span>
                  <span className="text-[11px] text-slate-400 dark:text-emerald-500/70">
                    Category {idx + 1}
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                  {count} {count === 1 ? 'file' : 'files'}
                </span>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
