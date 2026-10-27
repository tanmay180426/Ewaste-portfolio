import React, { useState, useEffect } from 'react';
import { PageView } from './types';
import { ASSIGNMENT_CATALOGUE, AssignmentItem } from './data/catalogue';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { DocumentViewerModal } from './components/DocumentViewerModal';
import { OverviewPage } from './pages/OverviewPage';
import { AssignmentLibraryPage } from './pages/AssignmentLibraryPage';
import { PostersGalleryPage } from './pages/PostersGalleryPage';
import { ResearchAnalyticsPage } from './pages/ResearchAnalyticsPage';
import { NotesDocumentsPage } from './pages/NotesDocumentsPage';
import { InteractiveToolsPage } from './pages/InteractiveToolsPage';
import { AcademicProfilePage } from './pages/AcademicProfilePage';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageView>('overview');
  const [selectedItemForModal, setSelectedItemForModal] = useState<AssignmentItem | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dark mode state with persistence
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('ewem_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('ewem_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('ewem_theme', 'light');
    }
  }, [isDark]);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleSelectItem = (item: AssignmentItem) => {
    setSelectedItemForModal(item);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8faf9] text-charcoal-900 dark:bg-[#07110e] dark:text-emerald-50 transition-colors duration-200">
      
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isDark={isDark}
        setIsDark={setIsDark}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        totalIndexedFiles={ASSIGNMENT_CATALOGUE.length}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        {currentPage === 'overview' && (
          <OverviewPage
            setCurrentPage={setCurrentPage}
            onSelectItem={handleSelectItem}
          />
        )}

        {currentPage === 'assignments' && (
          <AssignmentLibraryPage
            onSelectItem={handleSelectItem}
          />
        )}

        {currentPage === 'posters' && (
          <PostersGalleryPage
            onSelectItem={handleSelectItem}
          />
        )}

        {currentPage === 'research' && (
          <ResearchAnalyticsPage
            onSelectItem={handleSelectItem}
          />
        )}

        {currentPage === 'notes' && (
          <NotesDocumentsPage
            onSelectItem={handleSelectItem}
          />
        )}

        {currentPage === 'tools' && (
          <InteractiveToolsPage />
        )}

        {currentPage === 'profile' && (
          <AcademicProfilePage />
        )}
      </main>

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Full Document & Image Viewer Modal */}
      <DocumentViewerModal
        item={selectedItemForModal}
        onClose={() => setSelectedItemForModal(null)}
      />

    </div>
  );
};

export default App;
