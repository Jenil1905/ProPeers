import React, { useState, useEffect } from 'react';
import { X, Save, FileText, ExternalLink, Code2, Clock, HardDrive } from 'lucide-react';

export default function NoteModal({
  question,
  initialNote,
  isOpen,
  onClose,
  onSaveNote
}) {
  const [noteText, setNoteText] = useState('');
  const [timeComplexity, setTimeComplexity] = useState('O(N)');
  const [spaceComplexity, setSpaceComplexity] = useState('O(1)');

  useEffect(() => {
    if (question && initialNote) {
      setNoteText(initialNote);
    } else {
      setNoteText('');
    }
  }, [question, initialNote]);

  if (!isOpen || !question) return null;

  const handleSave = () => {
    onSaveNote(question.id, noteText);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-2xl bg-[#111827] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-gray-900/80 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-gray-400">#{question.leetCodeId}</span>
                <h3 className="font-bold text-base text-gray-100">{question.title}</h3>
              </div>
              <p className="text-xs text-gray-400">Personal Solution Notes & Key Takeaways</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick LeetCode Problem Link Banner */}
        <div className="px-6 py-2.5 bg-indigo-950/30 border-b border-gray-800/80 flex items-center justify-between text-xs">
          <span className="text-gray-300 font-medium flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            Difficulty: <strong className="text-indigo-200">{question.difficulty}</strong>
          </span>
          <a
            href={question.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-semibold"
          >
            <span>Open Problem on LeetCode</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Note Content Area */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-purple-400" />
              Intuition, Approach & Solution Notes
            </label>
            <textarea
              rows={10}
              placeholder="Write down your intuition, edge cases, step-by-step approach, or paste your C++ / Java / Python / JS code snippet here..."
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              spellCheck="false"
              autoCorrect="off"
              autoCapitalize="off"
              className="w-full bg-gray-950/80 text-gray-200 text-sm font-mono p-4 rounded-xl border border-gray-800 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 resize-y no-ligatures"
              style={{
                fontVariantLigatures: 'none',
                fontFeatureSettings: '"liga" 0, "calt" 0, "dlig" 0, "hlig" 0'
              }}
            />
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-gray-900/80 border-t border-gray-800 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-indigo-500/20 transition-all"
          >
            <Save className="w-4 h-4" />
            <span>Save Notes</span>
          </button>
        </div>
      </div>
    </div>
  );
}
