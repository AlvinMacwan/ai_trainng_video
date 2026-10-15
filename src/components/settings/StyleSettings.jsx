import React from 'react';
import { Check, Monitor, ChevronRight, Settings as GearIcon } from 'lucide-react';

export const StyleSettings = ({ 
  styles = [], 
  activeStyle = 'modern', 
  onChangeStyle,
  colorThemes = [],
  activeColorTheme = 'green',
  onChangeColorTheme,
  aspectRatio = '16:9',
  onChangeAspectRatio
}) => {
  return (
    <div className="space-y-5">
      {/* 1. Slide Style Selection */}
      <div className="space-y-2.5">
        <label className="text-xs font-bold text-[#092C49] uppercase tracking-wider block">
          Slide Style
        </label>
        
        <div className="grid grid-cols-3 gap-2">
          {styles.map((st) => {
            const isSelected = activeStyle === st.id;

            return (
              <button
                key={st.id}
                type="button"
                onClick={() => onChangeStyle && onChangeStyle(st.id)}
                className={`flex flex-col rounded-xl p-2 border text-left transition-all ${
                  isSelected 
                    ? 'border-[#138A63] bg-[#E8F5F0]/50 ring-1 ring-[#138A63]/30 shadow-xs' 
                    : 'border-[#DCE5EA] bg-white hover:border-slate-300'
                }`}
              >
                {/* Miniature Style Graphic */}
                <div className="w-full h-11 rounded-md mb-1.5 flex flex-col justify-center px-1.5 overflow-hidden border">
                  {st.id === 'modern' && (
                    <div className="bg-white/90 border border-[#138A63]/30 rounded p-1 shadow-2xs">
                      <div className="w-4 h-1 bg-[#138A63] rounded-full mb-0.5" />
                      <div className="w-7 h-1 bg-slate-300 rounded-full" />
                    </div>
                  )}
                  {st.id === 'minimal' && (
                    <div className="bg-white border border-slate-300 rounded p-1">
                      <div className="w-5 h-1 bg-slate-900 rounded-full mb-0.5" />
                      <div className="w-6 h-1 bg-slate-200 rounded-full" />
                    </div>
                  )}
                  {st.id === 'corporate' && (
                    <div className="bg-[#063B56] border-t-2 border-t-[#138A63] rounded p-1">
                      <div className="w-5 h-1 bg-[#38BDF8] rounded-full mb-0.5" />
                      <div className="w-6 h-1 bg-white/40 rounded-full" />
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className={`text-xs font-bold ${isSelected ? 'text-[#138A63]' : 'text-[#092C49]'}`}>
                    {st.name}
                  </span>
                  {isSelected && <Check size={12} className="text-[#138A63]" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Color Theme Selection */}
      <div className="space-y-2.5">
        <label className="text-xs font-bold text-[#092C49] uppercase tracking-wider block">
          Color Theme
        </label>

        <div className="flex items-center gap-3">
          {colorThemes.map((theme) => {
            const isSelected = activeColorTheme === theme.id;

            return (
              <button
                key={theme.id}
                type="button"
                onClick={() => onChangeColorTheme && onChangeColorTheme(theme.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all ${
                  isSelected 
                    ? 'border-[#138A63] bg-[#E8F5F0] ring-2 ring-[#138A63]/30' 
                    : 'border-[#DCE5EA] bg-white hover:border-slate-300'
                }`}
              >
                {/* Circular color swatch */}
                <span 
                  className="w-4 h-4 rounded-full border border-black/10 flex items-center justify-center shadow-2xs"
                  style={{ backgroundColor: theme.hex }}
                >
                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                </span>
                <span className={`text-xs font-bold ${isSelected ? 'text-[#138A63]' : 'text-[#092C49]'}`}>
                  {theme.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Aspect Ratio Section */}
      <div className="space-y-2">
        <label className="text-xs font-bold text-[#092C49] uppercase tracking-wider block">
          Aspect Ratio
        </label>
        
        <div className="flex items-center justify-between p-3 rounded-xl border border-[#DCE5EA] bg-white shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#E8F5F0] text-[#138A63] flex items-center justify-center">
              <Monitor size={17} />
            </div>
            <div>
              <span className="block text-xs font-bold text-[#092C49]">
                {aspectRatio}
              </span>
              <span className="block text-[11px] text-[#64748B]">
                YouTube / Presentations
              </span>
            </div>
          </div>

          <span className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 font-semibold text-slate-600">
            Default
          </span>
        </div>
      </div>

      {/* 4. Advanced Options Item */}
      <div className="pt-2 border-t border-slate-100">
        <button
          type="button"
          onClick={() => alert('Advanced generation parameters: 1080p rendering, multi-pass TTS normalization, standard corporate watermark.')}
          className="w-full flex items-center justify-between p-2.5 rounded-xl border border-[#DCE5EA] bg-[#F8FAFC] hover:bg-slate-100/80 text-left transition-colors group"
        >
          <div className="flex items-center gap-2.5">
            <GearIcon size={16} className="text-[#64748B] group-hover:text-[#092C49] transition-colors" />
            <span className="text-xs font-bold text-[#092C49]">
              Advanced Options
            </span>
          </div>
          <ChevronRight size={15} className="text-slate-400 group-hover:text-[#092C49] group-hover:translate-x-0.5 transition-all" />
        </button>
      </div>
    </div>
  );
};
