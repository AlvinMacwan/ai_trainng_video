import React from 'react';
import { 
  Video, 
  FolderKanban, 
  LayoutTemplate, 
  Image as ImageIcon, 
  FolderOpen, 
  Settings as SettingsIcon,
  Sparkles,
  ChevronRight
} from 'lucide-react';

export const Sidebar = ({ 
  currentView = 'create', 
  onNavigate,
  isMobileOpen = false,
  onCloseMobile
}) => {
  const navItems = [
    { id: 'create', label: 'Create Video', icon: Video },
    { id: 'projects', label: 'My Projects', icon: FolderKanban },
    { id: 'templates', label: 'Templates', icon: LayoutTemplate, badge: 'Soon' },
    { id: 'backgrounds', label: 'Backgrounds', icon: ImageIcon },
    { id: 'media', label: 'Media Library', icon: FolderOpen },
    { id: 'settings', label: 'Settings', icon: SettingsIcon },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-40 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`fixed lg:static top-0 bottom-0 left-0 z-50 w-[230px] flex-shrink-0 bg-[#022D44] text-white flex flex-col justify-between p-4 rounded-r-2xl shadow-xl lg:shadow-none transition-transform duration-300 ease-in-out ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Navigation list */}
        <div className="space-y-6">
          {/* Mobile close / header */}
          <div className="lg:hidden flex items-center justify-between pb-2 border-b border-white/10">
            <span className="text-sm font-semibold text-white/90">Navigation</span>
            <button 
              onClick={onCloseMobile}
              className="text-xs text-slate-400 hover:text-white px-2 py-1 rounded bg-white/5"
            >
              Close
            </button>
          </div>

          <nav className="space-y-1.5" aria-label="Sidebar Navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    if (onNavigate) onNavigate(item.id);
                    if (onCloseMobile) onCloseMobile();
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all group ${
                    isActive 
                      ? 'bg-[#138A63] text-white shadow-md' 
                      : 'text-slate-200/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} className={isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'} />
                    <span>{item.label}</span>
                  </div>

                  {item.badge && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-emerald-300 font-semibold uppercase tracking-wider">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Promotional Card */}
        <div className="mt-auto pt-4">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/15 p-3.5 backdrop-blur-xs text-left shadow-lg">
            {/* Subtle glow accent */}
            <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-[#138A63]/30 rounded-full blur-xl pointer-events-none" />

            <div className="flex items-center gap-2 mb-2">
              <div className="p-1 rounded-md bg-[#138A63] text-white">
                <Sparkles size={13} />
              </div>
              <span className="text-xs font-semibold text-white tracking-wide">
                AI Training Studio
              </span>
            </div>

            <p className="text-xs text-slate-200/90 leading-relaxed font-normal">
              Turn your ideas into professional training videos.
            </p>

            <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-emerald-300 font-medium cursor-pointer hover:text-emerald-200">
              <span>Explore presets</span>
              <ChevronRight size={13} />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
