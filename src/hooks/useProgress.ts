import { useState, useEffect } from 'react';

interface ProgressData {
  [topicId: string]: {
    completed: number[];
    score: number;
  };
}

const STORAGE_KEY = 'golitsynsky-progress';

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const markCorrect = (topicId: string, exerciseId: number) => {
    setProgress(prev => {
      const topicProgress = prev[topicId] || { completed: [], score: 0 };
      if (!topicProgress.completed.includes(exerciseId)) {
        return {
          ...prev,
          [topicId]: {
            completed: [...topicProgress.completed, exerciseId],
            score: topicProgress.score + 1
          }
        };
      }
      return prev;
    });
  };

  const resetTopic = (topicId: string) => {
    setProgress(prev => ({
      ...prev,
      [topicId]: { completed: [], score: 0 }
    }));
  };

  const resetAll = () => {
    setProgress({});
  };

  const getTotalScore = () => {
    return Object.values(progress).reduce((sum, p) => sum + p.score, 0);
  };

  const getTotalCompleted = () => {
    return Object.values(progress).reduce((sum, p) => sum + p.completed.length, 0);
  };

  return { progress, markCorrect, resetTopic, resetAll, getTotalScore, getTotalCompleted };
}
