import React, { useState } from 'react';
import { ChevronDown, ChevronRight, CheckCircle2, ListFilter, Sparkles } from 'lucide-react';
import QuestionTable from './QuestionTable';
import confetti from 'canvas-confetti';

export default function SubtopicList({
  subtopics,
  completedMap,
  notesMap,
  bookmarksList,
  onToggleComplete,
  onToggleBookmark,
  onOpenNoteModal,
  searchQuery
}) {
  // Track open state for each subtopic (default open all or first)
  const [expandedSubtopics, setExpandedSubtopics] = useState({});

  const toggleSubtopic = (subId) => {
    setExpandedSubtopics((prev) => ({
      ...prev,
      [subId]: prev[subId] === false ? true : false
    }));
  };

  const handleToggleWithConfetti = (qId, subId, subTotal, currentSubSolved) => {
    const isCurrentlyDone = completedMap[qId];
    onToggleComplete(qId);

    // If checking off the last remaining question in a subtopic, trigger confetti celebration!
    if (!isCurrentlyDone && currentSubSolved + 1 === subTotal && subTotal > 0) {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  return (
    <div className="space-y-6">
      {subtopics.map((sub) => {
        // Filter questions if searchQuery is active
        const filteredQuestions = sub.questions.filter((q) => {
          if (!searchQuery) return true;
          const query = searchQuery.toLowerCase();
          return (
            q.title.toLowerCase().includes(query) ||
            q.difficulty.toLowerCase().includes(query) ||
            (q.leetCodeId && q.leetCodeId.toString().includes(query))
          );
        });

        if (searchQuery && filteredQuestions.length === 0) {
          return null; // Skip subtopic if no matching questions during search
        }

        // Subtopic stats calculation
        const subTotal = sub.questions.length;
        let subSolved = 0;
        sub.questions.forEach((q) => {
          if (completedMap[q.id]) subSolved++;
        });

        const subPercent = subTotal > 0 ? Math.round((subSolved / subTotal) * 100) : 0;
        const isSubCompleted = subTotal > 0 && subSolved === subTotal;
        const isExpanded = expandedSubtopics[sub.id] !== false; // Default true

        return (
          <div
            key={sub.id}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isSubCompleted
                ? 'bg-emerald-950/10 border-emerald-500/30'
                : 'bg-gray-900/40 border-gray-800/80 hover:border-gray-700/80'
            }`}
          >
            {/* Subtopic Header & Progress Bar */}
            <div
              onClick={() => toggleSubtopic(sub.id)}
              className="px-5 py-4 flex flex-col md:flex-row md:items-center justify-between gap-3 cursor-pointer select-none bg-gray-900/60 hover:bg-gray-800/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <button className="text-gray-400 hover:text-white transition-colors">
                  {isExpanded ? (
                    <ChevronDown className="w-5 h-5 text-indigo-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  )}
                </button>

                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="font-bold text-base text-gray-100 flex items-center gap-2">
                      {sub.name}
                      {isSubCompleted && (
                        <span className="flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Completed!
                        </span>
                      )}
                    </h3>
                  </div>
                  {sub.description && (
                    <p className="text-xs text-gray-400 mt-0.5">{sub.description}</p>
                  )}
                </div>
              </div>

              {/* Progress Count & Visual Progress Bar */}
              <div className="flex items-center gap-4 self-end md:self-auto">
                <div className="flex flex-col items-end">
                  <div className="text-xs font-bold text-gray-200">
                    <span className={isSubCompleted ? "text-emerald-400" : "text-indigo-400"}>
                      {subSolved}
                    </span>
                    <span className="text-gray-500"> / {subTotal} Questions</span>
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium">
                    {subPercent}% Done
                  </span>
                </div>

                <div className="w-32 bg-gray-800 h-2.5 rounded-full overflow-hidden p-0.5 border border-gray-700/50">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isSubCompleted
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-400 glow-emerald'
                        : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400'
                    }`}
                    style={{ width: `${subPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Subtopic Question Table */}
            {isExpanded && (
              <div className="p-4 border-t border-gray-800/60 bg-[#0C101C]">
                <QuestionTable
                  questions={filteredQuestions}
                  completedMap={completedMap}
                  notesMap={notesMap}
                  bookmarksList={bookmarksList}
                  onToggleComplete={(qId) => handleToggleWithConfetti(qId, sub.id, subTotal, subSolved)}
                  onToggleBookmark={onToggleBookmark}
                  onOpenNoteModal={onOpenNoteModal}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
