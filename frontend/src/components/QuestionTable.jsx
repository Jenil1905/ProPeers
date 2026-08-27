import React from 'react';
import { 
  CheckSquare, 
  Square, 
  ExternalLink, 
  FileText, 
  Bookmark,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

const difficultyStyles = {
  Easy: {
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 glow-emerald',
    dot: 'bg-emerald-400',
    text: 'text-emerald-400'
  },
  Medium: {
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30 glow-amber',
    dot: 'bg-amber-400',
    text: 'text-amber-400'
  },
  Hard: {
    badge: 'bg-rose-500/10 text-rose-400 border-rose-500/30 glow-rose',
    dot: 'bg-rose-400',
    text: 'text-rose-400'
  }
};

export default function QuestionTable({
  questions,
  completedMap,
  notesMap,
  bookmarksList,
  onToggleComplete,
  onToggleBookmark,
  onOpenNoteModal
}) {
  // Sort questions by difficulty: Easy -> Medium -> Hard
  const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 };
  const sortedQuestions = [...questions].sort((a, b) => {
    const diffDiff = (difficultyOrder[a.difficulty] || 99) - (difficultyOrder[b.difficulty] || 99);
    if (diffDiff !== 0) return diffDiff;
    return (a.leetCodeId || 0) - (b.leetCodeId || 0);
  });

  return (
    <div className="w-full overflow-hidden rounded-xl border border-gray-800/80 bg-gray-900/40">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-gray-900/80 text-gray-400 border-b border-gray-800 font-semibold uppercase tracking-wider">
              <th scope="col" className="py-3 px-4 w-12 text-center">Status</th>
              <th scope="col" className="py-3 px-4">Question Title</th>
              <th scope="col" className="py-3 px-4 w-28 text-center">Difficulty</th>
              <th scope="col" className="py-3 px-4 w-32 text-center">LeetCode Link</th>
              <th scope="col" className="py-3 px-4 w-24 text-center">Notes</th>
              <th scope="col" className="py-3 px-4 w-20 text-center">Bookmark</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800/60 font-medium">
            {sortedQuestions.map((q) => {
              const isDone = Boolean(completedMap[q.id]);
              const isBookmarked = bookmarksList.includes(q.id);
              const hasNotes = Boolean(notesMap[q.id] && notesMap[q.id].trim());
              const style = difficultyStyles[q.difficulty] || difficultyStyles.Easy;

              return (
                <tr
                  key={q.id}
                  className={`transition-colors hover:bg-gray-800/40 ${
                    isDone ? 'bg-indigo-950/20' : ''
                  }`}
                >
                  {/* Status Checkbox */}
                  <td className="py-3.5 px-4 text-center">
                    <button
                      onClick={() => onToggleComplete(q.id)}
                      className="inline-flex items-center justify-center p-1 rounded-lg text-gray-400 hover:text-white transition-all transform active:scale-90"
                      title={isDone ? "Mark as Undone" : "Mark as Done"}
                    >
                      {isDone ? (
                        <CheckSquare className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
                      ) : (
                        <Square className="w-5 h-5 text-gray-600 hover:text-indigo-400" />
                      )}
                    </button>
                  </td>

                  {/* Question Title & ID */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono text-gray-500">#{q.leetCodeId}</span>
                      <span className={`font-semibold text-sm ${isDone ? 'text-gray-400 line-through' : 'text-gray-100'}`}>
                        {q.title}
                      </span>
                    </div>
                  </td>

                  {/* Difficulty Badge */}
                  <td className="py-3.5 px-4 text-center">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border ${style.badge}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
                      {q.difficulty}
                    </span>
                  </td>

                  {/* Direct LeetCode Link (Opens in New Tab) */}
                  <td className="py-3.5 px-4 text-center">
                    <a
                      href={q.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 hover:border-indigo-400 text-xs font-medium transition-all group"
                      title={`Solve #${q.leetCodeId} on LeetCode`}
                    >
                      <span>LeetCode</span>
                      <ExternalLink className="w-3.5 h-3.5 text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </td>

                  {/* Personal Notes Section */}
                  <td className="py-3.5 px-4 text-center">
                    <button
                      onClick={() => onOpenNoteModal(q)}
                      className={`relative inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                        hasNotes
                          ? 'bg-purple-500/15 text-purple-300 border-purple-500/40 hover:bg-purple-500/25'
                          : 'bg-gray-800/60 text-gray-400 border-gray-700/60 hover:text-white hover:border-gray-600'
                      }`}
                      title={hasNotes ? "Edit saved notes" : "Add notes / complexity"}
                    >
                      <FileText className={`w-3.5 h-3.5 ${hasNotes ? 'text-purple-400' : ''}`} />
                      <span>{hasNotes ? 'Notes' : '+ Add'}</span>
                      {hasNotes && (
                        <span className="w-2 h-2 rounded-full bg-purple-400 absolute -top-0.5 -right-0.5 animate-pulse" />
                      )}
                    </button>
                  </td>

                  {/* Bookmark Star Section */}
                  <td className="py-3.5 px-4 text-center">
                    <button
                      onClick={() => onToggleBookmark(q.id)}
                      className="inline-flex items-center justify-center p-1.5 rounded-lg text-gray-400 hover:text-amber-400 transition-colors"
                      title={isBookmarked ? "Remove Bookmark" : "Bookmark Problem"}
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? 'text-amber-400 fill-amber-400' : 'text-gray-500 hover:text-amber-400'}`} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
