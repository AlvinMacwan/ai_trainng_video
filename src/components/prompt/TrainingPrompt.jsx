import React, { useState } from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';
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
    }, 700);
  };

  return (
    <section className="bg-white rounded-2xl border border-[#E2E8F0] p-5 shadow-2xs space-y-3.5">
      {/* Title */}
      <div>
        <h2 className="text-[15px] font-bold text-[#0A2540] tracking-tight">
          Training Prompt
        </h2>
      </div>

      {/* Prompt Textarea */}
      <div className="relative">
        <textarea
          value={prompt}
          onChange={(e) => onPromptChange && onPromptChange(e.target.value)}
          rows={3}
          maxLength={charLimit}
          placeholder="Describe your training objective, audience, and key procedures..."
          className="w-full text-xs leading-relaxed text-[#0A2540] bg-[#F8FAFC]/50 border border-[#E2E8F0] rounded-xl p-3 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#138A63] focus:border-[#138A63] transition-all resize-none font-normal"
        />
        {/* Character Count */}
        <div className="text-[11px] text-slate-400 text-right -mt-1 mr-1">
          <span>{prompt.length}</span>
          <span>/{charLimit}</span>
        </div>
      </div>

      {/* Options Cards */}
      <TrainingOptions 
        options={options} 
        onOptionsChange={onOptionsChange} 
      />

      {/* Bottom Action Footer */}
      <div className="flex justify-end pt-1">
        <button
          type="button"
          onClick={handleGenerateClick}
          disabled={isGenerating}
          className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#138A63] hover:bg-[#107A57] active:scale-[0.98] rounded-xl shadow-xs transition-all disabled:opacity-75"
        >
          {isGenerating ? (
            <>
              <RefreshCw size={14} className="animate-spin" />
              <span>Generating...</span>
            </>
          ) : (
            <>
              <Sparkles size={14} className="text-emerald-100" />
              <span>Generate Training</span>
            </>
          )}
        </button>
      </div>
    </section>
  );
};
