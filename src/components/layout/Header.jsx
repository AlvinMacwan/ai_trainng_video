import React from 'react';
import { Undo2, Redo2, Bookmark, ArrowRight, Sparkles, Check } from 'lucide-react';
import { StudioLogo } from '../common/VisualAssets';

export const Header = ({ 
  onSave, 
  onGenerate, 
  isSaved, 
  onUndo, 
  onRedo, 
  canUndo = false, 
  canRedo = false 
}) => {
  return (
    <header className="h-[72px] bg-white border-b border-[#DCE5EA] px-6 flex items-center justify-between sticky top-0 z-30 select-none shadow-xs">
      {/* Left: Brand Identity */}
      <div className="flex items-center gap-3.5">
        <StudioLogo size={46} />
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight text-[#063B56]">
              AI Training Studio
            </h1>
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-semibold bg-[#E8F5F0] text-[#138A63] rounded-full border border-[#138A63]/20">
              <Sparkles size={11} />
              Studio Beta
            </span>
          </div>
          <p className="text-xs text-[#64748B] hidden md:block">
            Intelligent enterprise video generation workspace
          </p>
        </div>
      </div>

      {/* Right: History, Actions, Generate CTA */}
      <div className="flex items-center gap-3">
        {/* Undo / Redo */}
        <div className="flex items-center border border-[#DCE5EA] rounded-lg p-0.5 bg-[#F8FAFC]">
          <button 
            type="button"
            onClick={onUndo}
            disabled={!canUndo}
            title="Undo (Ctrl+Z)"
            aria-label="Undo"
            className={`p-2 rounded-md transition-colors ${canUndo ? 'text-[#092C49] hover:bg-white hover:shadow-xs' : 'text-slate-300 cursor-not-allowed'}`}
          >
            <Undo2 size={17} />
          </button>
          <div className="w-[1px] h-4 bg-[#DCE5EA]" />
          <button 
            type="button"
            onClick={onRedo}
            disabled={!canRedo}
            title="Redo (Ctrl+Y)"
            aria-label="Redo"
            className={`p-2 rounded-md transition-colors ${canRedo ? 'text-[#092C49] hover:bg-white hover:shadow-xs' : 'text-slate-300 cursor-not-allowed'}`}
          >
            <Redo2 size={17} />
          </button>
        </div>

        {/* Save Project Button */}
        <button
          type="button"
          onClick={onSave}
          aria-label="Save Project"
          className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#092C49] bg-white border border-[#DCE5EA] hover:bg-slate-50 hover:border-slate-300 rounded-lg transition-all shadow-xs active:scale-[0.98]"
        >
          {isSaved ? (
            <>
              <Check size={16} className="text-[#138A63]" />
              <span className="text-[#138A63] font-semibold">Saved!</span>
            </>
          ) : (
            <>
              <Bookmark size={16} className="text-[#64748B]" />
              <span>Save Project</span>
            </>
          )}
        </button>

        {/* Generate Video CTA (Visually dominant) */}
        <button
          type="button"
          onClick={onGenerate}
          aria-label="Generate Video"
          className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#138A63] hover:bg-[#1B9B70] rounded-lg shadow-sm hover:shadow-md transition-all active:scale-[0.98] border border-emerald-600/30"
        >
          <span>Generate Video</span>
          <ArrowRight size={17} className="stroke-[2.5]" />
        </button>
      </div>
    </header>
  );
};
