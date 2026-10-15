import React from 'react';
import { Check, Image as ImageIcon } from 'lucide-react';
import { FactoryBackground, OfficeBackground, ClassroomBackground } from '../common/VisualAssets';

export const BackgroundSettings = ({ 
  backgrounds = [], 
  activeBackground = 'factory', 
  onChangeBackground 
}) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label className="text-xs font-bold text-[#092C49] uppercase tracking-wider">
          Background
        </label>
        <button 
          type="button" 
          onClick={() => alert('All studio environments are unlocked for this project.')}
          className="text-xs font-semibold text-[#138A63] hover:text-[#1B9B70] transition-colors"
        >
          View All
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2.5">
        {backgrounds.map((bg) => {
          const isSelected = activeBackground === bg.id;

          return (
            <button
              key={bg.id}
              type="button"
              onClick={() => onChangeBackground && onChangeBackground(bg.id)}
              className={`group flex flex-col rounded-xl overflow-hidden border text-left transition-all ${
                isSelected 
                  ? 'border-[#138A63] ring-2 ring-[#138A63]/30 shadow-xs' 
                  : 'border-[#DCE5EA] hover:border-slate-300'
              }`}
            >
              {/* Background Thumbnail Preview */}
              <div className="w-full h-16 relative overflow-hidden bg-slate-900">
                {bg.id === 'factory' && <FactoryBackground />}
                {bg.id === 'office' && <OfficeBackground />}
                {bg.id === 'classroom' && <ClassroomBackground />}

                {/* Selected Check overlay */}
                {isSelected && (
                  <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#138A63] text-white flex items-center justify-center shadow-xs">
                    <Check size={11} strokeWidth={3} />
                  </div>
                )}
              </div>

              {/* Background Label */}
              <div className={`p-1.5 text-center ${isSelected ? 'bg-[#E8F5F0]' : 'bg-white'}`}>
                <span className={`text-[11px] font-bold block truncate ${isSelected ? 'text-[#138A63]' : 'text-[#092C49]'}`}>
                  {bg.name}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
