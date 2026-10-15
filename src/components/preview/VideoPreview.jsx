import React, { useState, useEffect, useRef } from 'react';
import { User, Sparkles, AlertCircle } from 'lucide-react';
import { 
  FactoryBackground, 
  OfficeBackground, 
  ClassroomBackground,
  SlideIllustration 
} from '../common/VisualAssets';
import { PlayerControls } from './PlayerControls';

export const VideoPreview = ({ 
  activeScene, 
  settings = {},
  themeColors
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  const duration = activeScene?.durationSec || 20;

  // Reset timer on scene change
  useEffect(() => {
    setCurrentTime(0);
    setIsPlaying(false);
  }, [activeScene?.id]);

  // Video playback simulation timer
  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(err => console.log(err));
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Render chosen background
  const renderBackground = () => {
    switch (settings.activeBackground) {
      case 'office':
        return <OfficeBackground />;
      case 'classroom':
        return <ClassroomBackground />;
      case 'factory':
      default:
        return <FactoryBackground />;
    }
  };

  // Style variances
  const isMinimal = settings.slideStyle === 'minimal';
  const isCorporate = settings.slideStyle === 'corporate';

  // Layout arrangement (left = presentation left, presenter right; right = presentation right, presenter left)
  const isContentRight = settings.contentPosition === 'right';

  const accentColor = themeColors?.accent || '#138A63';

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-[#DCE5EA] shadow-md group select-none"
    >
      {/* Dynamic Rendered Canvas Background */}
      <div className="absolute inset-0 z-0">
        {renderBackground()}
        {/* Soft vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
      </div>

      {/* Main Studio Overlay Content Canvas */}
      <div className="relative z-10 w-full h-full p-4 sm:p-6 lg:p-7 flex items-center justify-center">
        <div className={`w-full h-full flex items-center gap-4 sm:gap-6 ${isContentRight ? 'flex-row-reverse' : 'flex-row'}`}>
          
          {/* 1. Floating Presentation Card (~65-70% width) */}
          <div 
            className={`w-[66%] h-[82%] rounded-2xl flex flex-col justify-between p-5 sm:p-6 transition-all duration-300 shadow-xl backdrop-blur-md ${
              isMinimal 
                ? 'bg-white/95 border-2 border-slate-300 text-slate-900 shadow-2xl' 
                : isCorporate
                ? 'bg-[#063B56]/95 border-t-4 border-t-[#138A63] border-x border-b border-white/10 text-white shadow-2xl'
                : 'bg-white/90 border border-white/60 text-[#092C49] shadow-2xl'
            }`}
          >
            {/* Top row: Category Pill & Scene index */}
            <div className="flex items-center justify-between">
              <span 
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase transition-colors"
                style={{
                  backgroundColor: isCorporate ? '#022D44' : (themeColors?.pillBg || '#E8F5F0'),
                  color: isCorporate ? '#38BDF8' : (themeColors?.pillText || '#138A63'),
                  border: `1px solid ${isCorporate ? 'rgba(56,189,248,0.3)' : 'rgba(19,138,99,0.2)'}`
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                {activeScene?.slide?.pill || 'FIRE SAFETY TRAINING'}
              </span>

              <span className={`text-[11px] font-semibold tracking-wide ${isCorporate ? 'text-slate-400' : 'text-slate-400'}`}>
                SCENE {activeScene?.number || 1}
              </span>
            </div>

            {/* Middle body: Headlines & Visual Graphic */}
            <div className="my-auto grid grid-cols-12 gap-4 items-center">
              {/* Text content */}
              <div className="col-span-7 sm:col-span-8 space-y-2">
                <h3 className={`text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight leading-tight ${isCorporate ? 'text-white' : 'text-[#092C49]'}`}>
                  {activeScene?.slide?.headline || 'Stay Safe'}{' '}
                  <span 
                    style={{ color: accentColor }}
                    className="font-black underline decoration-2 underline-offset-4 decoration-emerald-400/40"
                  >
                    {activeScene?.slide?.accentText || 'At Work'}
                  </span>
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed line-clamp-3 font-normal ${isCorporate ? 'text-slate-300' : 'text-[#475569]'}`}>
                  {activeScene?.slide?.description || 'Learn essential fire safety practices to protect yourself and your workplace.'}
                </p>
              </div>

              {/* Graphic Illustration Card on the right side of slide */}
              <div className="col-span-5 sm:col-span-4 flex items-center justify-center">
                <div className="w-full h-24 sm:h-28 rounded-xl shadow-inner overflow-hidden border border-black/10">
                  <SlideIllustration 
                    type={activeScene?.slide?.imageType || 'extinguisher'} 
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            {/* Bottom footnote / safety watermark */}
            <div className={`pt-2 border-t text-[10px] font-medium flex items-center justify-between ${
              isCorporate ? 'border-white/10 text-slate-400' : 'border-slate-200/80 text-slate-400'
            }`}>
              <span>AI Training Studio • Standard Protocol</span>
              <span className="font-mono">{activeScene?.duration || '0:00 - 0:20'}</span>
            </div>
          </div>

          {/* 2. AI Presenter Placeholder Area (Right side of canvas) */}
          <div className="w-[34%] h-[82%] rounded-2xl border-2 border-dashed border-white/40 bg-black/25 backdrop-blur-xs flex flex-col items-center justify-center p-4 text-center text-white/90 shadow-lg relative group/presenter">
            {/* Subtle glow */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/80 mb-3 shadow-inner group-hover/presenter:scale-105 transition-transform">
              <User size={34} className="stroke-[1.5]" />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center gap-1.5">
                <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                  AI Presenter
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-medium">
                  Soon
                </span>
              </div>
              <p className="text-[11px] text-slate-300 max-w-[150px] leading-tight">
                Avatar placeholder location for synthesized narration
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Video Player Controls (Bottom) */}
      <PlayerControls
        isPlaying={isPlaying}
        onTogglePlay={() => setIsPlaying(!isPlaying)}
        duration={duration}
        currentTime={currentTime}
        onSeek={(newTime) => setCurrentTime(newTime)}
        onToggleFullscreen={toggleFullscreen}
        isFullscreen={isFullscreen}
      />
    </div>
  );
};
