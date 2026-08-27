import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CategoryNav from './components/CategoryNav';
import SubtopicList from './components/SubtopicList';
import NoteModal from './components/NoteModal';
import StatsOverview from './components/StatsOverview';
import { dsaTopics } from './data/dsaTopics';
import { fetchProgress, saveProgress } from './services/api';
import { Bookmark, Sparkles, Filter, CheckCircle2, ArrowRight } from 'lucide-react';

export default function App() {
  // State
  const [activeTopicId, setActiveTopicId] = useState('arrays'); // Default is Array topic
  const [completedMap, setCompletedMap] = useState({});
  const [notesMap, setNotesMap] = useState({});
  const [bookmarksList, setBookmarksList] = useState([]);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);
  const [difficultyFilter, setDifficultyFilter] = useState('All'); // 'All' | 'Easy' | 'Medium' | 'Hard'
  
  const [noteModalQuestion, setNoteModalQuestion] = useState(null);
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Initial Load from API / LocalStorage
  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      const data = await fetchProgress();
      
      const compMap = {};
      if (Array.isArray(data.completed)) {
        data.completed.forEach((id) => { compMap[id] = true; });
      }
      
      setCompletedMap(compMap);
      setNotesMap(data.notes || {});
      setBookmarksList(Array.isArray(data.bookmarks) ? data.bookmarks : []);
      setIsLoading(false);
    }
    loadData();
  }, []);

  // Sync back to API / LocalStorage whenever user state changes
  const persistState = (newCompletedMap, newNotesMap, newBookmarksList) => {
    const completedArr = Object.keys(newCompletedMap).filter((id) => newCompletedMap[id]);
    saveProgress(completedArr, newNotesMap, newBookmarksList);
  };

  // Toggle question completed
  const handleToggleComplete = (qId) => {
    const updated = {
      ...completedMap,
      [qId]: !completedMap[qId]
    };
    setCompletedMap(updated);
    persistState(updated, notesMap, bookmarksList);
  };

  // Toggle question bookmark
  const handleToggleBookmark = (qId) => {
    let updatedBookmarks;
    if (bookmarksList.includes(qId)) {
      updatedBookmarks = bookmarksList.filter((id) => id !== qId);
    } else {
      updatedBookmarks = [...bookmarksList, qId];
    }
    setBookmarksList(updatedBookmarks);
    persistState(completedMap, notesMap, updatedBookmarks);
  };

  // Save Note
  const handleSaveNote = (qId, noteText) => {
    const updatedNotes = {
      ...notesMap,
      [qId]: noteText
    };
    setNotesMap(updatedNotes);
    persistState(completedMap, updatedNotes, bookmarksList);
  };

  // Open Note Modal
  const handleOpenNoteModal = (question) => {
    setNoteModalQuestion(question);
    setIsNoteModalOpen(true);
  };

  // Reset Progress
  const handleResetProgress = () => {
    setCompletedMap({});
    setNotesMap({});
    setBookmarksList([]);
    persistState({}, {}, []);
  };

  // Total question calculation
  let totalQuestions = 0;
  let totalSolved = 0;

  dsaTopics.forEach((t) => {
    t.subtopics.forEach((sub) => {
      sub.questions.forEach((q) => {
        totalQuestions++;
        if (completedMap[q.id]) totalSolved++;
      });
    });
  });

  // Current active topic data
  const currentTopic = dsaTopics.find((t) => t.id === activeTopicId) || dsaTopics[0];

  // Prepare display subtopics according to filters
  const preparedSubtopics = currentTopic.subtopics.map((sub) => {
    let filteredQuestions = sub.questions;

    // Filter by Difficulty if selected
    if (difficultyFilter !== 'All') {
      filteredQuestions = filteredQuestions.filter((q) => q.difficulty === difficultyFilter);
    }

    // Filter by Bookmarks if active
    if (showBookmarksOnly) {
      filteredQuestions = filteredQuestions.filter((q) => bookmarksList.includes(q.id));
    }

    return {
      ...sub,
      questions: filteredQuestions
    };
  }).filter((sub) => sub.questions.length > 0 || (!searchQuery && !showBookmarksOnly && difficultyFilter === 'All'));

  // Collect all bookmarked questions across all topics if showBookmarksOnly is active
  let allBookmarkedQuestions = [];
  if (showBookmarksOnly) {
    dsaTopics.forEach((t) => {
      t.subtopics.forEach((sub) => {
        sub.questions.forEach((q) => {
          if (bookmarksList.includes(q.id)) {
            allBookmarkedQuestions.push({ ...q, topicName: t.name, subtopicName: sub.name });
          }
        });
      });
    });
  }

  return (
    <div className="min-h-screen bg-[#0B0F19] text-gray-100 flex flex-col font-sans">
      
      {/* Header */}
      <Header
        totalSolved={totalSolved}
        totalQuestions={totalQuestions}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        showBookmarksOnly={showBookmarksOnly}
        setShowBookmarksOnly={setShowBookmarksOnly}
        onOpenStats={() => setIsStatsOpen(true)}
        onResetProgress={handleResetProgress}
      />

      {/* Main Category Horizontal Nav Bar */}
      <CategoryNav
        topics={dsaTopics}
        activeTopicId={activeTopicId}
        onSelectTopic={(id) => {
          setActiveTopicId(id);
          setShowBookmarksOnly(false); // Reset bookmarks filter on topic switch
        }}
        completedMap={completedMap}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 lg:px-8 py-6 space-y-6">
        
        {/* Topic Title & Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-gray-900/80 via-[#131B2E] to-gray-900/80 p-6 rounded-2xl border border-gray-800/80 shadow-xl">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 text-xs font-bold border border-indigo-500/20 uppercase tracking-wider">
                DSA Roadmap
              </span>
              {showBookmarksOnly && (
                <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-bold border border-amber-500/20 uppercase tracking-wider">
                  Bookmarked Questions ({allBookmarkedQuestions.length})
                </span>
              )}
            </div>
            <h1 className="text-2xl lg:text-3xl font-extrabold text-white mt-1">
              {showBookmarksOnly ? "Bookmarked Problems for Revision" : currentTopic.name}
            </h1>
            <p className="text-sm text-gray-400 mt-1 max-w-2xl">
              {showBookmarksOnly 
                ? "All questions marked with a star for quick revision before your interviews."
                : currentTopic.description}
            </p>
          </div>

          {/* Difficulty Quick Filters */}
          <div className="flex items-center gap-1.5 bg-gray-950/80 p-1.5 rounded-xl border border-gray-800 self-start md:self-auto">
            <span className="text-xs text-gray-400 px-2 font-medium flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              Diff:
            </span>
            {['All', 'Easy', 'Medium', 'Hard'].map((diff) => (
              <button
                key={diff}
                onClick={() => setDifficultyFilter(diff)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  difficultyFilter === diff
                    ? diff === 'Easy' 
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' 
                      : diff === 'Medium'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : diff === 'Hard'
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                          : 'bg-indigo-600 text-white shadow-md'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>

        {/* Loading Spinner */}
        {isLoading ? (
          <div className="py-20 text-center space-y-3">
            <div className="w-10 h-10 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-sm text-gray-400">Loading your DSA roadmap...</p>
          </div>
        ) : showBookmarksOnly ? (
          /* Bookmarks Only Dedicated View */
          allBookmarkedQuestions.length === 0 ? (
            <div className="py-16 text-center bg-gray-900/30 rounded-2xl border border-gray-800/60 p-8 space-y-3">
              <Bookmark className="w-12 h-12 text-gray-600 mx-auto" />
              <h3 className="text-lg font-bold text-gray-300">No Bookmarked Questions Yet</h3>
              <p className="text-sm text-gray-500 max-w-md mx-auto">
                Click the star icon on any question while solving to add it to your revision bookmarks.
              </p>
            </div>
          ) : (
            <SubtopicList
              subtopics={[{
                id: "bookmarked_list",
                name: "All Bookmarked Problems",
                description: "Cross-topic revision list",
                questions: allBookmarkedQuestions
              }]}
              completedMap={completedMap}
              notesMap={notesMap}
              bookmarksList={bookmarksList}
              onToggleComplete={handleToggleComplete}
              onToggleBookmark={handleToggleBookmark}
              onOpenNoteModal={handleOpenNoteModal}
              searchQuery={searchQuery}
            />
          )
        ) : (
          /* Topic Subtopics List & Question Tables */
          <SubtopicList
            subtopics={preparedSubtopics}
            completedMap={completedMap}
            notesMap={notesMap}
            bookmarksList={bookmarksList}
            onToggleComplete={handleToggleComplete}
            onToggleBookmark={handleToggleBookmark}
            onOpenNoteModal={handleOpenNoteModal}
            searchQuery={searchQuery}
          />
        )}

      </main>

      {/* Note Modal */}
      <NoteModal
        question={noteModalQuestion}
        initialNote={noteModalQuestion ? notesMap[noteModalQuestion.id] : ''}
        isOpen={isNoteModalOpen}
        onClose={() => setIsNoteModalOpen(false)}
        onSaveNote={handleSaveNote}
      />

      {/* Stats Analytics Modal */}
      <StatsOverview
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
        topics={dsaTopics}
        completedMap={completedMap}
        onResetProgress={handleResetProgress}
      />

      {/* Footer */}
      <footer className="mt-12 border-t border-gray-800/60 py-6 text-center text-xs text-gray-500">
        <p>ProPeers Personal DSA Roadmap & Problem Tracker • Built with React & Node.js</p>
      </footer>
    </div>
  );
}
