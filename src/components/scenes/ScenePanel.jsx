import React from 'react';
import { Plus, Clapperboard } from 'lucide-react';
import { SceneCard } from './SceneCard';

export const ScenePanel = ({ 
  scenes = [], 
  activeSceneId, 
  onSelectScene, 
  onAddScene,
  onDuplicateScene,
  onDeleteScene,
  onRenameScene
}) => {
  return (
    <div className="bg-white rounded-xl border border-[#DCE5EA] p-4 shadow-xs flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Clapperboard size={16} className="text-[#138A63]" />
          <h3 className="text-sm font-bold text-[#092C49]">
            Scenes ({scenes.length})
          </h3>
        </div>
        <span className="text-[11px] font-medium text-[#64748B]">
          Timeline Order
        </span>
      </div>

      {/* Scene list container */}
      <div className="space-y-2.5 flex-1 overflow-y-auto pr-0.5 max-h-[460px]">
        {scenes.map((scene) => (
          <SceneCard
            key={scene.id}
            scene={scene}
            isActive={scene.id === activeSceneId}
            onSelect={onSelectScene}
            onDuplicate={onDuplicateScene}
            onDelete={onDeleteScene}
            onRename={onRenameScene}
          />
        ))}
      </div>

      {/* Add Scene Button */}
      <button
        type="button"
        onClick={onAddScene}
        className="mt-3 w-full flex items-center justify-center gap-2 py-2.5 px-3 border border-dashed border-[#DCE5EA] hover:border-[#138A63] text-sm font-semibold text-[#092C49] hover:text-[#138A63] hover:bg-[#E8F5F0]/30 rounded-xl transition-all group"
      >
        <Plus size={16} className="text-[#64748B] group-hover:text-[#138A63] transition-colors" />
        <span>Add Scene</span>
      </button>
    </div>
  );
};
