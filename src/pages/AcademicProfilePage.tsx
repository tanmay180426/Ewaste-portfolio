import React from 'react';
import { 
  STUDENT_PROFILE, 
  ASSIGNMENT_CATALOGUE 
} from '../data/catalogue';
import { 
  GraduationCap, 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Layers, 
  FolderCheck, 
  ExternalLink,
  Award,
  BookOpen
} from 'lucide-react';

export const AcademicProfilePage: React.FC = () => {
  return (
    <div className="space-y-10 animate-fadeIn">
      
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-emerald-950 pb-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
          Institutional Credentials & Verification
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          Student Academic Profile
        </h1>
        <p className="text-sm text-slate-500 dark:text-emerald-400/80 mt-1 max-w-3xl">
          Official academic records, autonomous course framework, and verified asset registry for Tanmay Lalge.
        </p>
      </div>

      {/* Primary Identity Card */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-white via-slate-50 to-emerald-50/50 dark:from-[#0c1814] dark:via-[#091511] dark:to-[#052e16]/30 border border-slate-200 dark:border-emerald-900/40 shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-forest-800 flex items-center justify-center text-white shadow-lg text-2xl font-black">
              TL
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                {STUDENT_PROFILE.name}
              </h2>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300/40">
                  Roll No: {STUDENT_PROFILE.rollNumber}
                </span>
                <span className="text-xs text-slate-500 dark:text-emerald-400 font-medium">
                  {STUDENT_PROFILE.department}
                </span>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/40 text-emerald-800 dark:text-emerald-300 text-xs font-semibold self-start sm:self-center">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Autonomous Course Portfolio</span>
          </div>
        </div>

        {/* Institutional Attributes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/80 dark:bg-[#07110e]/80 border border-slate-200/80 dark:border-emerald-950 text-xs">
          <div>
            <span className="text-slate-400 dark:text-emerald-500 block mb-0.5 font-medium">Institution</span>
            <span className="font-bold text-slate-800 dark:text-white text-sm block">
              {STUDENT_PROFILE.college}
            </span>
          </div>
          <div>
            <span className="text-slate-400 dark:text-emerald-500 block mb-0.5 font-medium">Department</span>
            <span className="font-bold text-slate-800 dark:text-white text-sm block">
              {STUDENT_PROFILE.department}
            </span>
          </div>
          <div>
            <span className="text-slate-400 dark:text-emerald-500 block mb-0.5 font-medium">Course Title</span>
            <span className="font-bold text-slate-800 dark:text-white text-sm block">
              {STUDENT_PROFILE.course}
            </span>
          </div>
          <div>
            <span className="text-slate-400 dark:text-emerald-500 block mb-0.5 font-medium">Curriculum Bucket</span>
            <span className="font-bold text-slate-800 dark:text-white text-sm block">
              HSSM (2 Autonomous Credits)
            </span>
          </div>
        </div>

        {/* Portfolio Tagline Banner */}
        <div className="p-4 rounded-xl bg-emerald-600/10 dark:bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-800 dark:text-emerald-300 font-medium">
          <span className="font-bold uppercase tracking-wider text-[11px] block mb-0.5 text-emerald-700 dark:text-emerald-400">
            Portfolio Mission Statement
          </span>
          "{STUDENT_PROFILE.tagline}" — Building a rigorous, empirical, and publicly verifiable academic record spanning sub-national field data analytics, industrial metallurgical flows, and digital Extended Producer Responsibility modeling.
        </div>
      </div>

      {/* Academic Framework & Course Details (from Assignment 0) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="p-6 rounded-2xl bg-white dark:bg-[#0c1814] border border-slate-200 dark:border-emerald-950 shadow-card dark:shadow-card-dark space-y-4">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
            <BookOpen className="w-5 h-5" />
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Curriculum & Credit Architecture
            </h3>
          </div>
          <ul className="text-xs space-y-2 text-slate-600 dark:text-emerald-300/80 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">•</span>
              <span><strong>Autonomous Bucket:</strong> Human Sciences, Social Sciences & Management (HSSM)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">•</span>
              <span><strong>Total Credits:</strong> 02 autonomous credits earned through continuous assessment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">•</span>
              <span><strong>Evaluation Metric:</strong> 75 marks In-Semester Assessment (ISA) continuous evaluation scheme</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">•</span>
              <span><strong>Key Pillars:</strong> E-waste toxicology, recycling thermodynamics, Extended Producer Responsibility, and Himalayan sub-national field audits</span>
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-[#0c1814] border border-slate-200 dark:border-emerald-950 shadow-card dark:shadow-card-dark space-y-4">
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
            <Award className="w-5 h-5" />
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Portfolio Integrity & Faculty Access
            </h3>
          </div>
          <ul className="text-xs space-y-2 text-slate-600 dark:text-emerald-300/80 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">•</span>
              <span><strong>Single Public URL:</strong> Hosted on high-performance static infrastructure with zero authentication walls</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">•</span>
              <span><strong>Authentic Files:</strong> Every entry links directly to the real document uploaded by the student</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">•</span>
              <span><strong>No Fabrications:</strong> Strictly adheres to provided sources without inventing fictitious dates or faculty data</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-500 font-bold">•</span>
              <span><strong>Instant Download:</strong> Faculty can download original PDFs, spreadsheets, and Word documents in one click</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Verified Workspace Asset Manifest Table */}
      <div className="p-6 rounded-2xl bg-white dark:bg-[#0c1814] border border-slate-200 dark:border-emerald-950 shadow-card dark:shadow-card-dark space-y-4">
        <div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-white">
            Workspace File Verification Manifest (22 Assets)
          </h3>
          <p className="text-xs text-slate-500 dark:text-emerald-400">
            Inventory of every assignment file present in the student's project workspace, indexed with public relative paths.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-[#08120f] border-b border-slate-200 dark:border-emerald-950 text-slate-500 dark:text-emerald-400 uppercase font-semibold">
              <tr>
                <th className="py-3 px-3">#</th>
                <th className="py-3 px-3">Original Filename</th>
                <th className="py-3 px-3">Academic Category</th>
                <th className="py-3 px-3">Format</th>
                <th className="py-3 px-3">File Size</th>
                <th className="py-3 px-3">Public Bundle Path</th>
                <th className="py-3 px-3">Verification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-emerald-950/60 font-mono text-[11px]">
              {ASSIGNMENT_CATALOGUE.map((item, idx) => (
                <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-[#10221c]/40">
                  <td className="py-2.5 px-3 font-sans text-slate-400">
                    {idx + 1}
                  </td>
                  <td className="py-2.5 px-3 font-bold text-slate-800 dark:text-white truncate max-w-xs font-sans">
                    {item.originalFilename}
                  </td>
                  <td className="py-2.5 px-3 font-sans text-slate-600 dark:text-emerald-300 truncate max-w-[200px]">
                    {item.category}
                  </td>
                  <td className="py-2.5 px-3">
                    <span className="px-1.5 py-0.5 rounded font-bold bg-slate-100 dark:bg-emerald-950 text-slate-700 dark:text-emerald-300">
                      {item.fileType}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-slate-500 dark:text-emerald-400/80 whitespace-nowrap">
                    {item.fileSizeFormatted}
                  </td>
                  <td className="py-2.5 px-3 text-emerald-700 dark:text-emerald-400 truncate max-w-[180px]">
                    {item.publicAssetPath}
                  </td>
                  <td className="py-2.5 px-3 font-sans">
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Bundled
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
