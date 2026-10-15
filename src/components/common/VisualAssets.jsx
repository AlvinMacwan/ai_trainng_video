import React from 'react';

// Studio Logo Component
export const StudioLogo = ({ size = 42, className = '' }) => (
  <div 
    className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#063B56] to-[#022D44] shadow-md border border-white/10 ${className}`}
    style={{ width: size, height: size }}
  >
    <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="20" height="15" rx="3" stroke="#1B9B70" strokeWidth="2" fill="#022D44" />
      <polygon points="10,7 16,10.5 10,14" fill="#1B9B70" />
      <path d="M7 21H17" stroke="#138A63" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 18V21" stroke="#138A63" strokeWidth="2" strokeLinecap="round" />
      <circle cx="19" cy="5" r="1.5" fill="#38BDF8" />
    </svg>
  </div>
);

// High-fidelity Factory Industrial Background SVG
export const FactoryBackground = () => (
  <svg className="w-full h-full object-cover" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="factorySky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0B131E" />
        <stop offset="60%" stopColor="#151E28" />
        <stop offset="100%" stopColor="#252422" />
      </linearGradient>
      <linearGradient id="warmLight" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#EF4444" stopOpacity="0.05" />
      </linearGradient>
      <radialGradient id="highBay" cx="50%" cy="15%" r="60%">
        <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.3" />
        <stop offset="70%" stopColor="#D97706" stopOpacity="0.05" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
      </radialGradient>
      <pattern id="gridFloor" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2D3748" strokeWidth="0.8" strokeOpacity="0.4" />
      </pattern>
    </defs>

    {/* Background Base */}
    <rect width="800" height="450" fill="url(#factorySky)" />
    
    {/* High bay light cone */}
    <circle cx="400" cy="50" r="320" fill="url(#highBay)" />
    <circle cx="680" cy="70" r="240" fill="url(#warmLight)" />

    {/* Factory Girders / Beams */}
    <g stroke="#1E293B" strokeWidth="3" opacity="0.6">
      <line x1="0" y1="60" x2="800" y2="60" />
      <line x1="0" y1="110" x2="800" y2="110" />
      <line x1="60" y1="0" x2="60" y2="450" />
      <line x1="240" y1="0" x2="240" y2="450" />
      <line x1="560" y1="0" x2="560" y2="450" />
      <line x1="740" y1="0" x2="740" y2="450" />
      {/* Cross trusses */}
      <line x1="60" y1="60" x2="240" y2="110" />
      <line x1="240" y1="60" x2="60" y2="110" />
      <line x1="240" y1="60" x2="400" y2="110" />
      <line x1="400" y1="60" x2="240" y2="110" />
      <line x1="560" y1="60" x2="740" y2="110" />
      <line x1="740" y1="60" x2="560" y2="110" />
    </g>

    {/* Hanging industrial lamps */}
    <g fill="#F59E0B">
      <line x1="200" y1="60" x2="200" y2="105" stroke="#475569" strokeWidth="2" />
      <path d="M 185 105 L 215 105 L 225 125 L 175 125 Z" fill="#334155" />
      <ellipse cx="200" cy="125" rx="25" ry="6" fill="#FEF08A" opacity="0.9" />

      <line x1="600" y1="60" x2="600" y2="105" stroke="#475569" strokeWidth="2" />
      <path d="M 585 105 L 615 105 L 625 125 L 575 125 Z" fill="#334155" />
      <ellipse cx="600" cy="125" rx="25" ry="6" fill="#FEF08A" opacity="0.9" />
    </g>

    {/* Factory Floor Grid */}
    <polygon points="0,320 800,320 800,450 0,450" fill="#111827" />
    <polygon points="0,320 800,320 800,450 0,450" fill="url(#gridFloor)" />

    {/* Yellow Safety Hazard Line */}
    <path d="M 0 350 L 800 350" stroke="#EAB308" strokeWidth="4" strokeDasharray="14 10" opacity="0.75" />

    {/* Machinery Silhouettes */}
    <g fill="#1F2937" opacity="0.7">
      <rect x="40" y="270" width="130" height="80" rx="4" />
      <rect x="55" y="240" width="40" height="30" rx="2" />
      <rect x="190" y="290" width="80" height="60" rx="3" />
      <rect x="680" y="260" width="100" height="90" rx="4" />
      {/* Conveyor */}
      <rect x="280" y="325" width="220" height="15" fill="#374151" />
      <circle cx="300" cy="345" r="5" fill="#4B5563" />
      <circle cx="390" cy="345" r="5" fill="#4B5563" />
      <circle cx="480" cy="345" r="5" fill="#4B5563" />
    </g>

    {/* Subtle safety beacon */}
    <circle cx="710" cy="255" r="5" fill="#EF4444" opacity="0.8" />
  </svg>
);

// High-fidelity Modern Office Background SVG
export const OfficeBackground = () => (
  <svg className="w-full h-full object-cover" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="officeSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0F172A" />
        <stop offset="60%" stopColor="#1E293B" />
        <stop offset="100%" stopColor="#334155" />
      </linearGradient>
      <linearGradient id="cityGlow" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#818CF8" stopOpacity="0.15" />
      </linearGradient>
    </defs>
    <rect width="800" height="450" fill="url(#officeSky)" />
    
    {/* Big Window Pillars */}
    <rect x="220" y="0" width="16" height="360" fill="#0F172A" opacity="0.8" />
    <rect x="520" y="0" width="16" height="360" fill="#0F172A" opacity="0.8" />
    <line x1="0" y1="180" x2="800" y2="180" stroke="#0F172A" strokeWidth="8" opacity="0.8" />

    {/* Distant Skyscrapers Outside */}
    <g fill="#1E293B" opacity="0.6">
      <rect x="60" y="100" width="50" height="260" />
      <rect x="120" y="70" width="60" height="290" />
      <rect x="260" y="120" width="70" height="240" />
      <rect x="350" y="90" width="80" height="270" />
      <rect x="450" y="140" width="55" height="220" />
      <rect x="560" y="80" width="65" height="280" />
      <rect x="650" y="110" width="75" height="250" />
    </g>

    {/* Skyscraper lights */}
    <g fill="#FDE047" opacity="0.3">
      <circle cx="140" cy="110" r="1.5" />
      <circle cx="150" cy="130" r="1.5" />
      <circle cx="280" cy="150" r="1.5" />
      <circle cx="380" cy="120" r="1.5" />
      <circle cx="390" cy="160" r="1.5" />
      <circle cx="580" cy="110" r="1.5" />
      <circle cx="680" cy="140" r="1.5" />
    </g>

    {/* Office Carpet / Flooring */}
    <polygon points="0,350 800,350 800,450 0,450" fill="#0B0F19" />
    
    {/* Conference desk silhouette */}
    <path d="M 240 370 L 560 370 L 620 450 L 180 450 Z" fill="#1E293B" opacity="0.8" />
    <line x1="240" y1="370" x2="560" y2="370" stroke="#38BDF8" strokeWidth="2" opacity="0.4" />
  </svg>
);

// High-fidelity Classroom / Seminar Background SVG
export const ClassroomBackground = () => (
  <svg className="w-full h-full object-cover" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="classGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#064E3B" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#0F172A" />
        <stop offset="100%" stopColor="#022D44" />
      </linearGradient>
    </defs>
    <rect width="800" height="450" fill="url(#classGrad)" />
    
    {/* Wall acoustic panels */}
    <g fill="#132F3D" stroke="#063B56" strokeWidth="2">
      <rect x="40" y="40" width="100" height="240" rx="8" />
      <rect x="160" y="40" width="100" height="240" rx="8" />
      <rect x="280" y="40" width="100" height="240" rx="8" />
      <rect x="400" y="40" width="100" height="240" rx="8" />
      <rect x="520" y="40" width="100" height="240" rx="8" />
      <rect x="640" y="40" width="100" height="240" rx="8" />
    </g>

    {/* Projector screen glow */}
    <rect x="250" y="60" width="300" height="180" rx="6" fill="#10B981" opacity="0.08" />

    {/* Stage Floor */}
    <polygon points="0,340 800,340 800,450 0,450" fill="#09141D" />
    <line x1="0" y1="340" x2="800" y2="340" stroke="#10B981" strokeWidth="2" opacity="0.3" />

    {/* Tiered audience seating silhouette */}
    <path d="M 0 450 Q 400 390 800 450 Z" fill="#03080C" opacity="0.9" />
  </svg>
);

// Slide Illustration Visuals (Extinguisher, Hazard, Safety Equipment, Evacuation, Summary)
export const SlideIllustration = ({ type = 'extinguisher', className = 'w-full h-full' }) => {
  if (type === 'extinguisher') {
    return (
      <div className={`relative flex items-center justify-center bg-gradient-to-br from-red-900/30 to-amber-900/20 rounded-xl border border-red-500/20 p-3 overflow-hidden ${className}`}>
        <svg viewBox="0 0 160 140" className="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Subtle glow circle */}
          <circle cx="80" cy="70" r="55" fill="#EF4444" fillOpacity="0.12" />
          
          {/* PASS acronym label */}
          <rect x="15" y="12" width="55" height="18" rx="4" fill="#C62828" fillOpacity="0.8" />
          <text x="42" y="24" fill="#FFFFFF" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">PASS METHOD</text>
          
          {/* Extinguisher Body */}
          <rect x="62" y="48" width="36" height="74" rx="10" fill="#DC2626" stroke="#991B1B" strokeWidth="2" />
          <rect x="66" y="65" width="28" height="35" rx="3" fill="#FFFFFF" />
          <rect x="70" y="72" width="20" height="3" fill="#1E293B" />
          <rect x="70" y="79" width="20" height="3" fill="#1E293B" />
          <rect x="70" y="86" width="14" height="3" fill="#138A63" />

          {/* Valve & Lever */}
          <rect x="74" y="38" width="12" height="10" fill="#475569" />
          <path d="M 64 34 L 80 40 L 96 34" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" />
          <line x1="80" y1="40" x2="80" y2="46" stroke="#0F172A" strokeWidth="4" />
          {/* Pressure Gauge */}
          <circle cx="80" cy="42" r="5" fill="#FFFFFF" stroke="#475569" strokeWidth="1.5" />
          <line x1="80" y1="42" x2="82" y2="40" stroke="#16A34A" strokeWidth="1.5" />

          {/* Hose */}
          <path d="M 86 42 Q 112 45 110 80 L 105 105" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" fill="none" />
          <rect x="100" y="103" width="9" height="12" rx="2" fill="#0F172A" />

          {/* Base */}
          <rect x="65" y="118" width="30" height="6" rx="2" fill="#7F1D1D" />
        </svg>
      </div>
    );
  }

  if (type === 'hazard') {
    return (
      <div className={`relative flex items-center justify-center bg-gradient-to-br from-amber-900/30 to-red-900/20 rounded-xl border border-amber-500/20 p-3 overflow-hidden ${className}`}>
        <svg viewBox="0 0 160 140" className="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon points="80,15 140,120 20,120" fill="#F59E0B" fillOpacity="0.15" stroke="#F59E0B" strokeWidth="3" strokeLinejoin="round" />
          <polygon points="80,28 130,114 30,114" fill="#FDE047" fillOpacity="0.9" stroke="#D97706" strokeWidth="2" strokeLinejoin="round" />
          {/* Flame / Lightning Icon inside */}
          <path d="M 80 50 L 73 80 L 84 80 L 76 104 L 92 74 L 81 74 Z" fill="#B45309" />
          <text x="80" y="132" fill="#F59E0B" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">HIGH RISK ZONE</text>
        </svg>
      </div>
    );
  }

  if (type === 'equipment') {
    return (
      <div className={`relative flex items-center justify-center bg-gradient-to-br from-emerald-900/30 to-teal-900/20 rounded-xl border border-emerald-500/20 p-3 overflow-hidden ${className}`}>
        <svg viewBox="0 0 160 140" className="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="70" r="50" fill="#10B981" fillOpacity="0.1" />
          {/* Shield */}
          <path d="M 80 25 L 120 40 V 75 C 120 102 80 120 80 120 C 80 120 40 102 40 75 V 40 Z" fill="#138A63" stroke="#065F46" strokeWidth="3" />
          {/* White cross / checkmark */}
          <rect x="74" y="50" width="12" height="40" rx="3" fill="#FFFFFF" />
          <rect x="60" y="64" width="40" height="12" rx="3" fill="#FFFFFF" />
        </svg>
      </div>
    );
  }

  if (type === 'evacuation') {
    return (
      <div className={`relative flex items-center justify-center bg-gradient-to-br from-emerald-950/40 to-slate-900/40 rounded-xl border border-emerald-500/20 p-3 overflow-hidden ${className}`}>
        <svg viewBox="0 0 160 140" className="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="25" width="110" height="70" rx="8" fill="#166534" stroke="#22C55E" strokeWidth="2" />
          <text x="80" y="45" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">EXIT ➔</text>
          {/* Running Person */}
          <circle cx="65" cy="62" r="5" fill="#FFFFFF" />
          <path d="M 65 67 L 65 80 M 65 72 L 56 68 M 65 72 L 74 77 M 65 80 L 58 92 M 65 80 L 72 88 L 76 92" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="40" y="105" width="80" height="20" rx="4" fill="#065F46" />
          <text x="80" y="118" fill="#A7F3D0" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ASSEMBLY POINT 4</text>
        </svg>
      </div>
    );
  }

  // Summary / Review Default
  return (
    <div className={`relative flex items-center justify-center bg-gradient-to-br from-slate-900/40 to-teal-950/40 rounded-xl border border-teal-500/20 p-3 overflow-hidden ${className}`}>
      <svg viewBox="0 0 160 140" className="w-full h-full max-h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="35" y="20" width="90" height="100" rx="8" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
        {/* Clipboard clip */}
        <rect x="62" y="14" width="36" height="12" rx="3" fill="#64748B" />
        {/* Check rows */}
        <circle cx="52" cy="45" r="5" fill="#10B981" />
        <line x1="64" y1="45" x2="105" y2="45" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" />
        <circle cx="52" cy="68" r="5" fill="#10B981" />
        <line x1="64" y1="68" x2="105" y2="68" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" />
        <circle cx="52" cy="91" r="5" fill="#10B981" />
        <line x1="64" y1="91" x2="95" y2="91" stroke="#E2E8F0" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
};
