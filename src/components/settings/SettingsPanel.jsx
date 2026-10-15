import React, { useState } from 'react';
import { SlidersHorizontal, LayoutGrid, Image as ImageIcon, Palette } from 'lucide-react';
import { LayoutSettings } from './LayoutSettings';
import { BackgroundSettings } from './BackgroundSettings';
import { StyleSettings } from './StyleSettings';

export const SettingsPanel = ({
  settings = {},
  onUpdateSettings,
  backgrounds = [],
  styles = [],
  colorThemes = [],
  isMobileDrawer = false,
  onCloseMobileDrawer
}) => {
  const [activeTab, setActiveTab] = useState('layout'); // 'layout' | 'background' | 'style'

  const updateSetting = (key, value) => {
    if (onUpdateSettings) {
      onUpdateSettings({ ...settings, [key]: value });
    }
  };

  return (
    <aside className="w-full lg:w-[340px] flex-shrink-0 bg-white rounded-xl border border-[#DCE5EA] p-5 shadow-xs space-y-5 h-fit select-none">
      {/* Top Header & Tabs */}
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#E8F5F0] text-[#138A63] flex items-center justify-center">
              <SlidersHorizontal size={15} />
            </div>
            <h3 className="text-sm font-bold text-[#092C49]">
              Video Settings
            </h3>
          </div>

          {isMobileDrawer && (
            <button
              type="button"
              onClick={onCloseMobileDrawer}
              className="text-xs text-slate-400 hover:text-[#092C49]"
            >
              Done
            </button>
          )}
        </div>

        {/* 3 Main Tabs: Layout, Background, Style */}
        <div className="grid grid-cols-3 gap-1 p-1 bg-[#F5F8FA] rounded-xl border border-[#DCE5EA] mt-3">
          <button
            type="button"
            onClick={() => setActiveTab('layout')}
            className={`flex items-center justify-center gap-1.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'layout'
                ? 'bg-white text-[#138A63] shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-[#092C49]'
            }`}
          >
            <LayoutGrid size={13} />
            <span>Layout</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('background')}
            className={`flex items-center justify-center gap-1.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'background'
                ? 'bg-white text-[#138A63] shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-[#092C49]'
            }`}
          >
            <ImageIcon size={13} />
            <span>Background</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('style')}
            className={`flex items-center justify-center gap-1.5 py-1.5 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'style'
                ? 'bg-white text-[#138A63] shadow-xs border border-slate-200'
                : 'text-slate-600 hover:text-[#092C49]'
            }`}
          >
            <Palette size={13} />
            <span>Style</span>
          </button>
        </div>
      </div>

      {/* Tab Specific Content */}
      <div className="space-y-5">
        {activeTab === 'layout' && (
          <>
            <LayoutSettings
              contentPosition={settings.contentPosition}
              onChangePosition={(pos) => updateSetting('contentPosition', pos)}
            />
            {/* Aspect ratio & advanced options accessible here too */}
            <div className="pt-2 border-t border-slate-100">
              <StyleSettings
                styles={styles}
                activeStyle={settings.slideStyle}
                onChangeStyle={(st) => updateSetting('slideStyle', st)}
                colorThemes={colorThemes}
                activeColorTheme={settings.colorTheme}
                onChangeColorTheme={(ct) => updateSetting('colorTheme', ct)}
                aspectRatio={settings.aspectRatio}
                onChangeAspectRatio={(ar) => updateSetting('aspectRatio', ar)}
              />
            </div>
          </>
        )}

        {activeTab === 'background' && (
          <div className="space-y-4">
            <BackgroundSettings
              backgrounds={backgrounds}
              activeBackground={settings.activeBackground}
              onChangeBackground={(bgId) => updateSetting('activeBackground', bgId)}
            />
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-500 leading-relaxed">
              Environment backgrounds dynamically cast lighting onto presenter placeholders and presentation card borders.
            </div>
          </div>
        )}

        {activeTab === 'style' && (
          <StyleSettings
            styles={styles}
            activeStyle={settings.slideStyle}
            onChangeStyle={(st) => updateSetting('slideStyle', st)}
            colorThemes={colorThemes}
            activeColorTheme={settings.colorTheme}
            onChangeColorTheme={(ct) => updateSetting('colorTheme', ct)}
            aspectRatio={settings.aspectRatio}
            onChangeAspectRatio={(ar) => updateSetting('aspectRatio', ar)}
          />
        )}
      </div>
    </aside>
  );
};
