import React from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  Settings, 
  Maximize, 
  PictureInPicture2
} from 'lucide-react';

export const PlayerControls = ({ 
  isPlaying = false, 
  onTogglePlay, 
  duration = 20, 
  currentTime = 0,
  onSeek,
  onToggleFullscreen
}) => {
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-3 pt-5 rounded-b-2xl z-20 select-none">
      <div className="flex items-center gap-3 text-white text-xs">
        {/* Play / Pause button */}
        <button
          type="button"
          onClick={onTogglePlay}
          className="p-1 text-white hover:text-emerald-400 transition-colors"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause size={14} fill="currentColor" /> : <Play size={14} fill="currentColor" />}
        </button>

        {/* Time display */}
        <div className="font-mono text-[11px] text-white font-medium flex-shrink-0">
          <span>{formatTime(currentTime)}</span>
          <span className="mx-1 text-slate-400">/</span>
          <span>{formatTime(duration)}</span>
        </div>

        {/* Scrubber */}
        <div 
          className="flex-1 h-1 bg-white/30 hover:h-1.5 rounded-full cursor-pointer relative group transition-all mx-1"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickPos = (e.clientX - rect.left) / rect.width;
            if (onSeek) onSeek(clickPos * duration);
          }}
        >
          <div 
            className="h-full bg-white rounded-full relative"
            style={{ width: `${Math.min(100, Math.max(0, progressPercent))}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow scale-100" />
          </div>
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2 text-white/90">
          <button type="button" className="p-1 hover:text-white" title="Volume">
            <Volume2 size={15} />
          </button>
          <button type="button" className="p-1 hover:text-white" title="Settings">
            <Settings size={15} />
          </button>
          <button type="button" className="p-1 hover:text-white" title="Picture in Picture">
            <PictureInPicture2 size={15} />
          </button>
          <button type="button" onClick={onToggleFullscreen} className="p-1 hover:text-white" title="Fullscreen">
            <Maximize size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};
