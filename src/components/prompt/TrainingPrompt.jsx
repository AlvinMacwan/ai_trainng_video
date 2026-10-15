import React, { useState } from 'react';
import { Sparkles, MessageSquareQuote, RefreshCw } from 'lucide-react';
import { TrainingOptions } from './TrainingOptions';

export const TrainingPrompt = ({ 
  prompt = '', 
  onPromptChange, 
  options = [], 
  onOptionsChange,
  onGenerateTraining 
}) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const charLimit = 1000;

  const handleGenerateClick = () => {
    setIsGenerating(true);
    if (onGenerateTraining) {
      onGenerateTraining();
    }
    setTimeout(() => {
      setIsGenerating(false);
    }, 900);
  };

  return (
    <section className="bg-white rounded-xl border border-[#DCE5EA] p-5 shadow-xs space-y-4">
      {/* Header / Title */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-[#E8F5F0] text-[#138A63]">
            <MessageSquareQuote size={18} />
          </div>
          <h2 className="text-base font-bold text-[#092C49] tracking-tight">
            Training Prompt
          </h2>
        </div>

        <div className="text-xs font-medium text-[#64748B]">
          <span className={prompt.length > charLimit ? 'text-red-500 font-bold' : ''}>
            {prompt.length}
          </span>
          <span className="text-slate-400">/{charLimit}</span>
        </div>
      </div>

      {/* Prompt Textarea */}
      <div className="relative">
        <textarea
          value={prompt}
          onChange={(e) => onPromptChange && onPromptChange(e.target.value)}
          rows={3}
          maxLength={charLimit}
          placeholder="Describe your training objective, audience, and key procedures..."
          className="w-full text-sm leading-relaxed text-[#092C49] bg-[#F8FAFC]/60 border border-[#DCE5EA] rounded-xl p-3.5 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#138A63]/30 focus:border-[#138A63] transition-all resize-none shadow-2xs font-normal"
        />
      </div>

      {/* Options Cards */}
      <TrainingOptions 
        options={options} 
        onOptionsChange={onOptionsChange} 
      />

      {/* Bottom Action Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-100">
        <div className="text-xs text-[#64748B] flex items-center gap-1.5 hidden sm:flex">
          <span className="w-2 h-2 rounded-full bg-[#138A63]" />
          <span>Curated prompts generate verified workplace safety outlines</span>
        </div>

        <button
          type="button"
          onClick={handleGenerateClick}
          disabled={isGenerating}
          className="ml-auto flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#138A63] hover:bg-[#1B9B70] active:scale-[0.98] rounded-lg shadow-xs transition-all disabled:opacity-75"
        >
          {isGenerating ? (
            <>
              <RefreshCw size={15} className="animate-spin" />
              <span>Updating Plan...</span>
            </>
          ) : (
            <>
              <Sparkles size={15} className="text-emerald-200" />
              <span>✦ Generate Training</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
};
