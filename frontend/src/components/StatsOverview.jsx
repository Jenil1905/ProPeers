import React from 'react';
import { X, Trophy, CheckCircle2, AlertTriangle, RotateCcw, Flame } from 'lucide-react';

export default function StatsOverview({
  isOpen,
  onClose,
  topics,
  completedMap,
  onResetProgress
}) {
  if (!isOpen) return null;

  // Calculate difficulty stats
  let totalEasy = 0, solvedEasy = 0;
  let totalMedium = 0, solvedMedium = 0;
  let totalHard = 0, solvedHard = 0;
  let totalAll = 0, solvedAll = 0;

  topics.forEach((t) => {
    t.subtopics.forEach((sub) => {
      sub.questions.forEach((q) => {
        totalAll++;
        const isDone = Boolean(completedMap[q.id]);
        if (isDone) solvedAll++;

        if (q.difficulty === 'Easy') {
          totalEasy++;
          if (isDone) solvedEasy++;
        } else if (q.difficulty === 'Medium') {
          totalMedium++;
          if (isDone) solvedMedium++;
        } else if (q.difficulty === 'Hard') {
          totalHard++;
          if (isDone) solvedHard++;
        }
      });
    });
  });

  const easyPercent = totalEasy > 0 ? Math.round((solvedEasy / totalEasy) * 100) : 0;
  const medPercent = totalMedium > 0 ? Math.round((solvedMedium / totalMedium) * 100) : 0;
  const hardPercent = totalHard > 0 ? Math.round((solvedHard / totalHard) * 100) : 0;
  const overallPercent = totalAll > 0 ? Math.round((solvedAll / totalAll) * 100) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div 
        className="w-full max-w-3xl bg-[#111827] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-gray-900/90 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-100">ProPeers Solved Analytics</h3>
              <p className="text-xs text-gray-400">Detailed breakdown of your DSA roadmap progress</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Difficulty Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Easy */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Easy</span>
                <span className="text-xs font-semibold text-emerald-300">{easyPercent}%</span>
              </div>
              <div className="text-2xl font-extrabold text-white my-1">
                {solvedEasy} <span className="text-sm font-normal text-gray-400">/ {totalEasy}</span>
              </div>
              <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden mt-2">
                <div className="bg-emerald-400 h-full rounded-full transition-all duration-500" style={{ width: `${easyPercent}%` }} />
              </div>
            </div>

            {/* Medium */}
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Medium</span>
                <span className="text-xs font-semibold text-amber-300">{medPercent}%</span>
              </div>
              <div className="text-2xl font-extrabold text-white my-1">
                {solvedMedium} <span className="text-sm font-normal text-gray-400">/ {totalMedium}</span>
              </div>
              <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden mt-2">
                <div className="bg-amber-400 h-full rounded-full transition-all duration-500" style={{ width: `${medPercent}%` }} />
              </div>
            </div>

            {/* Hard */}
            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">Hard</span>
                <span className="text-xs font-semibold text-rose-300">{hardPercent}%</span>
              </div>
              <div className="text-2xl font-extrabold text-white my-1">
                {solvedHard} <span className="text-sm font-normal text-gray-400">/ {totalHard}</span>
              </div>
              <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden mt-2">
                <div className="bg-rose-400 h-full rounded-full transition-all duration-500" style={{ width: `${hardPercent}%` }} />
              </div>
            </div>

          </div>

          {/* Topic Breakdown Grid */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Topic Progress Breakdown</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {topics.map((t) => {
                let tTotal = 0;
                let tSolved = 0;
                t.subtopics.forEach((sub) => {
                  sub.questions.forEach((q) => {
                    tTotal++;
                    if (completedMap[q.id]) tSolved++;
                  });
                });
                const tPercent = tTotal > 0 ? Math.round((tSolved / tTotal) * 100) : 0;

                return (
                  <div key={t.id} className="p-3 rounded-xl bg-gray-900/60 border border-gray-800 flex items-center justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-gray-200 truncate">{t.name}</span>
                        <span className="text-[11px] font-mono text-indigo-400 font-bold">{tSolved}/{tTotal}</span>
                      </div>
                      <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-indigo-500 h-full rounded-full transition-all duration-300" style={{ width: `${tPercent}%` }} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-gray-900/90 border-t border-gray-800 flex items-center justify-between">
          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to reset all solved progress? This cannot be undone.")) {
                onResetProgress();
                onClose();
              }
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-400 hover:bg-rose-500/10 border border-rose-500/20 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Progress</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
          >
            Close Analytics
          </button>
        </div>
      </div>
    </div>
  );
}
