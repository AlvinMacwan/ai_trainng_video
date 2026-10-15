import React, { useState } from 'react';
import { Languages, Clock, Users, ShieldAlert, ChevronDown, Check } from 'lucide-react';

const iconMap = {
  Languages,
  Clock,
  Users,
  ShieldAlert,
};

const optionPresets = {
  language: ['Hindi', 'English', 'Spanish', 'German', 'Tamil'],
  duration: ['1 minute', '3 minutes', '5 minutes', '10 minutes'],
  audience: ['Factory Workers', 'New Hires', 'Site Supervisors', 'Corporate Staff'],
  type: ['Safety Training', 'Compliance', 'Standard Operating Procedure (SOP)', 'Equipment Operation']
};

export const TrainingOptions = ({ options = [], onOptionsChange }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleSelect = (id, newValue) => {
    if (onOptionsChange) {
      const updated = options.map(opt => opt.id === id ? { ...opt, value: newValue } : opt);
      onOptionsChange(updated);
    }
    setActiveDropdown(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative">
      {options.map((opt) => {
        const Icon = iconMap[opt.icon] || ShieldAlert;
        const isOpen = activeDropdown === opt.id;
        const presets = optionPresets[opt.id] || [];

        return (
          <div key={opt.id} className="relative">
            <button
              type="button"
              onClick={() => setActiveDropdown(isOpen ? null : opt.id)}
              className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                isOpen 
                  ? 'border-[#138A63] bg-[#E8F5F0]/40 shadow-xs' 
                  : 'border-[#DCE5EA] bg-white hover:border-slate-300 hover:bg-slate-50/70'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-[#F5F8FA] flex items-center justify-center text-[#138A63] flex-shrink-0 border border-[#DCE5EA]">
                  <Icon size={16} />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] font-medium text-[#64748B] uppercase tracking-wider">
                    {opt.label}
                  </span>
                  <span className="block text-sm font-semibold text-[#092C49] truncate">
                    {opt.value}
                  </span>
                </div>
              </div>
              <ChevronDown size={14} className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-[#138A63]' : ''}`} />
            </button>

            {/* Dropdown presets popover */}
            {isOpen && (
              <>
                <div 
                  className="fixed inset-0 z-30" 
                  onClick={() => setActiveDropdown(null)} 
                />
                <div className="absolute top-full left-0 mt-1.5 w-full bg-white border border-[#DCE5EA] rounded-xl shadow-lg z-40 py-1.5 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-2.5 py-1 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Select {opt.label}
                  </div>
                  {presets.map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => handleSelect(opt.id, val)}
                      className={`w-full flex items-center justify-between px-3 py-1.5 text-xs text-left transition-colors ${
                        opt.value === val 
                          ? 'bg-[#E8F5F0] text-[#138A63] font-semibold' 
                          : 'text-[#092C49] hover:bg-slate-50'
                      }`}
                    >
                      <span>{val}</span>
                      {opt.value === val && <Check size={13} className="text-[#138A63]" />}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};
