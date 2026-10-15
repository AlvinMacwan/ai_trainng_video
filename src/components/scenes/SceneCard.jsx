import React, { useState } from 'react';
import { MoreVertical, Copy, Trash2, Edit3 } from 'lucide-react';
import { SlideIllustration } from '../common/VisualAssets';

export const SceneCard = ({ 
  scene, 
  isActive = false, 
  onSelect,
  onDuplicate,
  onDelete,
  onRename
}) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      onClick={() => onSelect && onSelect(scene.id)}
      className={`group relative flex items-center justify-between p-2.5 rounded-xl border transition-all cursor-pointer ${
        isActive 
          ? 'border-[#138A63] bg-[#E8F5F0]/35 shadow-xs ring-1 ring-[#138A63]/30' 
          : 'border-[#DCE5EA] bg-white hover:border-slate-300 hover:bg-slate-50/70'
      }`}
    >
      <div className="flex items-center gap-3 min-w-0 flex-1">
        {/* Scene Thumbnail */}
        <div className="relative w-14 h-10 rounded-lg overflow-hidden bg-slate-900 flex-shrink-0 border border-slate-200">
          <div className="w-full h-full scale-100 flex items-center justify-center">
            <SlideIllustration type={scene.slide?.imageType || 'extinguisher'} className="w-full h-full p-1" />
          </div>
          {/* Active indicator dot */}
          {isActive && (
            <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-[#138A63] ring-1 ring-white" />
          )}
        </div>

        {/* Scene Info */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-[#092C49]">
              {scene.number}.
            </span>
            <span className={`text-xs font-semibold truncate ${isActive ? 'text-[#138A63]' : 'text-[#092C49]'}`}>
              {scene.title}
            </span>
          </div>
          <span className="text-[11px] font-medium text-[#64748B]">
            {scene.duration}
          </span>
        </div>
      </div>

      {/* Menu / Actions */}
      <div className="relative flex-shrink-0 ml-2" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={() => setShowMenu(!showMenu)}
          className="p-1 rounded-md text-slate-400 hover:text-[#092C49] hover:bg-slate-100 transition-colors"
          title="Scene options"
          aria-label="Scene options"
        >
          <MoreVertical size={15} />
        </button>

        {showMenu && (
          <>
            <div 
              className="fixed inset-0 z-30" 
              onClick={() => setShowMenu(false)} 
            />
            <div className="absolute right-0 top-full mt-1 w-36 bg-white border border-[#DCE5EA] rounded-xl shadow-lg z-40 py-1 text-xs">
              <button
                type="button"
                onClick={() => {
                  setShowMenu(false);
                  onDuplicate && onDuplicate(scene.id);
                }}
                className="w-full flex items-center gap-2 px-3 py-1.5 text-slate-700 hover:bg-slate-50 text-left"
              >
                <Copy size={13} className="text-slate-400" />
                <span>Duplicate</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowMenu(false);
                  const newName = prompt('Enter new scene title:', scene.title);
                  if (newName && onRename) onRename(scene.id, newName);
                }}
                className="w-full flex items-center gap-2 px-3 py-1.5 text-slate-700 hover:bg-slate-50 text-left"
              >
                <Edit3 size={13} className="text-slate-400" />
                <span>Rename</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowMenu(false);
                  onDelete && onDelete(scene.id);
                }}
                className="w-full flex items-center gap-2 px-3 py-1.5 text-red-600 hover:bg-red-50 text-left border-t border-slate-100"
              >
                <Trash2 size={13} />
                <span>Delete</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
