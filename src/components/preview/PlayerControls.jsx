import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Settings, 
  Maximize, 
  Minimize,
  PictureInPicture2
} from 'lucide-react';

export const PlayerControls = ({ 
  isPlaying = false, 
  onTogglePlay, 
  duration = 20, 
  currentTime = 0,
  onSeek,
  onToggleFullscreen,
  isFullscreen = false
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(80);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 pt-6 rounded-b-xl z-20 transition-opacity">
      {/* Scrubber / Progress Bar */}
      <div 
        className="w-full h-1.5 bg-white/25 hover:h-2.5 rounded-full mb-2.5 cursor-pointer relative group transition-all"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const clickPos = (e.clientX - rect.left) / rect.width;
          if (onSeek) onSeek(clickPos * duration);
        }}
      >
        <div 
          className="h-full bg-[#1B9B70] rounded-full relative transition-all"
          style={{ width: `${Math.min(100, Math.max(0, progressPercent))}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md scale-0 group-hover:scale-100 transition-transform" />
        </div>
      </div>

      {/* Control Bar Actions */}
      <div className="flex items-center justify-between text-white text-xs select-none">
        {/* Left: Play/Pause, Time, Volume */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onTogglePlay}
            aria-label={isPlaying ? 'Pause' : 'Play'}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#138A63] text-white flex items-center justify-center transition-colors"
          >
            {isPlaying ? <Pause size={13} fill="currentColor" /> : <Play size={13} fill="currentColor" className="ml-0.5" />}
          </button>

          {/* Time display */}
          <div className="font-mono text-[11px] text-slate-300">
            <span className="text-white font-semibold">{formatTime(currentTime)}</span>
            <span className="mx-1 text-slate-500">/</span>
            <span>{formatTime(duration)}</span>
          </div>

          {/* Volume control */}
          <div 
            className="relative flex items-center"
            onMouseEnter={() => setShowVolumeSlider(true)}
            onMouseLeave={() => setShowVolumeSlider(false)}
          >
            <button
              type="button"
              onClick={() => setIsMuted(!isMuted)}
              className="p-1 rounded text-slate-300 hover:text-white transition-colors"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted || volume === 0 ? <VolumeX size={15} /> : <Volume2 size={15} />}
            </button>

            {showVolumeSlider && (
              <div className="ml-1 w-16 flex items-center">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => {
                    setVolume(Number(e.target.value));
                    if (isMuted) setIsMuted(false);
                  }}
                  className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-[#1B9B70]"
                />
              </div>
            )}
          </div>
        </div>

        {/* Right: Settings, PiP, Fullscreen */}
        <div className="flex items-center gap-2 text-slate-300">
          <button 
            type="button"
            className="p-1.5 rounded hover:text-white hover:bg-white/10 transition-colors"
            title="Video Settings"
          >
            <Settings size={14} />
          </button>
          
          <button 
            type="button"
            className="p-1.5 rounded hover:text-white hover:bg-white/10 transition-colors"
            title="Picture in Picture"
          >
            <PictureInPicture2 size={14} />
          </button>

          <button 
            type="button"
            onClick={onToggleFullscreen}
            className="p-1.5 rounded hover:text-white hover:bg-white/10 transition-colors"
            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          >
            {isFullscreen ? <Minimize size={14} /> : <Maximize size={14} />}
          </button>
        </div>
      </div>
    </div>
  );
};
