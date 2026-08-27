import React from 'react';
import { 
  Code2, 
  Bookmark, 
  BarChart3, 
  Search, 
  RotateCcw,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function Header({ 
  totalSolved, 
  totalQuestions, 
  searchQuery, 
  setSearchQuery, 
  showBookmarksOnly, 
  setShowBookmarksOnly, 
  onOpenStats,
  onResetProgress
}) {
  const percent = totalQuestions > 0 ? Math.round((totalSolved / totalQuestions) * 100) : 0;

  return (
    <header className="sticky top-0 z-40 bg-[#0B0F19]/90 backdrop-blur-md border-b border-gray-800/80 px-4 lg:px-8 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 ring-1 ring-white/20">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
                  ProPeers
                </span>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-full">
                  DSA Roadmap
                </span>
              </div>
              <p className="text-xs text-gray-400 font-medium">Personal Progress & LeetCode Tracker</p>
            </div>
          </div>

          {/* Mobile Overall Progress Badge */}
          <div className="md:hidden flex items-center gap-2 bg-gray-900/80 px-3 py-1.5 rounded-lg border border-gray-800">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold text-white">{totalSolved}/{totalQuestions}</span>
            <span className="text-[10px] text-indigo-400 font-semibold">({percent}%)</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search problems, topics, or #tag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-900/90 text-sm text-gray-200 placeholder-gray-500 pl-10 pr-4 py-2 rounded-xl border border-gray-800 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Overall Progress Gauge & Actions */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          
          {/* Desktop Progress Gauge */}
          <div className="hidden md:flex items-center gap-3 bg-gray-900/60 border border-gray-800/80 px-4 py-2 rounded-xl">
            <div className="flex flex-col text-right">
              <span className="text-xs text-gray-400 font-medium">Overall Solved</span>
              <span className="text-sm font-bold text-white flex items-center gap-1 justify-end">
                <span className="text-emerald-400">{totalSolved}</span> / {totalQuestions}
              </span>
            </div>
            <div className="w-24 bg-gray-800 h-2.5 rounded-full overflow-hidden p-0.5 border border-gray-700/50">
              <div
                className="bg-gradient-to-r from-emerald-500 to-indigo-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${percent}%` }}
              />
            </div>
            <span className="text-xs font-bold text-indigo-400 min-w-[36px] text-right">
              {percent}%
            </span>
          </div>

          {/* Bookmarks Toggle */}
          <button
            onClick={() => setShowBookmarksOnly(!showBookmarksOnly)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
              showBookmarksOnly
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-lg shadow-amber-500/10'
                : 'bg-gray-900/80 text-gray-300 border-gray-800 hover:border-gray-700 hover:text-white'
            }`}
            title="Toggle Bookmarked Problems"
          >
            <Bookmark className={`w-4 h-4 ${showBookmarksOnly ? 'fill-amber-400 text-amber-400' : ''}`} />
            <span>Bookmarks</span>
          </button>

          {/* Stats Analytics Modal Button */}
          <button
            onClick={onOpenStats}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-gray-900/80 text-gray-300 border border-gray-800 hover:border-indigo-500/40 hover:text-indigo-300 transition-all"
            title="View Solved Analytics"
          >
            <BarChart3 className="w-4 h-4 text-indigo-400" />
            <span className="hidden sm:inline">Analytics</span>
          </button>
        </div>

      </div>
    </header>
  );
}
