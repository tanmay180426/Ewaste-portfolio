import React, { useState } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  FileText, 
  FileSpreadsheet, 
  Presentation, 
  FileCheck,
  CheckCircle2,
  Tag
} from 'lucide-react';
import { AssignmentItem } from '../data/catalogue';

interface DocumentViewerModalProps {
  item: AssignmentItem | null;
  onClose: () => void;
}

export const DocumentViewerModal: React.FC<DocumentViewerModalProps> = ({ item, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);

  if (!item) return null;

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  const handleResetZoom = () => setZoomLevel(1);

  const isImage = item.fileType === 'IMAGE';
  const isPdf = item.fileType === 'PDF';
  const isHtml = item.fileType === 'HTML';
  const isOffice = ['DOCX', 'XLSX', 'PPTX'].includes(item.fileType);

  // Determine display asset:
  const displayImage = item.previewThumbnail || (isImage ? item.publicAssetPath : undefined);
  const slideList = item.allPreviews || (displayImage ? [displayImage] : []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-charcoal-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-6xl max-h-[92vh] flex flex-col bg-white dark:bg-[#0c1814] rounded-2xl border border-slate-200 dark:border-emerald-900/40 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-emerald-900/30 bg-slate-50/80 dark:bg-emerald-950/20">
          <div className="flex items-center gap-3 min-w-0 pr-4">
            <span className={`px-2.5 py-1 text-xs font-semibold rounded-md uppercase tracking-wider ${
              item.fileType === 'PDF' ? 'bg-red-100 text-red-800 dark:bg-red-950/50 dark:text-red-300' :
              item.fileType === 'IMAGE' ? 'bg-blue-100 text-blue-800 dark:bg-blue-950/50 dark:text-blue-300' :
              item.fileType === 'XLSX' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300' :
              item.fileType === 'DOCX' ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-300' :
              item.fileType === 'PPTX' ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/50 dark:text-amber-300' :
              'bg-teal-100 text-teal-800 dark:bg-teal-950/50 dark:text-teal-300'
            }`}>
              {item.fileType}
            </span>
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white truncate">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-emerald-400/70 truncate">
                File: {item.originalFilename} • {item.fileSizeFormatted}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={item.publicAssetPath}
              download={item.originalFilename}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors shadow-sm"
              title="Download Original File"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>

            <a
              href={item.publicAssetPath}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-emerald-300 rounded-lg hover:bg-slate-100 dark:hover:bg-emerald-950/40 transition-colors"
              title="Open in New Tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-red-400 rounded-lg hover:bg-slate-100 dark:hover:bg-emerald-950/40 transition-colors"
              title="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Viewer Area */}
        <div className="flex-1 overflow-auto bg-slate-100/70 dark:bg-[#070e0c] relative flex flex-col items-center justify-center min-h-[420px] max-h-[68vh] p-4">
          
          {/* Multi-Slide Selector for decks */}
          {slideList.length > 1 && (
            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 bg-white/90 dark:bg-charcoal-900/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md border border-slate-200 dark:border-emerald-800/40">
              <span className="text-xs font-semibold mr-1.5 text-slate-700 dark:text-emerald-300">
                Slide:
              </span>
              {slideList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlideIndex(idx)}
                  className={`w-6 h-6 rounded-full text-xs font-medium transition-all ${
                    activeSlideIndex === idx
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-emerald-950/50'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          )}

          {/* Zoom controls for Image or Image Previews */}
          {(isImage || item.previewThumbnail) && (
            <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1 bg-white/90 dark:bg-charcoal-900/90 backdrop-blur-md px-2 py-1.5 rounded-lg shadow-md border border-slate-200 dark:border-emerald-800/40">
              <button 
                onClick={handleZoomOut} 
                className="p-1 hover:bg-slate-100 dark:hover:bg-emerald-950/40 text-slate-700 dark:text-emerald-300 rounded" 
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono px-1.5 text-slate-600 dark:text-emerald-400">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button 
                onClick={handleZoomIn} 
                className="p-1 hover:bg-slate-100 dark:hover:bg-emerald-950/40 text-slate-700 dark:text-emerald-300 rounded" 
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button 
                onClick={handleResetZoom} 
                className="p-1 hover:bg-slate-100 dark:hover:bg-emerald-950/40 text-slate-700 dark:text-emerald-300 rounded ml-1" 
                title="Reset Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Render based on file type */}
          {isImage ? (
            <div className="w-full h-full flex items-center justify-center overflow-auto p-2">
              <img
                src={item.publicAssetPath}
                alt={item.title}
                style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
                className="max-h-[62vh] max-w-full object-contain rounded-lg shadow-md transition-transform duration-200"
              />
            </div>
          ) : isPdf ? (
            item.previewThumbnail ? (
              <div className="w-full h-full flex flex-col items-center justify-center p-2">
                <div className="w-full h-full flex items-center justify-center overflow-auto">
                  <img
                    src={slideList[activeSlideIndex] || item.previewThumbnail}
                    alt={item.title}
                    style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
                    className="max-h-[58vh] max-w-full object-contain rounded-lg shadow-md transition-transform duration-200"
                  />
                </div>
                <div className="mt-2 text-xs text-slate-500 dark:text-emerald-400 flex items-center gap-2">
                  <span>High-resolution visual preview.</span>
                  <a 
                    href={item.publicAssetPath} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="underline text-emerald-600 dark:text-emerald-400 hover:text-emerald-700"
                  >
                    Open original multi-page PDF in browser viewer
                  </a>
                </div>
              </div>
            ) : (
              <iframe
                src={`${item.publicAssetPath}#toolbar=1`}
                className="w-full h-[62vh] rounded-lg border border-slate-200 dark:border-emerald-950"
                title={item.title}
              />
            )
          ) : isHtml ? (
            <iframe
              src={item.publicAssetPath}
              className="w-full h-[62vh] rounded-lg border border-slate-200 dark:border-emerald-950 bg-white"
              title={item.title}
            />
          ) : isOffice ? (
            <div className="max-w-xl w-full p-8 bg-white dark:bg-[#10201a] rounded-xl border border-slate-200 dark:border-emerald-800/40 shadow-lg text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40">
                {item.fileType === 'XLSX' ? <FileSpreadsheet className="w-8 h-8" /> :
                 item.fileType === 'PPTX' ? <Presentation className="w-8 h-8" /> :
                 <FileText className="w-8 h-8" />}
              </div>

              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-slate-600 dark:text-emerald-300/80 mb-6 leading-relaxed">
                {item.description}
              </p>

              <div className="grid grid-cols-2 gap-3 text-left p-4 bg-slate-50 dark:bg-[#091410] rounded-lg border border-slate-200 dark:border-emerald-900/30 text-xs mb-6">
                <div>
                  <span className="text-slate-400 dark:text-emerald-500 block mb-0.5 font-medium">Original Filename</span>
                  <span className="font-mono text-slate-800 dark:text-emerald-200 break-all">{item.originalFilename}</span>
                </div>
                <div>
                  <span className="text-slate-400 dark:text-emerald-500 block mb-0.5 font-medium">Verified File Size</span>
                  <span className="font-mono text-slate-800 dark:text-emerald-200">{item.fileSizeFormatted}</span>
                </div>
                <div>
                  <span className="text-slate-400 dark:text-emerald-500 block mb-0.5 font-medium">Document Format</span>
                  <span className="text-slate-800 dark:text-emerald-200 font-semibold">{item.fileType} Document</span>
                </div>
                <div>
                  <span className="text-slate-400 dark:text-emerald-500 block mb-0.5 font-medium">Verification Status</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified Bundle
                  </span>
                </div>
              </div>

              <a
                href={item.publicAssetPath}
                download={item.originalFilename}
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl transition-colors shadow-md text-sm"
              >
                <Download className="w-4 h-4" />
                Download Original {item.fileType} File ({item.fileSizeFormatted})
              </a>
            </div>
          ) : null}
        </div>

        {/* Modal Footer / Details */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-emerald-900/30 bg-white dark:bg-[#0c1814] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/40">
                {item.category}
              </span>
              {item.assignmentNumber && (
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  {item.assignmentNumber}
                </span>
              )}
              {item.submissionStatus && (
                <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <FileCheck className="w-3.5 h-3.5" /> {item.submissionStatus}
                </span>
              )}
            </div>

            <p className="text-xs text-slate-600 dark:text-emerald-300/80 leading-relaxed">
              {item.description}
            </p>

            {/* Key highlights */}
            {item.keyHighlights && item.keyHighlights.length > 0 && (
              <div className="pt-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-emerald-500 block mb-1">
                  Key Technical Content:
                </span>
                <ul className="text-xs space-y-0.5 text-slate-700 dark:text-emerald-200">
                  {item.keyHighlights.slice(0, 3).map((hl, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex flex-wrap md:flex-col items-end gap-2 shrink-0">
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag, i) => (
                <span key={i} className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 bg-slate-100 text-slate-600 dark:bg-[#13231e] dark:text-emerald-300 rounded">
                  <Tag className="w-2.5 h-2.5 opacity-60" /> {tag}
                </span>
              ))}
            </div>
            {item.sourceOrReference && (
              <span className="text-[11px] text-slate-400 dark:text-emerald-500/70 italic text-right max-w-xs">
                Source: {item.sourceOrReference}
              </span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
