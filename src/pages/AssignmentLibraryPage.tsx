import React, { useState, useMemo } from 'react';
import { 
  ASSIGNMENT_CATALOGUE, 
  AssignmentItem, 
  CATEGORIES 
} from '../data/catalogue';
import { 
  Search, 
  Filter, 
  FileText, 
  Image as ImageIcon, 
  FileSpreadsheet, 
  Presentation, 
  Download, 
  ExternalLink, 
  Eye, 
  LayoutGrid, 
  Table as TableIcon, 
  CheckCircle2, 
  ArrowUpDown,
  Tag,
  ShieldAlert
} from 'lucide-react';

interface AssignmentLibraryPageProps {
  onSelectItem: (item: AssignmentItem) => void;
}

export const AssignmentLibraryPage: React.FC<AssignmentLibraryPageProps> = ({
  onSelectItem
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [selectedFileType, setSelectedFileType] = useState<string>('ALL');
  const [sortBy, setSortBy] = useState<'title' | 'filename' | 'size' | 'category'>('title');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  // Filter and sort items
  const filteredItems = useMemo(() => {
    return ASSIGNMENT_CATALOGUE.filter(item => {
      // Search match
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        item.title.toLowerCase().includes(query) ||
        item.originalFilename.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.tags.some(t => t.toLowerCase().includes(query));

      // Category filter
      const matchesCategory = selectedCategory === 'All Categories' || item.category === selectedCategory;

      // File type filter
      const matchesFileType = selectedFileType === 'ALL' || item.fileType === selectedFileType;

      return matchesSearch && matchesCategory && matchesFileType;
    }).sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      if (sortBy === 'filename') return a.originalFilename.localeCompare(b.originalFilename);
      if (sortBy === 'size') return b.fileSizeBytes - a.fileSizeBytes;
      if (sortBy === 'category') return a.category.localeCompare(b.category);
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedFileType, sortBy]);

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Page Header */}
      <div className="border-b border-slate-200 dark:border-emerald-950 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
            Complete Academic Repository
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
            Assignment Library
          </h1>
          <p className="text-sm text-slate-500 dark:text-emerald-400/80 mt-1">
            Discover, preview, and download all 22 verified course documents, reports, datasets, and submissions.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-2 bg-slate-100 dark:bg-[#0c1814] p-1 rounded-xl border border-slate-200 dark:border-emerald-950">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
              viewMode === 'grid'
                ? 'bg-white dark:bg-emerald-800 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            <span className="hidden sm:inline">Grid</span>
          </button>
          <button
            onClick={() => setViewMode('table')}
            className={`p-2 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
              viewMode === 'table'
                ? 'bg-white dark:bg-emerald-800 text-slate-900 dark:text-white shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <TableIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Table</span>
          </button>
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="space-y-4 bg-white dark:bg-[#0c1814] p-5 rounded-2xl border border-slate-200 dark:border-emerald-950 shadow-card dark:shadow-card-dark">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          
          {/* Search Box */}
          <div className="md:col-span-5 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-emerald-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, original filename, topic..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-[#08120f] border border-slate-200 dark:border-emerald-900/40 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Category Filter */}
          <div className="md:col-span-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-[#08120f] border border-slate-200 dark:border-emerald-900/40 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {CATEGORIES.map((cat, idx) => (
                <option key={idx} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* File Type Filter */}
          <div className="md:col-span-2">
            <select
              value={selectedFileType}
              onChange={(e) => setSelectedFileType(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-[#08120f] border border-slate-200 dark:border-emerald-900/40 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="ALL">All File Types</option>
              <option value="PDF">PDF Documents</option>
              <option value="IMAGE">Images & Posters</option>
              <option value="XLSX">Excel Spreadsheets</option>
              <option value="DOCX">Word Documents</option>
              <option value="PPTX">Presentations</option>
              <option value="HTML">Interactive Tools</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="md:col-span-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-[#08120f] border border-slate-200 dark:border-emerald-900/40 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="title">Sort by Title (A-Z)</option>
              <option value="filename">Sort by Filename</option>
              <option value="size">Sort by File Size</option>
              <option value="category">Sort by Category</option>
            </select>
          </div>

        </div>

        {/* Results summary & Active Filters pills */}
        <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-emerald-400 pt-1">
          <div>
            Showing <span className="font-bold text-slate-800 dark:text-white">{filteredItems.length}</span> of {ASSIGNMENT_CATALOGUE.length} files
            {searchQuery && <span> matching "{searchQuery}"</span>}
          </div>

          {(searchQuery || selectedCategory !== 'All Categories' || selectedFileType !== 'ALL') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Categories');
                setSelectedFileType('ALL');
              }}
              className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Grid View */}
      {viewMode === 'grid' ? (
        filteredItems.length === 0 ? (
          <div className="p-12 text-center bg-white dark:bg-[#0c1814] rounded-2xl border border-slate-200 dark:border-emerald-950">
            <ShieldAlert className="w-10 h-10 mx-auto text-slate-400 dark:text-emerald-500 mb-3" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">No documents matched your filter</h3>
            <p className="text-xs text-slate-500 dark:text-emerald-400 mt-1">Try clearing your search query or selecting "All Categories"</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map(item => (
              <div 
                key={item.id}
                className="flex flex-col bg-white dark:bg-[#0c1814] rounded-2xl border border-slate-200 dark:border-emerald-950 overflow-hidden shadow-card dark:shadow-card-dark hover:border-emerald-500/40 transition-all hover:-translate-y-1"
              >
                {/* Visual Thumbnail */}
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
                      <span className="text-xs font-semibold">Preview Document</span>
                    </div>
                    <span className="absolute top-3 left-3 text-[10px] font-bold px-2 py-0.5 rounded bg-charcoal-900/80 backdrop-blur-md text-white uppercase tracking-wider">
                      {item.fileType}
                    </span>
                  </div>
                ) : (
                  <div 
                    onClick={() => onSelectItem(item)}
                    className="h-32 w-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-emerald-950/20 dark:to-charcoal-900 flex items-center justify-center cursor-pointer group p-4 border-b border-slate-100 dark:border-emerald-950/60"
                  >
                    <div className="text-center">
                      <div className="w-10 h-10 mx-auto rounded-xl bg-white dark:bg-emerald-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-1 shadow-sm">
                        {item.fileType === 'XLSX' ? <FileSpreadsheet className="w-5 h-5" /> :
                         item.fileType === 'PPTX' ? <Presentation className="w-5 h-5" /> :
                         <FileText className="w-5 h-5" />}
                      </div>
                      <span className="text-[11px] font-mono font-medium text-slate-500 dark:text-emerald-300 truncate max-w-[200px] block">
                        {item.originalFilename}
                      </span>
                    </div>
                  </div>
                )}

                {/* Card Content */}
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

                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 pt-1">
                        {item.tags.slice(0, 3).map((tag, tIdx) => (
                          <span key={tIdx} className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 dark:bg-[#12221c] dark:text-emerald-300">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Action buttons */}
                  <div className="pt-2 border-t border-slate-100 dark:border-emerald-950/60 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectItem(item)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/50 dark:hover:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 text-xs font-semibold transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Details</span>
                    </button>

                    <div className="flex items-center gap-1">
                      <a
                        href={item.publicAssetPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-emerald-300 hover:bg-slate-100 dark:hover:bg-emerald-950/40 transition-colors"
                        title="Open in New Tab"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>

                      <a
                        href={item.publicAssetPath}
                        download={item.originalFilename}
                        className="p-1.5 rounded-lg text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 transition-colors"
                        title="Download Original File"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )
      ) : (
        /* Table View */
        <div className="overflow-x-auto bg-white dark:bg-[#0c1814] rounded-2xl border border-slate-200 dark:border-emerald-950 shadow-card dark:shadow-card-dark">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-[#08120f] border-b border-slate-200 dark:border-emerald-950 text-slate-500 dark:text-emerald-400 uppercase font-semibold">
              <tr>
                <th className="py-3.5 px-4">Document Title</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Original Filename</th>
                <th className="py-3.5 px-4">Format</th>
                <th className="py-3.5 px-4">Size</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-emerald-950/60">
              {filteredItems.map(item => (
                <tr key={item.id} className="hover:bg-slate-50/80 dark:hover:bg-[#10221c]/50 transition-colors">
                  <td className="py-3.5 px-4">
                    <button
                      onClick={() => onSelectItem(item)}
                      className="font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 text-left line-clamp-1"
                    >
                      {item.title}
                    </button>
                    <span className="text-[11px] text-slate-400 dark:text-emerald-500/70 block truncate max-w-sm">
                      {item.description}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap text-slate-600 dark:text-emerald-300">
                    {item.category}
                  </td>
                  <td className="py-3.5 px-4 font-mono text-slate-500 dark:text-emerald-400/80 whitespace-nowrap">
                    {item.originalFilename}
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-emerald-950/80 text-slate-700 dark:text-emerald-300">
                      {item.fileType}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-slate-500 dark:text-emerald-400/80 whitespace-nowrap">
                    {item.fileSizeFormatted}
                  </td>
                  <td className="py-3.5 px-4 whitespace-nowrap">
                    <span className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {item.submissionStatus || 'Verified'}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    <div className="inline-flex items-center gap-1.5">
                      <button
                        onClick={() => onSelectItem(item)}
                        className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 dark:bg-[#13231e] dark:hover:bg-emerald-900/40 text-slate-700 dark:text-emerald-300 font-medium"
                      >
                        Inspect
                      </button>
                      <a
                        href={item.publicAssetPath}
                        download={item.originalFilename}
                        className="p-1 rounded text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40"
                        title="Download"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};
