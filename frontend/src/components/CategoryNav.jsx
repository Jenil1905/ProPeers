import React from 'react';
import {
  Grid,
  Type,
  Search,
  GitFork,
  Link,
  Layers,
  Network,
  Sliders,
  Share2,
  Cpu,
  Zap,
  Binary,
  GitPullRequest
} from 'lucide-react';

const iconMap = {
  Grid,
  Type,
  Search,
  GitFork,
  Link,
  Layers,
  Network,
  Sliders,
  Share2,
  Cpu,
  Zap,
  Binary,
  GitPullRequest
};

export default function CategoryNav({ 
  topics, 
  activeTopicId, 
  onSelectTopic,
  completedMap
}) {
  return (
    <div className="w-full bg-[#0E1322]/80 border-b border-gray-800/60 sticky top-[61px] z-30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto py-3 no-scrollbar scroll-smooth">
          {topics.map((topic) => {
            const IconComponent = iconMap[topic.icon] || Grid;
            const isActive = topic.id === activeTopicId;
            
            // Calculate topic completion
            let topicTotal = 0;
            let topicSolved = 0;

            topic.subtopics.forEach(sub => {
              sub.questions.forEach(q => {
                topicTotal++;
                if (completedMap[q.id]) topicSolved++;
              });
            });

            const topicPercent = topicTotal > 0 ? Math.round((topicSolved / topicTotal) * 100) : 0;
            const isCompleted = topicTotal > 0 && topicSolved === topicTotal;

            return (
              <button
                key={topic.id}
                onClick={() => onSelectTopic(topic.id)}
                className={`flex items-center gap-2.5 px-4 py-2 rounded-xl font-medium text-xs whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-500/30'
                    : 'bg-gray-900/40 border-gray-800/80 text-gray-400 hover:bg-gray-800/60 hover:text-gray-200 hover:border-gray-700'
                }`}
              >
                <IconComponent className={`w-4 h-4 ${isActive ? 'text-indigo-400' : 'text-gray-500'}`} />
                <span>{topic.name}</span>
                
                {/* Topic Progress Badge */}
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                  isCompleted 
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : isActive 
                      ? 'bg-indigo-500/30 text-indigo-200' 
                      : 'bg-gray-800 text-gray-400'
                }`}>
                  {topicSolved}/{topicTotal}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
