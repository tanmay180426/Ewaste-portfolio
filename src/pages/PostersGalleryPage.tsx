import React, { useState } from 'react';
import { 
  ASSIGNMENT_CATALOGUE, 
  AssignmentItem 
} from '../data/catalogue';
import { 
  Eye, 
  Download, 
  ExternalLink, 
  ZoomIn, 
  Sparkles, 
  Layers, 
  Share2,
  Tag
} from 'lucide-react';

interface PostersGalleryPageProps {
  onSelectItem: (item: AssignmentItem) => void;
}

export const PostersGalleryPage: React.FC<PostersGalleryPageProps> = ({
  onSelectItem
}) => {
  const [selectedTag, setSelectedTag] = useState<string>('ALL');

  // Filter items that have image assets or previews
  const visualItems = ASSIGNMENT_CATALOGUE.filter(i => 
    i.fileType === 'IMAGE' || Boolean(i.previewThumbnail)
  );

  const tags = ['ALL', 'Awareness Posters', 'Technical Diagrams', 'Infographics', 'Handwritten Scans', 'Smart Hardware'];

  const filteredVisuals = visualItems.filter(item => {
    if (selectedTag === 'ALL') return true;
    if (selectedTag === 'Awareness Posters') return item.category.includes('Awareness');
    if (selectedTag === 'Technical Diagrams') return item.id.includes('decrepitation');
    if (selectedTag === 'Infographics') return item.id.includes('sikkim-metals') || item.id.includes('rules-comparison') || item.id.includes('spcb');
    if (selectedTag === 'Handwritten Scans') return item.id.includes('toxic-metals') || item.id.includes('india-vs-world');
    if (selectedTag === 'Smart Hardware') return item.id.includes('ebin');
    return true;
  });

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-emerald-950 pb-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
          Visual Communication & Technical Diagrams
        </span>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          Posters & Infographics Gallery
        </h1>
        <p className="text-sm text-slate-500 dark:text-emerald-400/80 mt-1 max-w-3xl">
          High-resolution academic posters, chemical engineering flowcharts, sub-national infographics, and original comic strips created and indexed for the E-Waste Management portfolio.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mt-5">
          {tags.map((t, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedTag(t)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedTag === t
                  ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-600/30'
                  : 'bg-white dark:bg-[#0c1814] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-emerald-950 hover:border-emerald-500'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVisuals.map((item) => {
          const imgSrc = item.previewThumbnail || item.publicAssetPath;
          return (
            <div
              key={item.id}
              className="group flex flex-col bg-white dark:bg-[#0c1814] rounded-2xl border border-slate-200 dark:border-emerald-950 overflow-hidden shadow-card dark:shadow-card-dark hover:border-emerald-500/50 transition-all hover:-translate-y-1"
            >
              {/* Image Frame */}
              <div 
                onClick={() => onSelectItem(item)}
                className="relative h-72 sm:h-80 w-full bg-slate-100 dark:bg-[#060e0b] overflow-hidden cursor-pointer"
              >
                <img
                  src={imgSrc}
                  alt={item.title}
                  className="w-full h-full object-contain p-2 group-hover:scale-[1.03] transition-transform duration-300"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-charcoal-900/80 backdrop-blur-md text-white uppercase tracking-wider">
                    {item.fileType}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-emerald-900/80 backdrop-blur-md text-emerald-200">
                    {item.fileSizeFormatted}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-charcoal-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-white p-4">
                  <span className="p-3 rounded-full bg-emerald-600 shadow-lg group-hover:scale-110 transition-transform">
                    <ZoomIn className="w-5 h-5" />
                  </span>
                  <span className="text-xs font-bold tracking-wide">
                    Click to Open Full View
                  </span>
                </div>
              </div>

              {/* Caption and Technical Description */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 block uppercase tracking-wide">
                    {item.category}
                  </span>
                  <h3 
                    onClick={() => onSelectItem(item)}
                    className="font-bold text-slate-900 dark:text-white text-base hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer line-clamp-2"
                  >
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-emerald-300/80 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Key Highlights preview */}
                {item.keyHighlights && item.keyHighlights.length > 0 && (
                  <div className="p-2.5 bg-slate-50 dark:bg-[#07110e] rounded-xl border border-slate-100 dark:border-emerald-950 text-[11px] text-slate-600 dark:text-emerald-300/90 space-y-1">
                    <span className="font-semibold text-slate-700 dark:text-emerald-400 block text-[10px] uppercase">
                      Technical Highlight:
                    </span>
                    <p className="line-clamp-2 leading-tight">
                      • {item.keyHighlights[0]}
                    </p>
                  </div>
                )}

                {/* Bottom Controls */}
                <div className="pt-3 border-t border-slate-100 dark:border-emerald-950/60 flex items-center justify-between">
                  <button
                    onClick={() => onSelectItem(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Enlarge & Details</span>
                  </button>

                  <a
                    href={item.publicAssetPath}
                    download={item.originalFilename}
                    className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-[#12221b] dark:hover:bg-emerald-900/40 text-slate-700 dark:text-emerald-300 transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                </div>

              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
