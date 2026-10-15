import React, { useState, useEffect } from 'react';
import { Edit3, Check, X } from 'lucide-react';

export const ScriptPanel = ({ 
  script = '', 
  onUpdateScript
}) => {
  const [activeTab, setActiveTab] = useState('script');
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
    <div className="bg-white rounded-2xl border border-[#E2E8F0] p-4 shadow-2xs space-y-2.5">
      {/* Top Header & Tabs */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
        <div className="flex items-center gap-6">
          <button
            type="button"
            onClick={() => setActiveTab('script')}
            className={`pb-1 text-xs font-bold border-b-2 transition-all ${
              activeTab === 'script'
                ? 'border-[#138A63] text-[#138A63]'
                : 'border-transparent text-slate-400 hover:text-[#0A2540]'
            }`}
          >
            Script
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('voiceover')}
            className={`pb-1 text-xs font-medium border-b-2 transition-all ${
              activeTab === 'voiceover'
                ? 'border-[#138A63] text-[#138A63]'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            Voiceover (Coming Soon)
          </button>
        </div>

        {/* Action Button */}
        {activeTab === 'script' && (
          <div>
            {isEditing ? (
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-2.5 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors flex items-center gap-1"
                >
                  <X size={12} />
                  <span>Cancel</span>
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="px-3 py-1 text-xs font-semibold text-white bg-[#138A63] hover:bg-[#107A57] rounded-lg shadow-2xs transition-colors flex items-center gap-1"
                >
                  <Check size={12} />
                  <span>Save</span>
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-[#0A2540] bg-white hover:bg-slate-50 border border-[#E2E8F0] rounded-lg transition-colors shadow-2xs"
              >
                <Edit3 size={13} className="text-[#0A2540]" />
                <span>Edit Script</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Script Content */}
      <div className="pt-0.5">
        {isEditing ? (
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            rows={3}
            className="w-full text-xs leading-relaxed text-[#0A2540] bg-[#F8FAFC] border border-[#138A63] rounded-lg p-2.5 focus:outline-none resize-none"
            autoFocus
          />
        ) : (
          <p className="text-xs leading-relaxed text-[#0A2540] font-normal">
            {activeTab === 'script' ? script : 'Voiceover synthesis audio tracks will be generated in the next pipeline phase.'}
          </p>
        )}
      </div>
    </div>
  );
};
