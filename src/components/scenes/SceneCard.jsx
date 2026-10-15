import React, { useState } from 'react';
import { MoreVertical, Copy, Trash2, Edit3 } from 'lucide-react';
import { SceneThumbnail } from '../common/VisualAssets';

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
      className={`group relative flex items-center justify-between p-2 rounded-xl border transition-all cursor-pointer ${
        isActive 
          ? 'border-2 border-[#138A63] bg-white shadow-2xs' 
          : 'border-[#E2E8F0] bg-white hover:border-slate-300'
      }`}
    >
      <div className="flex items-center gap-2.5 min-w-0 flex-1">
        {/* Scene Thumbnail with Number Badge */}
        <SceneThumbnail sceneNumber={scene.number} className="w-14 h-10 rounded-lg" />

        {/* Scene Info */}
        <div className="min-w-0 flex-1">
          <span className={`block text-xs font-bold truncate ${isActive ? 'text-[#0A2540]' : 'text-[#0A2540]'}`}>
            {scene.title}
          </span>
          <span className="block text-[11px] text-slate-400 font-medium">
            {scene.duration}
          </span>
        </div>
      </div>

      {/* Menu / Actions */}
      <div className="relative flex-shrink-0 ml-1.5" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={() => setShowMenu(!showMenu)}
          className="p-1 rounded text-slate-400 hover:text-[#0A2540] transition-colors"
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
            <div className="absolute right-0 top-full mt-1 w-32 bg-white border border-[#E2E8F0] rounded-xl shadow-lg z-40 py-1 text-xs">
              <button
                type="button"
                onClick={() => {
                  setShowMenu(false);
                  onDuplicate && onDuplicate(scene.id);
                }}
                className="w-full flex items-center gap-2 px-3 py-1.5 text-slate-700 hover:bg-slate-50 text-left"
              >
                <Copy size={12} className="text-slate-400" />
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
                <Edit3 size={12} className="text-slate-400" />
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
                <Trash2 size={12} />
                <span>Delete</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
