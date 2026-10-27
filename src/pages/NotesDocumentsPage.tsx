import React, { useState } from 'react';
import { ASSIGNMENT_CATALOGUE, AssignmentItem } from '../data/catalogue';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Eye, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  BookOpen, 
  Flame, 
  ShieldCheck, 
  HelpCircle,
  FileCheck2
} from 'lucide-react';

interface NotesDocumentsPageProps {
  onSelectItem: (item: AssignmentItem) => void;
}

export const NotesDocumentsPage: React.FC<NotesDocumentsPageProps> = ({
  onSelectItem
}) => {
  // Document selector for notes & study documents
  const noteItems = [
    ASSIGNMENT_CATALOGUE.find(i => i.id === 'assign-toxic-metals')!,
    ASSIGNMENT_CATALOGUE.find(i => i.id === 'assign-india-vs-world')!,
    ASSIGNMENT_CATALOGUE.find(i => i.id === 'assign-0')!,
    ASSIGNMENT_CATALOGUE.find(i => i.id === 'assign-hd-magnet-report')!,
    ASSIGNMENT_CATALOGUE.find(i => i.id === 'assign-ahp-ism-research')!,
    ASSIGNMENT_CATALOGUE.find(i => i.id === 'assign-mse2-case-studies-pack')!,
    ASSIGNMENT_CATALOGUE.find(i => i.id === 'assign-green-aiot-paper')!,
  ].filter(Boolean);

  const [selectedNote, setSelectedNote] = useState<AssignmentItem>(noteItems[0]);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.25, 0.6));
  const handleResetZoom = () => setZoomLevel(1);

  const isImage = selectedNote.fileType === 'IMAGE';
  const isPdf = selectedNote.fileType === 'PDF';
  const displayImage = selectedNote.previewThumbnail || (isImage ? selectedNote.publicAssetPath : undefined);

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-emerald-950 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
            Course Notes & Primary Manuscripts
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Notes & Scanned Documents
          </h1>
          <p className="text-sm text-slate-500 dark:text-emerald-400/80 mt-1 max-w-3xl">
            High-fidelity reader preserving original handwritten classroom assignments, roll-number verified notes, and academic research manuscripts in full resolution.
          </p>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40 text-xs font-medium">
          <FileCheck2 className="w-3.5 h-3.5" />
          <span>Authentic Student Submissions</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Document Switcher List (4 cols) */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-emerald-500 px-1">
            Select Document to Inspect ({noteItems.length})
          </h3>

          <div className="space-y-2">
            {noteItems.map(item => {
              const isActive = selectedNote.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setSelectedNote(item);
                    setZoomLevel(1);
                  }}
                  className={`p-4 rounded-xl border cursor-pointer transition-all ${
                    isActive
                      ? 'bg-emerald-50 dark:bg-[#11241d] border-emerald-500 text-slate-900 dark:text-white shadow-sm'
                      : 'bg-white dark:bg-[#0c1814] border-slate-200 dark:border-emerald-950/80 hover:bg-slate-50 dark:hover:bg-[#0f1f19] text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                      {item.fileType}
                    </span>
                    <span className="font-mono text-slate-400 dark:text-emerald-500/70">
                      {item.fileSizeFormatted}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-emerald-400/80 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Active Document Viewer (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          
          <div className="bg-white dark:bg-[#0c1814] rounded-2xl border border-slate-200 dark:border-emerald-950 overflow-hidden shadow-card dark:shadow-card-dark">
            
            {/* Viewer Header */}
            <div className="px-5 py-4 border-b border-slate-200 dark:border-emerald-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50/70 dark:bg-[#08120f]">
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {selectedNote.title}
                </h3>
                <p className="text-xs font-mono text-slate-500 dark:text-emerald-400/80">
                  {selectedNote.originalFilename} • {selectedNote.fileSizeFormatted}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {/* Zoom controls for image views */}
                {displayImage && (
                  <div className="flex items-center gap-1 bg-white dark:bg-[#0c1814] px-2 py-1 rounded-lg border border-slate-200 dark:border-emerald-950 text-xs">
                    <button onClick={handleZoomOut} className="p-1 hover:bg-slate-100 dark:hover:bg-emerald-950/40 rounded">
                      <ZoomOut className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-mono px-1">{Math.round(zoomLevel * 100)}%</span>
                    <button onClick={handleZoomIn} className="p-1 hover:bg-slate-100 dark:hover:bg-emerald-950/40 rounded">
                      <ZoomIn className="w-3.5 h-3.5" />
                    </button>
                    <button onClick={handleResetZoom} className="p-1 hover:bg-slate-100 dark:hover:bg-emerald-950/40 rounded" title="Reset Zoom">
                      <RotateCcw className="w-3 h-3" />
                    </button>
                  </div>
                )}

                <a
                  href={selectedNote.publicAssetPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg border border-slate-200 dark:border-emerald-950 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-emerald-950/40"
                  title="Open in new window"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={selectedNote.publicAssetPath}
                  download={selectedNote.originalFilename}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
              </div>
            </div>

            {/* Viewer Display Area */}
            <div className="p-4 bg-slate-100 dark:bg-[#050c0a] flex items-center justify-center min-h-[500px] max-h-[70vh] overflow-auto">
              {displayImage ? (
                <div className="overflow-auto max-h-[66vh] p-2 flex items-center justify-center">
                  <img
                    src={displayImage}
                    alt={selectedNote.title}
                    style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
                    className="max-w-full rounded-lg shadow-md transition-transform duration-200"
                  />
                </div>
              ) : isPdf ? (
                <iframe
                  src={`${selectedNote.publicAssetPath}#toolbar=1`}
                  className="w-full h-[66vh] rounded-lg border border-slate-200 dark:border-emerald-950"
                  title={selectedNote.title}
                />
              ) : (
                <div className="p-8 text-center max-w-md">
                  <FileText className="w-12 h-12 mx-auto text-emerald-600 dark:text-emerald-400 mb-3" />
                  <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">
                    {selectedNote.originalFilename}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-emerald-300/80 mb-6 leading-relaxed">
                    This {selectedNote.fileType} document contains full academic research. Download the original document to view complete equations and structure.
                  </p>
                  <a
                    href={selectedNote.publicAssetPath}
                    download={selectedNote.originalFilename}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs shadow-md"
                  >
                    <Download className="w-4 h-4" />
                    Download {selectedNote.fileType} ({selectedNote.fileSizeFormatted})
                  </a>
                </div>
              )}
            </div>

            {/* Transcription / Technical Companion Notes */}
            {selectedNote.keyHighlights && selectedNote.keyHighlights.length > 0 && (
              <div className="p-5 border-t border-slate-200 dark:border-emerald-950 bg-white dark:bg-[#0c1814] space-y-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-emerald-500 block">
                  Transcribed Summary & Key Points
                </span>
                <ul className="text-xs space-y-1.5 text-slate-700 dark:text-emerald-200">
                  {selectedNote.keyHighlights.map((hl, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
};
