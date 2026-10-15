import React from 'react';
import { Plus } from 'lucide-react';
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
    <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4 shadow-2xs flex flex-col justify-between space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between pb-1">
        <h3 className="text-sm font-bold text-[#0A2540]">
          Scenes ({scenes.length})
        </h3>
        {/* 6-dots grid handle icon */}
        <div className="flex items-center gap-0.5 text-slate-300">
          <div className="w-1 h-1 rounded-full bg-slate-400" />
          <div className="w-1 h-1 rounded-full bg-slate-400" />
          <div className="w-1 h-1 rounded-full bg-slate-400" />
        </div>
      </div>

      {/* Scene list container */}
      <div className="space-y-2 flex-1">
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

      {/* Add Scene Button matching reference */}
      <button
        type="button"
        onClick={onAddScene}
        className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#F1F5F9] hover:bg-slate-200/80 text-xs font-semibold text-[#138A63] rounded-xl transition-all"
      >
        <Plus size={14} className="stroke-[2.5]" />
        <span>Add Scene</span>
      </button>
    </div>
  );
};
