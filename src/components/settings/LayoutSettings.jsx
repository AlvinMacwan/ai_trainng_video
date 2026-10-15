import React from 'react';
import { Check } from 'lucide-react';

export const LayoutSettings = ({ contentPosition = 'left', onChangePosition }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-xs font-bold text-[#092C49] uppercase tracking-wider">
          Content Position
        </label>
        <span className="text-[11px] text-[#64748B]">Slide & Presenter</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* Option 1: Content Left */}
        <button
          type="button"
          onClick={() => onChangePosition && onChangePosition('left')}
          className={`flex flex-col p-3 rounded-xl border text-left transition-all ${
            contentPosition === 'left'
              ? 'border-[#138A63] bg-[#E8F5F0]/50 ring-1 ring-[#138A63]/30 shadow-xs'
              : 'border-[#DCE5EA] bg-white hover:border-slate-300 hover:bg-slate-50'
          }`}
        >
          {/* Visual Mini Representation */}
          <div className="w-full h-16 rounded-lg bg-slate-100 border border-slate-200 p-1.5 flex gap-1.5 mb-2.5">
            {/* Presentation Left (65%) */}
            <div className={`w-[65%] h-full rounded flex flex-col justify-center px-1.5 ${
              contentPosition === 'left' ? 'bg-[#138A63]/20 border border-[#138A63]/40' : 'bg-white border border-slate-200'
            }`}>
              <div className="w-6 h-1 bg-[#138A63] rounded-full mb-1" />
              <div className="w-10 h-1 bg-slate-300 rounded-full" />
            </div>
            {/* Presenter Right (35%) */}
            <div className="w-[35%] h-full rounded border border-dashed border-slate-300 bg-white/50 flex items-center justify-center">
              <div className="w-3.5 h-3.5 rounded-full bg-slate-300" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#092C49]">Content Left</span>
            {contentPosition === 'left' && <Check size={14} className="text-[#138A63]" />}
          </div>
          <span className="text-[10px] text-[#64748B]">Slide left • Avatar right</span>
        </button>

        {/* Option 2: Content Right */}
        <button
          type="button"
          onClick={() => onChangePosition && onChangePosition('right')}
          className={`flex flex-col p-3 rounded-xl border text-left transition-all ${
            contentPosition === 'right'
              ? 'border-[#138A63] bg-[#E8F5F0]/50 ring-1 ring-[#138A63]/30 shadow-xs'
              : 'border-[#DCE5EA] bg-white hover:border-slate-300 hover:bg-slate-50'
          }`}
        >
          {/* Visual Mini Representation */}
          <div className="w-full h-16 rounded-lg bg-slate-100 border border-slate-200 p-1.5 flex gap-1.5 mb-2.5">
            {/* Presenter Left (35%) */}
            <div className="w-[35%] h-full rounded border border-dashed border-slate-300 bg-white/50 flex items-center justify-center">
              <div className="w-3.5 h-3.5 rounded-full bg-slate-300" />
            </div>
            {/* Presentation Right (65%) */}
            <div className={`w-[65%] h-full rounded flex flex-col justify-center px-1.5 ${
              contentPosition === 'right' ? 'bg-[#138A63]/20 border border-[#138A63]/40' : 'bg-white border border-slate-200'
            }`}>
              <div className="w-6 h-1 bg-[#138A63] rounded-full mb-1" />
              <div className="w-10 h-1 bg-slate-300 rounded-full" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#092C49]">Content Right</span>
            {contentPosition === 'right' && <Check size={14} className="text-[#138A63]" />}
          </div>
          <span className="text-[10px] text-[#64748B]">Avatar left • Slide right</span>
        </button>
      </div>
    </div>
  );
};
