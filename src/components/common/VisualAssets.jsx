import React from 'react';

// Studio Logo Component matching the reference: round teal/green compass/paper-plane badge
export const StudioLogo = ({ size = 38, className = '' }) => (
  <div 
    className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-[#107050] to-[#0A4B35] shadow-sm overflow-hidden flex-shrink-0 ${className}`}
    style={{ width: size, height: size }}
  >
    <svg width={size * 0.65} height={size * 0.65} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 2L11 13" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 2L15 22L11 13L2 9L22 2Z" fill="#34D399" fillOpacity="0.4" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

// High-fidelity Factory Industrial Background SVG matching reference
export const FactoryBackground = () => (
  <svg className="w-full h-full object-cover" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="factAisle" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#0D161F" />
        <stop offset="45%" stopColor="#1A2530" />
        <stop offset="85%" stopColor="#1E272E" />
        <stop offset="100%" stopColor="#14181B" />
      </linearGradient>
      <linearGradient id="roofSteel" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#15202B" />
        <stop offset="50%" stopColor="#2A3847" />
        <stop offset="100%" stopColor="#15202B" />
      </linearGradient>
      <radialGradient id="ceilingLight1" cx="50%" cy="10%" r="50%">
        <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.35" />
        <stop offset="60%" stopColor="#D97706" stopOpacity="0.08" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="centerTunnel" cx="50%" cy="58%" r="40%">
        <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.22" />
        <stop offset="40%" stopColor="#0284C7" stopOpacity="0.06" />
        <stop offset="100%" stopColor="#000000" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Background Base */}
    <rect width="800" height="450" fill="url(#factAisle)" />
    <rect width="800" height="450" fill="url(#centerTunnel)" />
    <rect width="800" height="450" fill="url(#ceilingLight1)" />

    {/* Ceiling Truss Beams in Perspective */}
    <g stroke="#334155" strokeWidth="2" opacity="0.65">
      {/* Center vanishing lines */}
      <line x1="400" y1="230" x2="0" y2="0" />
      <line x1="400" y1="230" x2="800" y2="0" />
      <line x1="400" y1="230" x2="160" y2="0" />
      <line x1="400" y1="230" x2="640" y2="0" />
      <line x1="400" y1="230" x2="320" y2="0" />
      <line x1="400" y1="230" x2="480" y2="0" />

      {/* Cross horizontal truss ribs */}
      <line x1="120" y1="70" x2="680" y2="70" strokeWidth="3" />
      <line x1="200" y1="120" x2="600" y2="120" strokeWidth="2.5" />
      <line x1="270" y1="160" x2="530" y2="160" strokeWidth="2" />
      <line x1="330" y1="195" x2="470" y2="195" strokeWidth="1.5" />
    </g>

    {/* High bay lamps along the ceiling aisle */}
    <g fill="#FDE047">
      {/* Light 1 */}
      <ellipse cx="400" cy="70" rx="35" ry="7" fill="#FEF08A" opacity="0.9" />
      <ellipse cx="400" cy="70" rx="60" ry="14" fill="#F59E0B" opacity="0.25" />
      {/* Light 2 */}
      <ellipse cx="400" cy="120" rx="24" ry="5" fill="#FEF08A" opacity="0.85" />
      {/* Light 3 */}
      <ellipse cx="400" cy="160" rx="16" ry="3.5" fill="#FEF08A" opacity="0.8" />
      {/* Light 4 */}
      <ellipse cx="400" cy="195" rx="10" ry="2" fill="#FEF08A" opacity="0.75" />
    </g>

    {/* Left Racks / Factory Storage Columns */}
    <g fill="#1E293B" stroke="#0F172A" strokeWidth="1" opacity="0.85">
      <polygon points="0,450 350,240 350,150 0,60" fill="#18222F" />
      <line x1="60" y1="450" x2="60" y2="90" stroke="#334155" strokeWidth="3" />
      <line x1="140" y1="450" x2="140" y2="135" stroke="#334155" strokeWidth="3" />
      <line x1="220" y1="450" x2="220" y2="180" stroke="#334155" strokeWidth="2" />
      {/* Rack shelf beams with warm amber cargo highlights */}
      <line x1="0" y1="360" x2="350" y2="240" stroke="#475569" strokeWidth="3" />
      <line x1="0" y1="280" x2="350" y2="215" stroke="#475569" strokeWidth="2.5" />
      <line x1="0" y1="200" x2="350" y2="190" stroke="#475569" strokeWidth="2" />
      <rect x="20" y="300" width="30" height="40" fill="#D97706" opacity="0.4" />
      <rect x="80" y="325" width="40" height="25" fill="#2563EB" opacity="0.3" />
      <rect x="160" y="330" width="35" height="20" fill="#16A34A" opacity="0.3" />
    </g>

    {/* Right Racks / Factory Storage Columns */}
    <g fill="#1E293B" stroke="#0F172A" strokeWidth="1" opacity="0.85">
      <polygon points="800,450 450,240 450,150 800,60" fill="#18222F" />
      <line x1="740" y1="450" x2="740" y2="90" stroke="#334155" strokeWidth="3" />
      <line x1="660" y1="450" x2="660" y2="135" stroke="#334155" strokeWidth="3" />
      <line x1="580" y1="450" x2="580" y2="180" stroke="#334155" strokeWidth="2" />
      {/* Right shelves */}
      <line x1="800" y1="360" x2="450" y2="240" stroke="#475569" strokeWidth="3" />
      <line x1="800" y1="280" x2="450" y2="215" stroke="#475569" strokeWidth="2.5" />
      <line x1="800" y1="200" x2="450" y2="190" stroke="#475569" strokeWidth="2" />
      <rect x="710" y="300" width="35" height="40" fill="#DC2626" opacity="0.4" />
      <rect x="620" y="325" width="30" height="25" fill="#D97706" opacity="0.35" />
    </g>

    {/* Floor in perspective with reflection & safety line */}
    <polygon points="0,450 350,240 450,240 800,450" fill="#0F1720" />
    {/* Center light sheen on polished concrete */}
    <polygon points="340,450 395,240 405,240 460,450" fill="#38BDF8" opacity="0.08" />
    {/* Yellow safety guide lines */}
    <line x1="280" y1="450" x2="375" y2="240" stroke="#EAB308" strokeWidth="3.5" opacity="0.8" />
    <line x1="520" y1="450" x2="425" y2="240" stroke="#EAB308" strokeWidth="3.5" opacity="0.8" />
  </svg>
);

// High-fidelity Modern Office Background SVG
export const OfficeBackground = () => (
  <svg className="w-full h-full object-cover" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="offSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0B1320" />
        <stop offset="60%" stopColor="#1E293B" />
        <stop offset="100%" stopColor="#334155" />
      </linearGradient>
    </defs>
    <rect width="800" height="450" fill="url(#offSky)" />
    {/* Huge floor to ceiling window mullions */}
    <line x1="200" y1="0" x2="200" y2="340" stroke="#0F172A" strokeWidth="12" />
    <line x1="400" y1="0" x2="400" y2="340" stroke="#0F172A" strokeWidth="12" />
    <line x1="600" y1="0" x2="600" y2="340" stroke="#0F172A" strokeWidth="12" />
    <line x1="0" y1="180" x2="800" y2="180" stroke="#0F172A" strokeWidth="8" />

    {/* Distant high-rise city skyline */}
    <g fill="#1E293B" opacity="0.75">
      <rect x="30" y="80" width="70" height="260" />
      <rect x="110" y="120" width="50" height="220" />
      <rect x="220" y="70" width="80" height="270" />
      <rect x="320" y="110" width="60" height="230" />
      <rect x="420" y="50" width="90" height="290" />
      <rect x="530" y="90" width="55" height="250" />
      <rect x="620" y="60" width="85" height="280" />
      <rect x="720" y="100" width="60" height="240" />
    </g>
    {/* Office boardroom table */}
    <polygon points="0,340 800,340 800,450 0,450" fill="#0A0F1D" />
    <path d="M 220 360 L 580 360 L 680 450 L 120 450 Z" fill="#1E293B" stroke="#475569" strokeWidth="2" opacity="0.9" />
  </svg>
);

// High-fidelity Classroom Background SVG
export const ClassroomBackground = () => (
  <svg className="w-full h-full object-cover" viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="clsSky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#064E3B" />
        <stop offset="50%" stopColor="#0B1320" />
        <stop offset="100%" stopColor="#022D44" />
      </linearGradient>
    </defs>
    <rect width="800" height="450" fill="url(#clsSky)" />
    {/* Wall acoustic panels */}
    <g fill="#0F2938" stroke="#1E4D68" strokeWidth="2">
      <rect x="50" y="40" width="100" height="250" rx="6" />
      <rect x="180" y="40" width="100" height="250" rx="6" />
      <rect x="310" y="40" width="100" height="250" rx="6" />
      <rect x="440" y="40" width="100" height="250" rx="6" />
      <rect x="570" y="40" width="100" height="250" rx="6" />
      <rect x="700" y="40" width="100" height="250" rx="6" />
    </g>
    {/* Stage & podium floor */}
    <polygon points="0,330 800,330 800,450 0,450" fill="#040D14" />
    <line x1="0" y1="330" x2="800" y2="330" stroke="#10B981" strokeWidth="2" opacity="0.4" />
    {/* Seminar desks */}
    <ellipse cx="260" cy="380" rx="140" ry="25" fill="#132B3A" />
    <ellipse cx="540" cy="380" rx="140" ry="25" fill="#132B3A" />
  </svg>
);

// High-fidelity Fire Extinguisher spraying white smoke graphic matching the slide in the reference image
export const ExtinguisherSprayGraphic = ({ className = 'w-full h-full' }) => (
  <div className={`relative flex items-center justify-center bg-[#EAE8E4] rounded-2xl overflow-hidden ${className}`}>
    <svg viewBox="0 0 200 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Soft background room gradient */}
        <linearGradient id="extBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F1EFEA" />
          <stop offset="100%" stopColor="#DDD8D0" />
        </linearGradient>
        {/* Cloud spray gradient */}
        <radialGradient id="smokeSpray" cx="40%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#F1F5F9" stopOpacity="0.8" />
          <stop offset="85%" stopColor="#CBD5E1" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Card Background */}
      <rect width="200" height="160" fill="url(#extBg)" />

      {/* Discharging dense white smoke cloud on the left */}
      <g>
        <circle cx="50" cy="85" r="45" fill="url(#smokeSpray)" />
        <circle cx="85" cy="75" r="32" fill="url(#smokeSpray)" />
        <circle cx="70" cy="105" r="38" fill="url(#smokeSpray)" />
        <circle cx="30" cy="70" r="30" fill="url(#smokeSpray)" />
        <ellipse cx="65" cy="88" rx="55" ry="32" fill="#FFFFFF" opacity="0.65" />
      </g>

      {/* Fire Extinguisher Cylinder (Red) */}
      <g transform="translate(130, 42)">
        {/* Shadow */}
        <ellipse cx="18" cy="102" rx="16" ry="4" fill="#64748B" opacity="0.3" />

        {/* Cylinder Body */}
        <rect x="4" y="24" width="28" height="74" rx="12" fill="#DC2626" />
        {/* Highlighting sheen */}
        <path d="M 8 28 L 8 92" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 12 26 L 12 94" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" opacity="0.4" />

        {/* White instruction label */}
        <rect x="7" y="44" width="22" height="34" rx="2" fill="#FFFFFF" />
        <rect x="10" y="49" width="16" height="2" fill="#1E293B" />
        <rect x="10" y="54" width="16" height="2" fill="#1E293B" />
        <rect x="10" y="59" width="11" height="2" fill="#138A63" />
        <rect x="10" y="65" width="16" height="8" rx="1" fill="#DC2626" />

        {/* Neck, Valve, Black Lever & Pressure Gauge */}
        <rect x="14" y="16" width="8" height="9" fill="#475569" />
        {/* Lever Handle */}
        <path d="M 6 12 L 18 17 L 30 11" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="18" y1="17" x2="18" y2="22" stroke="#1E293B" strokeWidth="3" />
        {/* Pressure gauge */}
        <circle cx="18" cy="17" r="4" fill="#FFFFFF" stroke="#475569" strokeWidth="1.2" />
        <line x1="18" y1="17" x2="19.5" y2="15.5" stroke="#16A34A" strokeWidth="1.2" />

        {/* Black Flexible Discharge Hose curving left into smoke */}
        <path d="M 22 17 C 28 17, 36 26, 32 45 C 28 62, 10 58, -8 54 L -28 50" stroke="#1E293B" strokeWidth="4" strokeLinecap="round" fill="none" />
        {/* Nozzle Cone */}
        <path d="M -26 46 L -38 42 L -38 58 L -26 54 Z" fill="#0F172A" />
      </g>
    </svg>
  </div>
);

// High-fidelity Scene Thumbnails matching the reference image cards (Scene 1 to 5)
export const SceneThumbnail = ({ sceneNumber = 1, className = 'w-16 h-12' }) => {
  return (
    <div className={`relative rounded-lg overflow-hidden bg-slate-900 border border-slate-700/60 flex-shrink-0 ${className}`}>
      {sceneNumber === 1 && (
        <svg viewBox="0 0 80 60" className="w-full h-full object-cover" preserveAspectRatio="none">
          <rect width="80" height="60" fill="#1E293B" />
          {/* Factory corridor */}
          <line x1="0" y1="0" x2="40" y2="30" stroke="#334155" strokeWidth="1.5" />
          <line x1="80" y1="0" x2="40" y2="30" stroke="#334155" strokeWidth="1.5" />
          <line x1="40" y1="30" x2="40" y2="60" stroke="#EAB308" strokeWidth="1" strokeDasharray="3 2" />
          {/* Red fire extinguisher mounted on wall */}
          <rect x="52" y="18" width="10" height="24" rx="4" fill="#DC2626" />
          <rect x="54" y="24" width="6" height="10" fill="#FFFFFF" />
          <circle cx="57" cy="16" r="2.5" fill="#475569" />
        </svg>
      )}

      {sceneNumber === 2 && (
        <svg viewBox="0 0 80 60" className="w-full h-full object-cover" preserveAspectRatio="none">
          <rect width="80" height="60" fill="#0F172A" />
          {/* Flame & electrical spark glow */}
          <circle cx="40" cy="35" r="25" fill="#EA580C" opacity="0.3" />
          <circle cx="40" cy="38" r="16" fill="#F59E0B" opacity="0.6" />
          <path d="M 40 14 C 44 24, 52 30, 48 44 C 44 50, 36 50, 32 44 C 28 32, 36 26, 40 14 Z" fill="#F97316" />
          <path d="M 40 24 C 42 29, 46 34, 44 42 C 42 45, 38 45, 36 42 C 34 35, 38 31, 40 24 Z" fill="#FDE047" />
          {/* Industrial barrel silhouette */}
          <rect x="18" y="28" width="14" height="22" rx="2" fill="#334155" opacity="0.8" />
        </svg>
      )}

      {sceneNumber === 3 && (
        <svg viewBox="0 0 80 60" className="w-full h-full object-cover" preserveAspectRatio="none">
          <rect width="80" height="60" fill="#1E293B" />
          {/* Yellow Hardhat & Blue Safety Gloves */}
          {/* Hardhat */}
          <path d="M 18 36 C 18 24, 38 24, 38 36 Z" fill="#FACC15" />
          <path d="M 14 36 L 42 36" stroke="#EAB308" strokeWidth="2.5" strokeLinecap="round" />
          {/* Gloves */}
          <path d="M 48 24 L 56 24 C 60 24, 62 28, 62 34 L 58 44 L 48 44 Z" fill="#0284C7" />
          <rect x="46" y="32" width="14" height="4" fill="#0369A1" />
        </svg>
      )}

      {sceneNumber === 4 && (
        <svg viewBox="0 0 80 60" className="w-full h-full object-cover" preserveAspectRatio="none">
          <rect width="80" height="60" fill="#064E3B" />
          {/* Green emergency exit illuminated sign */}
          <rect x="14" y="10" width="52" height="40" rx="4" fill="#15803D" stroke="#4ADE80" strokeWidth="1.5" />
          {/* Running man silhouette */}
          <circle cx="34" cy="22" r="3" fill="#FFFFFF" />
          <path d="M 34 25 L 34 33 M 34 28 L 28 26 M 34 28 L 39 31 M 34 33 L 30 40 M 34 33 L 39 38 L 41 40" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          {/* Arrow */}
          <path d="M 48 24 L 56 30 L 48 36" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <line x1="44" y1="30" x2="55" y2="30" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      )}

      {sceneNumber >= 5 && (
        <svg viewBox="0 0 80 60" className="w-full h-full object-cover" preserveAspectRatio="none">
          <rect width="80" height="60" fill="#0F172A" />
          {/* Checklist / Presentation summary board */}
          <rect x="16" y="12" width="48" height="36" rx="3" fill="#1E293B" stroke="#38BDF8" strokeWidth="1" />
          <line x1="22" y1="20" x2="54" y2="20" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
          <line x1="26" y1="28" x2="52" y2="28" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="26" y1="36" x2="48" y2="36" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="23" cy="28" r="1.5" fill="#10B981" />
          <circle cx="23" cy="36" r="1.5" fill="#10B981" />
        </svg>
      )}

      {/* Number Badge in top-left of thumbnail */}
      <div className="absolute top-1 left-1 px-1.5 py-0.2 rounded bg-black/60 backdrop-blur-xs text-[10px] font-bold text-white flex items-center justify-center">
        {sceneNumber}
      </div>
    </div>
  );
};
