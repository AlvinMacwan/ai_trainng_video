import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { CreateVideo } from './pages/CreateVideo';
import { MyProjects } from './pages/MyProjects';
import { initialMockProject } from './data/mockProject';
import { Check, Menu } from 'lucide-react';

const LOCAL_STORAGE_KEY = 'ai_training_studio_project_v1';

export function App() {
  // Load from localStorage or initialMockProject
  const [project, setProject] = useState(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Failed to load local storage', e);
    }
    return initialMockProject;
  });

  // History stack for Undo / Redo
  const [history, setHistory] = useState([initialMockProject]);
  const [historyIndex, setHistoryIndex] = useState(0);

  // UI state
  const [currentView, setCurrentView] = useState('create'); // 'create' | 'projects' | 'templates' | etc.
  const [isSaved, setIsSaved] = useState(false);
  const [saveToast, setSaveToast] = useState(false);
  const [showGenerateModal, setShowGenerateModal] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Update project with undo history recording
  const handleUpdateProject = (newProject, recordHistory = true) => {
    setProject(newProject);
    setIsSaved(false);

    if (recordHistory) {
      const newHistory = history.slice(0, historyIndex + 1);
      newHistory.push(newProject);
      // Limit history to 20 steps
      if (newHistory.length > 20) newHistory.shift();
      setHistory(newHistory);
      setHistoryIndex(newHistory.length - 1);
    }
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      const prevIndex = historyIndex - 1;
      setHistoryIndex(prevIndex);
      setProject(history[prevIndex]);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      const nextIndex = historyIndex + 1;
      setHistoryIndex(nextIndex);
      setProject(history[nextIndex]);
    }
  };

  // Save Project action
  const handleSaveProject = () => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(project));
      setIsSaved(true);
      setSaveToast(true);
      setTimeout(() => {
        setSaveToast(false);
      }, 2500);
    } catch (e) {
      console.error('Save failed', e);
      alert('Could not save to local storage.');
    }
  };

  // View navigation
  const handleNavigate = (viewId) => {
    if (viewId === 'create' || viewId === 'projects') {
      setCurrentView(viewId);
    } else {
      alert(`The "${viewId.toUpperCase()}" section is available in the next release.`);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F8FA] flex flex-col antialiased text-[#092C49]">
      {/* Top Header */}
      <Header
        onSave={handleSaveProject}
        onGenerate={() => setShowGenerateModal(true)}
        isSaved={isSaved}
        onUndo={handleUndo}
        onRedo={handleRedo}
        canUndo={historyIndex > 0}
        canRedo={historyIndex < history.length - 1}
      />

      {/* Main Workspace Frame */}
      <div className="flex-1 flex max-w-[1680px] w-full mx-auto relative">
        {/* Mobile Sidebar Hamburger Bar */}
        <div className="lg:hidden absolute top-2 left-4 z-20">
          <button
            type="button"
            onClick={() => setIsMobileSidebarOpen(true)}
            className="p-2 bg-white rounded-lg border border-[#DCE5EA] text-[#092C49] shadow-xs"
            aria-label="Open Sidebar Menu"
          >
            <Menu size={18} />
          </button>
        </div>

        {/* Left Vertical Dark Navy Sidebar (230px) */}
        <Sidebar
          currentView={currentView}
          onNavigate={handleNavigate}
          isMobileOpen={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        {/* Central / Main Content Area */}
        <main className="flex-1 min-w-0 flex flex-col">
          {currentView === 'create' && (
            <CreateVideo
              project={project}
              onUpdateProject={handleUpdateProject}
              onSaveProject={handleSaveProject}
              isSaved={isSaved}
              showGenerateModal={showGenerateModal}
              setShowGenerateModal={setShowGenerateModal}
            />
          )}

          {currentView === 'projects' && (
            <MyProjects
              onOpenProject={(proj) => {
                setCurrentView('create');
              }}
              onNewProject={() => {
                setCurrentView('create');
              }}
            />
          )}
        </main>
      </div>

      {/* Floating Save Toast Notification */}
      {saveToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#022D44] text-white shadow-xl border border-emerald-500/30 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="w-5 h-5 rounded-full bg-[#138A63] flex items-center justify-center text-white">
            <Check size={12} strokeWidth={3} />
          </div>
          <span className="text-xs font-semibold">
            Project state saved to local storage!
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
