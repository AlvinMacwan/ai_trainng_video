import React, { useState, useEffect, useRef } from 'react';
import { User } from 'lucide-react';
import { 
  FactoryBackground, 
  OfficeBackground, 
  ClassroomBackground,
  ExtinguisherSprayGraphic 
} from '../common/VisualAssets';
import { PlayerControls } from './PlayerControls';

export const VideoPreview = ({ 
  activeScene, 
  settings = {},
  themeColors
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
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
    } else {
      document.exitFullscreen();
    }
  };

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

  const isContentRight = settings.contentPosition === 'right';
  const isCorporate = settings.slideStyle === 'corporate';
  const isMinimal = settings.slideStyle === 'minimal';
  const accentColor = themeColors?.accent || '#138A63';

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-slate-950 border border-[#E2E8F0] shadow-sm select-none"
    >
      {/* Background Environment Canvas */}
      <div className="absolute inset-0 z-0">
        {renderBackground()}
      </div>

      {/* Foreground Canvas */}
      <div className="relative z-10 w-full h-full p-4 sm:p-5 flex items-center justify-center">
        <div className={`w-full h-[84%] flex items-stretch gap-4 ${isContentRight ? 'flex-row-reverse' : 'flex-row'}`}>
          
          {/* 1. Presentation Card (~64% width) matching reference */}
          <div 
            className={`w-[65%] rounded-2xl flex flex-col justify-between p-5 sm:p-6 transition-all duration-200 shadow-xl ${
              isMinimal 
                ? 'bg-white border border-slate-300 text-slate-900' 
                : isCorporate
                ? 'bg-[#063B56] border-t-4 border-t-[#138A63] text-white'
                : 'bg-white text-[#0A2540]'
            }`}
          >
            {/* Category Pill */}
            <div className="flex items-center">
              <span 
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase"
                style={{
                  backgroundColor: isCorporate ? '#022D44' : (themeColors?.pillBg || '#E8F5F0'),
                  color: isCorporate ? '#38BDF8' : (themeColors?.pillText || '#138A63')
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                {activeScene?.slide?.pill || 'FIRE SAFETY TRAINING'}
              </span>
            </div>

            {/* Middle body: Headlines & Extinguisher Spray Graphic */}
            <div className="my-auto grid grid-cols-12 gap-3 items-center">
              {/* Text */}
              <div className="col-span-7 space-y-2">
                <h3 className={`text-xl sm:text-2xl lg:text-[26px] font-extrabold tracking-tight leading-tight ${isCorporate ? 'text-white' : 'text-[#0A2540]'}`}>
                  {activeScene?.slide?.headline || 'Stay Safe'}{' '}
                  <span 
                    style={{ color: accentColor }}
                    className="block font-black"
                  >
                    {activeScene?.slide?.accentText || 'At Work'}
                  </span>
                </h3>
                <p className={`text-xs leading-relaxed font-normal ${isCorporate ? 'text-slate-300' : 'text-slate-500'}`}>
                  {activeScene?.slide?.description || 'Learn essential fire safety practices to protect yourself and your workplace.'}
                </p>
              </div>

              {/* Fire Extinguisher spraying smoke */}
              <div className="col-span-5 flex items-center justify-center">
                <div className="w-full h-24 sm:h-28 rounded-xl overflow-hidden shadow-xs border border-slate-200/50">
                  <ExtinguisherSprayGraphic className="w-full h-full" />
                </div>
              </div>
            </div>

            {/* Bottom spacer / clean line */}
            <div className="h-1" />
          </div>

          {/* 2. AI Presenter Placeholder on Right (~35% width) matching reference */}
          <div className="w-[35%] rounded-2xl border border-dashed border-white/40 bg-black/20 backdrop-blur-xs flex flex-col items-center justify-center p-3 text-center text-white/90">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/80 mb-2.5">
              <User size={30} className="stroke-[1.5]" />
            </div>

            <div className="space-y-0.5">
              <span className="block text-xs sm:text-sm font-bold text-white tracking-wide">
                AI Presenter
              </span>
              <span className="block text-[11px] text-slate-300">
                (Coming Soon)
              </span>
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
      />
    </div>
  );
};
