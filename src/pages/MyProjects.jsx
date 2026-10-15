import React, { useState } from 'react';
import { 
  FolderKanban, 
  Search, 
  Plus, 
  Clock, 
  Layers, 
  ArrowRight, 
  MoreVertical,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { mockProjectsList } from '../data/mockProject';
import { FactoryBackground, OfficeBackground, ClassroomBackground } from '../components/common/VisualAssets';

export const MyProjects = ({ onOpenProject, onNewProject }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [projects, setProjects] = useState(mockProjectsList);

  const filtered = projects.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex-1 min-w-0 bg-[#F5F8FA] p-6 lg:p-8 space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#DCE5EA]">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-[#092C49]">
            My Training Projects
          </h2>
          <p className="text-sm text-[#64748B]">
            Manage, duplicate, and review your AI training videos
          </p>
        </div>

        <button
          type="button"
          onClick={onNewProject}
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#138A63] hover:bg-[#1B9B70] text-white text-sm font-semibold shadow-xs transition-all active:scale-[0.98]"
        >
          <Plus size={16} />
          <span>New Training Video</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by title or topic..."
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-[#DCE5EA] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#138A63]/30 focus:border-[#138A63]"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select className="px-3.5 py-2.5 text-xs font-semibold text-[#092C49] bg-white border border-[#DCE5EA] rounded-xl focus:outline-none">
            <option>All Categories</option>
            <option>Safety Training</option>
            <option>Compliance</option>
            <option>IT Security</option>
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((proj) => (
          <div
            key={proj.id}
            className="bg-white rounded-xl border border-[#DCE5EA] overflow-hidden shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
          >
            {/* Card Thumbnail */}
            <div className="h-36 relative bg-slate-900 overflow-hidden">
              {proj.thumbnail === 'factory' && <FactoryBackground />}
              {proj.thumbnail === 'office' && <OfficeBackground />}
              {proj.thumbnail === 'classroom' && <ClassroomBackground />}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#E8F5F0] text-[#138A63] border border-[#138A63]/30">
                  {proj.category}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                <span className="font-mono bg-black/60 px-2 py-0.5 rounded">
                  {proj.duration}
                </span>
                <span className="flex items-center gap-1 text-slate-300">
                  <Layers size={13} />
                  <span>{proj.scenesCount} scenes</span>
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="text-sm font-bold text-[#092C49] group-hover:text-[#138A63] transition-colors line-clamp-1">
                  {proj.name}
                </h3>
                <div className="flex items-center gap-2 mt-1 text-xs text-[#64748B]">
                  <span>Language: {proj.language}</span>
                  <span>•</span>
                  <span>Updated {proj.updatedAt}</span>
                </div>
              </div>

              {/* Action Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#138A63]">
                  <CheckCircle2 size={13} />
                  <span>{proj.status}</span>
                </span>

                <button
                  type="button"
                  onClick={() => onOpenProject && onOpenProject(proj)}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#092C49] group-hover:text-[#138A63] hover:underline"
                >
                  <span>Open in Studio</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
