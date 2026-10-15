import React, { useState, useEffect } from 'react';
import { FileText, Mic, Edit3, Check, X, Sparkles, Volume2 } from 'lucide-react';

export const ScriptPanel = ({ 
  script = '', 
  onUpdateScript,
  activeSceneTitle = 'Introduction'
}) => {
  const [activeTab, setActiveTab] = useState('script'); // 'script' | 'voiceover'
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(script);

  useEffect(() => {
    setEditedText(script);
    setIsEditing(false);
  }, [script]);

  const handleSave = () => {
    if (onUpdateScript) {
      onUpdateScript(editedText);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedText(script);
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-xl border border-[#DCE5EA] p-4 shadow-xs space-y-3">
      {/* Top Header & Tabs */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => setActiveTab('script')}
            className={`flex items-center gap-2 pb-1 text-sm font-bold border-b-2 transition-all ${
              activeTab === 'script'
                ? 'border-[#138A63] text-[#138A63]'
                : 'border-transparent text-slate-500 hover:text-[#092C49]'
            }`}
          >
            <FileText size={15} />
            <span>Script</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('voiceover')}
            className={`flex items-center gap-1.5 pb-1 text-sm font-medium border-b-2 transition-all ${
              activeTab === 'voiceover'
                ? 'border-[#138A63] text-[#138A63]'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            <Mic size={14} />
            <span>Voiceover</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-100 text-slate-500 font-semibold">
              Coming Soon
            </span>
          </button>
        </div>

        {/* Action Button */}
        {activeTab === 'script' && (
          <div>
            {isEditing ? (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-2.5 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1"
                >
                  <X size={13} />
                  <span>Cancel</span>
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="px-3 py-1 text-xs font-semibold text-white bg-[#138A63] hover:bg-[#1B9B70] rounded-lg shadow-xs transition-colors flex items-center gap-1"
                >
                  <Check size={13} />
                  <span>Save</span>
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#092C49] bg-[#F5F8FA] hover:bg-[#E8F5F0] hover:text-[#138A63] border border-[#DCE5EA] rounded-lg transition-colors shadow-2xs"
              >
                <Edit3 size={13} />
                <span>Edit Script</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Tab Content */}
      {activeTab === 'script' ? (
        <div className="min-h-[70px]">
          {isEditing ? (
            <textarea
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              rows={3}
              className="w-full text-sm leading-relaxed text-[#092C49] bg-[#F8FAFC] border border-[#138A63] rounded-lg p-3 focus:outline-none focus:ring-1 focus:ring-[#138A63] resize-none"
              placeholder="Enter speech script for this scene..."
              autoFocus
            />
          ) : (
            <div className="relative group">
              <p className="text-sm leading-relaxed text-[#092C49] bg-[#F8FAFC]/50 p-3 rounded-lg border border-transparent group-hover:border-slate-200 transition-colors">
                "{script || 'No script defined for this scene yet.'}"
              </p>
              <div className="mt-1 text-[11px] text-[#64748B] flex items-center gap-2">
                <span className="font-semibold text-slate-700">Narration:</span>
                <span>Scene: {activeSceneTitle}</span>
                <span>•</span>
                <span>Est. reading time: ~{Math.max(5, Math.round((script?.split(' ').length || 0) / 2.5))}s</span>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Voiceover Coming Soon placeholder */
        <div className="p-4 rounded-xl bg-slate-50 border border-dashed border-slate-200 text-center space-y-2">
          <div className="w-8 h-8 rounded-full bg-[#E8F5F0] text-[#138A63] flex items-center justify-center mx-auto">
            <Volume2 size={16} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#092C49]">AI Voice Synthesis</h4>
            <p className="text-[11px] text-[#64748B] max-w-sm mx-auto">
              Multi-speaker Hindi and regional voiceover synthesis will appear here once audio engines are linked.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
