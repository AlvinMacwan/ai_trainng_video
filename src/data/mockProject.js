export const initialMockProject = {
  id: 'proj_fire_safety_01',
  name: 'Fire Safety Training for Factory Workers',
  status: 'Draft',
  lastSaved: 'Just now',
  
  // Prompt Section
  prompt: 'Create a 3 minute training video about Fire Safety for factory workers in Hindi. Include key safety practices, demonstration visuals and a summary with important points.',
  characterLimit: 1000,
  
  // Options
  options: [
    { id: 'language', label: 'Language', value: 'Hindi', icon: 'Languages' },
    { id: 'duration', label: 'Duration', value: '3 minutes', icon: 'Clock' },
    { id: 'audience', label: 'Audience', value: 'Factory Workers', icon: 'Users' },
    { id: 'type', label: 'Training Type', value: 'Safety Training', icon: 'ShieldAlert' }
  ],

  // Workflow steps
  workflowSteps: [
    { number: 1, label: 'Prompt', state: 'active' },
    { number: 2, label: 'Content', state: 'pending' },
    { number: 3, label: 'Visuals', state: 'pending' },
    { number: 4, label: 'Preview', state: 'pending' },
    { number: 5, label: 'Export', state: 'pending' }
  ],

  // Scenes
  activeSceneId: 1,
  scenes: [
    {
      id: 1,
      number: 1,
      title: 'Introduction',
      duration: '0:00 - 0:20',
      durationSec: 20,
      slide: {
        pill: 'FIRE SAFETY TRAINING',
        headline: 'Stay Safe',
        accentText: 'At Work',
        description: 'Learn essential fire safety practices to protect yourself and your workplace.',
        badgeColor: '#138A63',
        imageType: 'extinguisher'
      },
      script: 'Welcome to this important training on Fire Safety. In this video, we will learn about common fire hazards, key safety practices, and what to do in an emergency. Fire safety is everyone\'s responsibility, and by following the right steps, we can keep ourselves and our workplace safe.'
    },
    {
      id: 2,
      number: 2,
      title: 'Fire Hazards',
      duration: '0:20 - 0:50',
      durationSec: 30,
      slide: {
        pill: 'IDENTIFY RISKS',
        headline: 'Common Fire',
        accentText: 'Hazards',
        description: 'Understand the leading causes of workplace fires: faulty wiring, flammable chemicals, and improper waste disposal.',
        badgeColor: '#E65100',
        imageType: 'hazard'
      },
      script: 'Identify primary factory hazards including electrical overloading, flammable chemical storage, and obstructed emergency exits. Early detection and immediate reporting prevent critical workplace incidents.'
    },
    {
      id: 3,
      number: 3,
      title: 'Safety Equipment',
      duration: '0:50 - 1:30',
      durationSec: 40,
      slide: {
        pill: 'RESPONSE TOOLS',
        headline: 'Using Safety',
        accentText: 'Equipment',
        description: 'Master the PASS method for operating fire extinguishers and locating alarm pull stations across the plant.',
        badgeColor: '#138A63',
        imageType: 'equipment'
      },
      script: 'Familiarize yourself with the PASS protocol: Pull the pin, Aim at the base of the fire, Squeeze the lever, and Sweep side to side. Check extinguisher pressure gauges on your daily rounds.'
    },
    {
      id: 4,
      number: 4,
      title: 'Emergency Procedures',
      duration: '1:30 - 2:20',
      durationSec: 50,
      slide: {
        pill: 'EVACUATION PROTOCOL',
        headline: 'Emergency',
        accentText: 'Procedures',
        description: 'Follow evacuation routes calmly to designated assembly points. Never re-enter the facility until all-clear is declared.',
        badgeColor: '#C62828',
        imageType: 'evacuation'
      },
      script: 'When the alarm sounds, cease operations immediately, shut off main equipment if safely possible, do not use elevators, follow illuminated exit signs, and proceed directly to Assembly Point 4.'
    },
    {
      id: 5,
      number: 5,
      title: 'Key Takeaways',
      duration: '2:20 - 3:00',
      durationSec: 40,
      slide: {
        pill: 'SUMMARY & REVIEW',
        headline: 'Key Safety',
        accentText: 'Takeaways',
        description: 'Always stay alert, know your nearest exit routes, and maintain clear access to all firefighting equipment.',
        badgeColor: '#138A63',
        imageType: 'summary'
      },
      script: 'Remember: Prevention is our first priority, speed and calm communication save lives. If you notice any blocked exits or damaged wiring, report it immediately to your shift supervisor.'
    }
  ],

  // Settings
  settings: {
    contentPosition: 'left', // 'left' | 'right'
    activeBackground: 'factory', // 'factory' | 'office' | 'classroom'
    slideStyle: 'modern', // 'modern' | 'minimal' | 'corporate'
    colorTheme: 'green', // 'navy' | 'green' | 'light'
    aspectRatio: '16:9'
  },

  // Background Options
  backgrounds: [
    {
      id: 'factory',
      name: 'Factory',
      type: 'Industrial floor & machinery',
      previewGradient: 'from-slate-800 via-slate-900 to-amber-950'
    },
    {
      id: 'office',
      name: 'Office',
      type: 'Modern corporate space',
      previewGradient: 'from-blue-900 via-slate-800 to-indigo-950'
    },
    {
      id: 'classroom',
      name: 'Classroom',
      type: 'Training workshop room',
      previewGradient: 'from-emerald-950 via-teal-900 to-slate-900'
    }
  ],

  // Slide Style Options
  styles: [
    { id: 'modern', name: 'Modern', desc: 'Floating glass card with vibrant accents' },
    { id: 'minimal', name: 'Minimal', desc: 'High contrast clean monochrome style' },
    { id: 'corporate', name: 'Corporate', desc: 'Structured professional header and borders' }
  ],

  // Color Theme Options
  colorThemes: [
    { id: 'navy', name: 'Navy', hex: '#063B56', bgHex: '#022D44', accent: '#38BDF8', pillBg: '#E0F2FE', pillText: '#0369A1' },
    { id: 'green', name: 'Green', hex: '#138A63', bgHex: '#1B9B70', accent: '#10B981', pillBg: '#E8F5F0', pillText: '#138A63' },
    { id: 'light', name: 'Light', hex: '#64748B', bgHex: '#334155', accent: '#F59E0B', pillBg: '#FEF3C7', pillText: '#B45309' }
  ]
};

// Additional mock projects for "My Projects" page
export const mockProjectsList = [
  {
    id: 'proj_fire_safety_01',
    name: 'Fire Safety Training for Factory Workers',
    category: 'Safety Training',
    language: 'Hindi',
    duration: '3:00',
    scenesCount: 5,
    updatedAt: '10 mins ago',
    status: 'Ready',
    thumbnail: 'factory'
  },
  {
    id: 'proj_posh_02',
    name: 'Workplace Harassment Prevention (POSH)',
    category: 'Compliance',
    language: 'English',
    duration: '4:30',
    scenesCount: 6,
    updatedAt: '2 days ago',
    status: 'Draft',
    thumbnail: 'office'
  },
  {
    id: 'proj_cyber_03',
    name: 'Cybersecurity Hygiene: Phishing Awareness',
    category: 'IT Security',
    language: 'English',
    duration: '2:15',
    scenesCount: 4,
    updatedAt: '1 week ago',
    status: 'Completed',
    thumbnail: 'classroom'
  }
];
