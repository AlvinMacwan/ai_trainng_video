import React, { useState } from 'react';
import { 
  ChevronRight, 
  ChevronDown, 
  Settings as GearIcon, 
  Check, 
  Monitor,
  User,
  PanelRightClose,
  SlidersHorizontal
} from 'lucide-react';
import { FactoryBackground, OfficeBackground, ClassroomBackground } from '../common/VisualAssets';

export const SettingsPanel = ({
  settings = {},
  onUpdateSettings,
  isOpen = true,
  onToggleOpen
}) => {
  const [activeTab, setActiveTab] = useState('layout'); // 'layout' | 'background' | 'style'

  const updateSetting = (key, value) => {
    if (onUpdateSettings) {
      onUpdateSettings({ ...settings, [key]: value });
    }
  };

  const contentPosition = settings.contentPosition || 'left';
  const activeBackground = settings.activeBackground || 'factory';
  const slideStyle = settings.slideStyle || 'modern';
  const colorTheme = settings.colorTheme || 'green';

  return (
    <>
      {/* Sliding Settings Drawer / Sidebar */}
      <aside 
        className={`bg-white border-l border-[#E2E8F0] h-[calc(100vh-68px)] flex flex-col justify-between transition-all duration-300 ease-in-out select-none flex-shrink-0 z-30 ${
          isOpen ? 'w-[335px] translate-x-0 opacity-100 shadow-sm' : 'w-0 translate-x-full opacity-0 pointer-events-none border-l-0 overflow-hidden'
        }`}
      >
        <div className="w-[335px] flex flex-col h-full">
          {/* Top Tabs with Collapse Slide Button */}
          <div className="p-4 pb-3 border-b border-[#E2E8F0] flex items-center justify-between bg-white flex-shrink-0">
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setActiveTab('layout')}
                className={`pb-1 text-xs font-bold border-b-2 transition-all ${
                  activeTab === 'layout'
                    ? 'border-[#138A63] text-[#138A63]'
                    : 'border-transparent text-slate-400 hover:text-[#0A2540]'
                }`}
              >
                Layout
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('background')}
                className={`pb-1 text-xs font-medium border-b-2 transition-all ${
                  activeTab === 'background'
                    ? 'border-[#138A63] text-[#138A63]'
                    : 'border-transparent text-slate-400 hover:text-[#0A2540]'
                }`}
              >
                Background
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('style')}
                className={`pb-1 text-xs font-medium border-b-2 transition-all ${
                  activeTab === 'style'
                    ? 'border-[#138A63] text-[#138A63]'
                    : 'border-transparent text-slate-400 hover:text-[#0A2540]'
                }`}
              >
                Style
              </button>
            </div>

            {/* Toggle Slide Close Button */}
            <button
              type="button"
              onClick={onToggleOpen}
              className="p-1 rounded-lg text-slate-400 hover:text-[#0A2540] hover:bg-slate-100 transition-colors"
              title="Collapse settings panel"
              aria-label="Collapse settings panel"
            >
              <PanelRightClose size={17} />
            </button>
          </div>

          {/* Scrollable Customization Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-5">
            {/* 1. Content Position Section */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#0A2540]">
                Content Position
              </h4>

              <div className="grid grid-cols-2 gap-2.5">
                {/* Content Left */}
                <button
                  type="button"
                  onClick={() => updateSetting('contentPosition', 'left')}
                  className={`flex flex-col p-2.5 rounded-xl border text-left transition-all ${
                    contentPosition === 'left'
                      ? 'border-2 border-[#138A63] bg-[#E8F5F0]/20'
                      : 'border-[#E2E8F0] bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="w-full h-12 rounded-lg bg-slate-100 p-1 flex items-center justify-between gap-1 mb-2">
                    <div className="w-[58%] h-full rounded bg-[#2C3E50]" />
                    <div className="w-[38%] h-full rounded flex items-center justify-center text-slate-400">
                      <User size={13} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#0A2540]">Content Left</span>
                    {contentPosition === 'left' && <Check size={12} className="text-[#138A63]" />}
                  </div>
                </button>

                {/* Content Right */}
                <button
                  type="button"
                  onClick={() => updateSetting('contentPosition', 'right')}
                  className={`flex flex-col p-2.5 rounded-xl border text-left transition-all ${
                    contentPosition === 'right'
                      ? 'border-2 border-[#138A63] bg-[#E8F5F0]/20'
                      : 'border-[#E2E8F0] bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="w-full h-12 rounded-lg bg-slate-100 p-1 flex items-center justify-between gap-1 mb-2">
                    <div className="w-[38%] h-full rounded flex items-center justify-center text-slate-400">
                      <User size={13} />
                    </div>
                    <div className="w-[58%] h-full rounded bg-[#2C3E50]" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-[#0A2540]">Content Right</span>
                    {contentPosition === 'right' && <Check size={12} className="text-[#138A63]" />}
                  </div>
                </button>
              </div>
            </div>

            {/* 2. Background Section */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-[#0A2540]">
                  Background
                </h4>
                <button 
                  type="button" 
                  onClick={() => alert('All studio environments unlocked.')}
                  className="text-[11px] font-semibold text-[#138A63] hover:underline"
                >
                  View All
                </button>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {/* Factory */}
                <button
                  type="button"
                  onClick={() => updateSetting('activeBackground', 'factory')}
                  className="flex flex-col text-center group"
                >
                  <div className={`w-full h-14 rounded-xl overflow-hidden relative border transition-all ${
                    activeBackground === 'factory' ? 'border-2 border-[#138A63]' : 'border-[#E2E8F0]'
                  }`}>
                    <FactoryBackground />
                    {activeBackground === 'factory' && (
                      <div className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-[#138A63] text-white flex items-center justify-center">
                        <Check size={9} strokeWidth={3} />
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] font-medium text-slate-600 mt-1">Factory</span>
                </button>

                {/* Office */}
                <button
                  type="button"
                  onClick={() => updateSetting('activeBackground', 'office')}
                  className="flex flex-col text-center group"
                >
                  <div className={`w-full h-14 rounded-xl overflow-hidden relative border transition-all ${
                    activeBackground === 'office' ? 'border-2 border-[#138A63]' : 'border-[#E2E8F0]'
                  }`}>
                    <OfficeBackground />
                    {activeBackground === 'office' && (
                      <div className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-[#138A63] text-white flex items-center justify-center">
                        <Check size={9} strokeWidth={3} />
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] font-medium text-slate-600 mt-1">Office</span>
                </button>

                {/* Classroom */}
                <button
                  type="button"
                  onClick={() => updateSetting('activeBackground', 'classroom')}
                  className="flex flex-col text-center group"
                >
                  <div className={`w-full h-14 rounded-xl overflow-hidden relative border transition-all ${
                    activeBackground === 'classroom' ? 'border-2 border-[#138A63]' : 'border-[#E2E8F0]'
                  }`}>
                    <ClassroomBackground />
                    {activeBackground === 'classroom' && (
                      <div className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-[#138A63] text-white flex items-center justify-center">
                        <Check size={9} strokeWidth={3} />
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] font-medium text-slate-600 mt-1">Classroom</span>
                </button>
              </div>
            </div>

            {/* 3. Slide Style Section */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#0A2540]">
                Slide Style
              </h4>

              <div className="grid grid-cols-3 gap-2">
                {/* Modern */}
                <button
                  type="button"
                  onClick={() => updateSetting('slideStyle', 'modern')}
                  className="flex flex-col text-center group"
                >
                  <div className={`w-full h-12 rounded-xl p-1 relative flex flex-col justify-center border transition-all bg-[#0B2A3A] overflow-hidden ${
                    slideStyle === 'modern' ? 'border-2 border-[#138A63]' : 'border-[#E2E8F0]'
                  }`}>
                    <div className="bg-white/90 rounded p-1 flex items-center gap-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#138A63]" />
                      <div className="w-5 h-1 bg-slate-400 rounded-full" />
                    </div>
                    {slideStyle === 'modern' && (
                      <div className="absolute top-1 right-1 w-3 h-3 rounded-full bg-[#138A63] text-white flex items-center justify-center">
                        <Check size={8} strokeWidth={3} />
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] font-medium text-slate-600 mt-1">Modern</span>
                </button>

                {/* Minimal */}
                <button
                  type="button"
                  onClick={() => updateSetting('slideStyle', 'minimal')}
                  className="flex flex-col text-center group"
                >
                  <div className={`w-full h-12 rounded-xl p-1 relative flex flex-col justify-center border transition-all bg-slate-100 overflow-hidden ${
                    slideStyle === 'minimal' ? 'border-2 border-[#138A63]' : 'border-[#E2E8F0]'
                  }`}>
                    <div className="bg-white rounded border border-slate-300 p-1 flex items-center gap-1">
                      <div className="w-4 h-1 bg-slate-800 rounded-full" />
                    </div>
                    {slideStyle === 'minimal' && (
                      <div className="absolute top-1 right-1 w-3 h-3 rounded-full bg-[#138A63] text-white flex items-center justify-center">
                        <Check size={8} strokeWidth={3} />
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] font-medium text-slate-600 mt-1">Minimal</span>
                </button>

                {/* Corporate */}
                <button
                  type="button"
                  onClick={() => updateSetting('slideStyle', 'corporate')}
                  className="flex flex-col text-center group"
                >
                  <div className={`w-full h-12 rounded-xl p-1 relative flex flex-col justify-center border transition-all bg-[#1E3A4C] overflow-hidden ${
                    slideStyle === 'corporate' ? 'border-2 border-[#138A63]' : 'border-[#E2E8F0]'
                  }`}>
                    <div className="bg-[#112433] border-t-2 border-t-[#138A63] rounded p-1 flex items-center gap-1">
                      <div className="w-4 h-1 bg-white/60 rounded-full" />
                    </div>
                    {slideStyle === 'corporate' && (
                      <div className="absolute top-1 right-1 w-3 h-3 rounded-full bg-[#138A63] text-white flex items-center justify-center">
                        <Check size={8} strokeWidth={3} />
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] font-medium text-slate-600 mt-1">Corporate</span>
                </button>
              </div>
            </div>

            {/* 4. Color Theme Section */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#0A2540]">
                Color Theme
              </h4>

              <div className="flex items-center gap-3">
                {/* Navy Swatch */}
                <button
                  type="button"
                  onClick={() => updateSetting('colorTheme', 'navy')}
                  className="relative"
                  title="Navy Theme"
                >
                  <div className={`w-6 h-6 rounded-full bg-[#0B253A] transition-all ${
                    colorTheme === 'navy' ? 'ring-2 ring-offset-2 ring-[#0B253A]' : ''
                  }`} />
                </button>

                {/* Green Swatch */}
                <button
                  type="button"
                  onClick={() => updateSetting('colorTheme', 'green')}
                  className="relative"
                  title="Green Theme"
                >
                  <div className={`w-6 h-6 rounded-full bg-[#138A63] transition-all flex items-center justify-center ${
                    colorTheme === 'green' ? 'ring-2 ring-offset-2 ring-[#138A63]' : ''
                  }`}>
                    {colorTheme === 'green' && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                </button>

                {/* Light Swatch */}
                <button
                  type="button"
                  onClick={() => updateSetting('colorTheme', 'light')}
                  className="relative"
                  title="Light Theme"
                >
                  <div className={`w-6 h-6 rounded-full bg-[#D4E7DE] transition-all ${
                    colorTheme === 'light' ? 'ring-2 ring-offset-2 ring-[#D4E7DE]' : ''
                  }`} />
                </button>
              </div>
            </div>

            {/* 5. Aspect Ratio Section */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-[#0A2540]">
                Aspect Ratio
              </h4>

              <div className="flex items-center justify-between p-2.5 px-3 rounded-xl border border-[#E2E8F0] bg-white">
                <div className="flex items-center gap-2.5">
                  <Monitor size={16} className="text-slate-400" />
                  <div>
                    <span className="block text-xs font-bold text-[#0A2540]">
                      16:9
                    </span>
                    <span className="block text-[10px] text-slate-400">
                      (YouTube / Presentations)
                    </span>
                  </div>
                </div>
                <ChevronDown size={14} className="text-slate-400" />
              </div>
            </div>

            {/* 6. Advanced Options Section */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => alert('Advanced settings: Resolution 1080p, Auto-audio leveling enabled.')}
                className="w-full flex items-center justify-between p-2.5 px-3 rounded-xl border border-[#E2E8F0] bg-white hover:bg-slate-50 text-left transition-colors"
              >
                <div className="flex items-center gap-2">
                  <GearIcon size={14} className="text-slate-500" />
                  <span className="text-xs font-semibold text-[#0A2540]">
                    Advanced Options
                  </span>
                </div>
                <ChevronRight size={14} className="text-slate-400" />
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Floating Toggle Button when closed */}
      {!isOpen && (
        <button
          type="button"
          onClick={onToggleOpen}
          className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-white border-l border-y border-[#E2E8F0] shadow-md py-3 px-2 rounded-l-xl flex flex-col items-center gap-2 text-[#0A2540] hover:text-[#138A63] hover:bg-slate-50 transition-all group"
          title="Open customization settings"
          aria-label="Open customization settings"
        >
          <SlidersHorizontal size={16} className="text-[#138A63] group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-bold tracking-wider [writing-mode:vertical-lr] rotate-180 uppercase text-slate-500 group-hover:text-[#138A63]">
            Customize Settings
          </span>
        </button>
      )}
    </>
  );
};
