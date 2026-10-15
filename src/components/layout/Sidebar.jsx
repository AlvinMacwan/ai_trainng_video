import React from 'react';
import { 
  Home, 
  Folder, 
  LayoutGrid, 
  Image as ImageIcon, 
  PlayCircle, 
  Settings as SettingsIcon 
} from 'lucide-react';
import { StudioLogo } from '../common/VisualAssets';

export const Sidebar = ({ 
  currentView = 'create', 
  onNavigate,
  isMobileOpen = false,
  onCloseMobile
}) => {
  const navItems = [
    { id: 'create', label: 'Create Video', icon: Home },
    { id: 'projects', label: 'My Projects', icon: Folder },
    { id: 'templates', label: 'Templates', icon: LayoutGrid },
    { id: 'backgrounds', label: 'Backgrounds', icon: ImageIcon },
    { id: 'media', label: 'Media Library', icon: PlayCircle },
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

      {/* Sidebar Container - sticks flush to the edge with no margins */}
      <aside 
        className={`fixed lg:static top-0 bottom-0 left-0 z-40 w-[220px] flex-shrink-0 bg-[#022D44] text-white flex flex-col justify-between p-4 h-[calc(100vh-68px)] border-r border-[#063B56]/50 relative overflow-hidden transition-transform duration-300 ease-in-out ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Background Emerald Wave Glow at Bottom */}
        <div className="absolute -bottom-10 -left-10 -right-10 h-48 bg-gradient-to-tr from-[#138A63]/30 to-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Navigation list */}
        <div className="space-y-4 relative z-10">
          {/* Mobile close button */}
          <div className="lg:hidden flex items-center justify-between pb-2 border-b border-white/10">
            <span className="text-xs font-semibold text-white/90">Navigation</span>
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
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    isActive 
                      ? 'bg-[#138A63] text-white font-semibold shadow-xs' 
                      : 'text-slate-200/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon size={17} className={isActive ? 'text-white' : 'text-slate-300'} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Promotional Card */}
        <div className="relative z-10 pt-4">
          <div className="rounded-2xl bg-[#063B56]/80 border border-white/15 p-4 backdrop-blur-md shadow-md text-left space-y-2.5">
            <StudioLogo size={34} />

            <div className="space-y-1">
              <h4 className="text-xs font-bold text-white tracking-tight">
                AI Training Studio
              </h4>
              <p className="text-[11px] text-slate-300 leading-relaxed font-normal">
                Turn your ideas into professional training videos.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
