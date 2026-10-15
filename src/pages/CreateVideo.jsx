import React, { useState } from 'react';
import { WorkflowSteps } from '../components/layout/WorkflowSteps';
import { TrainingPrompt } from '../components/prompt/TrainingPrompt';
import { ScenePanel } from '../components/scenes/ScenePanel';
import { VideoPreview } from '../components/preview/VideoPreview';
import { ScriptPanel } from '../components/script/ScriptPanel';
import { SettingsPanel } from '../components/settings/SettingsPanel';
import { SlidersHorizontal, Sparkles, CheckCircle2, X, Download, Play, RefreshCw } from 'lucide-react';

export const CreateVideo = ({
  project,
  onUpdateProject,
  onSaveProject,
  isSaved,
  showGenerateModal,
  setShowGenerateModal
}) => {
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(1);
  const [generationStep, setGenerationStep] = useState(1);
  const [isGeneratingCompleted, setIsGeneratingCompleted] = useState(false);
  const [isMobileSettingsOpen, setIsMobileSettingsOpen] = useState(false);

  // Active scene lookup
  const activeScene = project.scenes.find(s => s.id === project.activeSceneId) || project.scenes[0];

  // Active theme lookup
  const activeTheme = project.colorThemes.find(t => t.id === project.settings.colorTheme) || project.colorThemes[1];

  // Handlers
  const handleSelectScene = (sceneId) => {
    onUpdateProject({
      ...project,
      activeSceneId: sceneId
    });
  };

  const handlePromptChange = (newPrompt) => {
    onUpdateProject({
      ...project,
      prompt: newPrompt
    });
  };

  const handleOptionsChange = (newOptions) => {
    onUpdateProject({
      ...project,
      options: newOptions
    });
  };

  const handleUpdateScript = (newScript) => {
    const updatedScenes = project.scenes.map(s => 
      s.id === project.activeSceneId ? { ...s, script: newScript } : s
    );
    onUpdateProject({
      ...project,
      scenes: updatedScenes
    });
  };

  const handleUpdateSettings = (newSettings) => {
    onUpdateProject({
      ...project,
      settings: newSettings
    });
  };

  const handleAddScene = () => {
    const newId = project.scenes.length > 0 ? Math.max(...project.scenes.map(s => s.id)) + 1 : 1;
    const nextNumber = project.scenes.length + 1;
    
    const newScene = {
      id: newId,
      number: nextNumber,
      title: `Emergency Protocols ${nextNumber}`,
      duration: '3:00 - 3:30',
      durationSec: 30,
      slide: {
        pill: 'SAFETY AUDIT',
        headline: 'Continuous',
        accentText: 'Inspections',
        description: 'Conduct daily equipment checks and verify unblocked emergency evacuation corridors.',
        badgeColor: '#138A63',
        imageType: 'summary'
      },
      script: 'Regular inspection of fire suppression cylinders and electrical distribution boxes ensures emergency readiness. Report discrepancies immediately.'
    };

    onUpdateProject({
      ...project,
      scenes: [...project.scenes, newScene],
      activeSceneId: newId
    });
  };

  const handleDuplicateScene = (sceneId) => {
    const target = project.scenes.find(s => s.id === sceneId);
    if (!target) return;

    const newId = Math.max(...project.scenes.map(s => s.id)) + 1;
    const duplicated = {
      ...target,
      id: newId,
      number: project.scenes.length + 1,
      title: `${target.title} (Copy)`
    };

    onUpdateProject({
      ...project,
      scenes: [...project.scenes, duplicated],
      activeSceneId: newId
    });
  };

  const handleDeleteScene = (sceneId) => {
    if (project.scenes.length <= 1) {
      alert('A video must have at least one scene.');
      return;
    }
    const filtered = project.scenes.filter(s => s.id !== sceneId);
    // Renumber
    const renumbered = filtered.map((s, idx) => ({ ...s, number: idx + 1 }));
    const nextActive = renumbered[0].id;
    onUpdateProject({
      ...project,
      scenes: renumbered,
      activeSceneId: nextActive
    });
  };

  const handleRenameScene = (sceneId, newTitle) => {
    const updated = project.scenes.map(s => 
      s.id === sceneId ? { ...s, title: newTitle } : s
    );
    onUpdateProject({
      ...project,
      scenes: updated
    });
  };

  // Mock Generation flow
  const handleStartGeneration = () => {
    setShowGenerateModal(true);
    setGenerationStep(1);
    setIsGeneratingCompleted(false);

    // Simulate multi-stage generation
    setTimeout(() => setGenerationStep(2), 1200);
    setTimeout(() => setGenerationStep(3), 2400);
    setTimeout(() => {
      setGenerationStep(4);
      setIsGeneratingCompleted(true);
    }, 3800);
  };

  return (
    <div className="flex-1 min-w-0 bg-[#F5F8FA] p-4 lg:p-6 space-y-6">
      
      {/* 1. Workflow Indicator Bar */}
      <WorkflowSteps
        activeStep={activeWorkflowStep}
        onStepClick={(step) => setActiveWorkflowStep(step)}
      />

      {/* Main Studio Workspace Grid: Editor Center + Settings Right */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        
        {/* LEFT / CENTER: Main Editor Workspace */}
        <div className="flex-1 min-w-0 space-y-6 w-full">
          
          {/* Training Prompt Card */}
          <TrainingPrompt
            prompt={project.prompt}
            onPromptChange={handlePromptChange}
            options={project.options}
            onOptionsChange={handleOptionsChange}
            onGenerateTraining={() => {
              setActiveWorkflowStep(2);
            }}
          />

          {/* Two-Column Section: Scenes List (Left) + Video Preview & Script (Right) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
            
            {/* Left: Scenes List (Approx 4 cols on desktop) */}
            <div className="md:col-span-4 lg:col-span-4">
              <ScenePanel
                scenes={project.scenes}
                activeSceneId={project.activeSceneId}
                onSelectScene={handleSelectScene}
                onAddScene={handleAddScene}
                onDuplicateScene={handleDuplicateScene}
                onDeleteScene={handleDeleteScene}
                onRenameScene={handleRenameScene}
              />
            </div>

            {/* Right: Video Preview + Script Panel (Approx 8 cols on desktop) */}
            <div className="md:col-span-8 lg:col-span-8 space-y-4">
              {/* Video Preview */}
              <VideoPreview
                activeScene={activeScene}
                settings={project.settings}
                themeColors={activeTheme}
              />

              {/* Script Panel */}
              <ScriptPanel
                script={activeScene?.script}
                onUpdateScript={handleUpdateScript}
                activeSceneTitle={activeScene?.title}
              />
            </div>
          </div>

        </div>

        {/* Mobile Settings Toggle Button */}
        <div className="lg:hidden w-full flex justify-end">
          <button
            type="button"
            onClick={() => setIsMobileSettingsOpen(!isMobileSettingsOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-[#DCE5EA] rounded-xl text-xs font-bold text-[#092C49] shadow-xs"
          >
            <SlidersHorizontal size={14} className="text-[#138A63]" />
            <span>Customize Settings</span>
          </button>
        </div>

        {/* RIGHT: Settings Panel (340px width) */}
        <div className={`w-full lg:w-[340px] flex-shrink-0 ${isMobileSettingsOpen ? 'block' : 'hidden lg:block'}`}>
          <SettingsPanel
            settings={project.settings}
            onUpdateSettings={handleUpdateSettings}
            backgrounds={project.backgrounds}
            styles={project.styles}
            colorThemes={project.colorThemes}
            isMobileDrawer={isMobileSettingsOpen}
            onCloseMobileDrawer={() => setIsMobileSettingsOpen(false)}
          />
        </div>

      </div>

      {/* Generation Simulation Modal */}
      {showGenerateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-5">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#E8F5F0] text-[#138A63] flex items-center justify-center">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#092C49]">
                    {isGeneratingCompleted ? 'Training Video Ready!' : 'Preparing your training video...'}
                  </h3>
                  <p className="text-xs text-[#64748B]">
                    {isGeneratingCompleted ? 'High definition rendering preview generated.' : 'Synthesizing scene layout, prompts, and avatar narration.'}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowGenerateModal(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body / Steps */}
            {!isGeneratingCompleted ? (
              <div className="space-y-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#138A63] text-white flex items-center justify-center text-xs">
                    {generationStep > 1 ? <CheckCircle2 size={15} /> : <RefreshCw size={13} className="animate-spin" />}
                  </div>
                  <span className={`text-sm ${generationStep >= 1 ? 'font-semibold text-[#092C49]' : 'text-slate-400'}`}>
                    Analyzing workplace safety prompt & Hindi tone
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    generationStep >= 2 ? 'bg-[#138A63] text-white' : 'bg-slate-100 text-slate-400'
                  }`}>
                    {generationStep > 2 ? <CheckCircle2 size={15} /> : generationStep === 2 ? <RefreshCw size={13} className="animate-spin" /> : '2'}
                  </div>
                  <span className={`text-sm ${generationStep >= 2 ? 'font-semibold text-[#092C49]' : 'text-slate-400'}`}>
                    Composing {project.scenes.length} presentation slides & PASS graphics
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    generationStep >= 3 ? 'bg-[#138A63] text-white' : 'bg-slate-100 text-slate-400'
                  }`}>
                    {generationStep > 3 ? <CheckCircle2 size={15} /> : generationStep === 3 ? <RefreshCw size={13} className="animate-spin" /> : '3'}
                  </div>
                  <span className={`text-sm ${generationStep >= 3 ? 'font-semibold text-[#092C49]' : 'text-slate-400'}`}>
                    Harmonizing factory environment lighting & audio script
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden mt-4">
                  <div 
                    className="bg-[#138A63] h-full transition-all duration-500 rounded-full"
                    style={{ width: `${(generationStep / 4) * 100}%` }}
                  />
                </div>
              </div>
            ) : (
              /* Completed State */
              <div className="space-y-4 py-2">
                <div className="p-4 rounded-xl bg-[#E8F5F0] border border-[#138A63]/30 flex items-center gap-3">
                  <CheckCircle2 size={24} className="text-[#138A63] flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-[#092C49]">Mock Compilation Successful!</h4>
                    <p className="text-xs text-slate-600">
                      Duration: 3:00 • 5 Scenes • Hindi Narration • 1080p Standard
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  The video package is simulated and saved. In the upcoming backend phase, this will trigger the real GPU video rendering pipeline.
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowGenerateModal(false)}
                    className="flex-1 py-2.5 px-4 rounded-lg bg-[#138A63] hover:bg-[#1B9B70] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <Play size={15} fill="currentColor" />
                    <span>Watch in Studio</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      alert('Download mock video package triggered (.mp4)');
                      setShowGenerateModal(false);
                    }}
                    className="py-2.5 px-4 rounded-lg border border-[#DCE5EA] hover:bg-slate-50 text-[#092C49] text-sm font-semibold flex items-center gap-2 transition-all"
                  >
                    <Download size={15} />
                    <span>Download Mock</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
