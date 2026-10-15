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
    <header className="h-[68px] bg-white border-b border-[#E2E8F0] px-7 flex items-center justify-between sticky top-0 z-30 select-none">
      {/* Left: Brand Identity */}
      <div className="flex items-center gap-3">
        <StudioLogo size={36} />
        <h1 className="text-[19px] font-bold tracking-tight text-[#0A2540]">
          AI Training Studio
        </h1>
      </div>

      {/* Right: History, Save, Generate CTA */}
      <div className="flex items-center gap-3">
        {/* Undo / Redo */}
        <div className="flex items-center gap-1 mr-1">
          <button 
            type="button"
            onClick={onUndo}
            disabled={!canUndo}
            title="Undo"
            aria-label="Undo"
            className={`p-1.5 rounded-md transition-colors ${canUndo ? 'text-[#0A2540] hover:bg-slate-100' : 'text-slate-300 cursor-not-allowed'}`}
          >
            <Undo2 size={18} />
          </button>
          <button 
            type="button"
            onClick={onRedo}
            disabled={!canRedo}
            title="Redo"
            aria-label="Redo"
            className={`p-1.5 rounded-md transition-colors ${canRedo ? 'text-[#0A2540] hover:bg-slate-100' : 'text-slate-300 cursor-not-allowed'}`}
          >
            <Redo2 size={18} />
          </button>
        </div>

        {/* Save Project Button */}
        <button
          type="button"
          onClick={onSave}
          aria-label="Save Project"
          className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#0A2540] bg-white border border-[#DCE5EA] hover:bg-slate-50 rounded-lg transition-all shadow-2xs active:scale-[0.98]"
        >
          {isSaved ? (
            <>
              <Check size={14} className="text-[#138A63]" />
              <span className="text-[#138A63]">Saved</span>
            </>
          ) : (
            <>
              <Bookmark size={14} className="text-[#64748B]" />
              <span>Save Project</span>
            </>
          )}
        </button>

        {/* Generate Video CTA (Green button with sparkles and arrow) */}
        <button
          type="button"
          onClick={onGenerate}
          aria-label="Generate Video"
          className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#138A63] hover:bg-[#107A57] rounded-lg shadow-sm transition-all active:scale-[0.98]"
        >
          <Sparkles size={14} className="text-emerald-100" />
          <span>Generate Video</span>
          <ArrowRight size={14} className="stroke-[2.5]" />
        </button>
      </div>
    </header>
  );
};
