import { GrammarTopic } from '../data/grammarData';

interface TopicCardProps {
  topic: GrammarTopic;
  completedCount: number;
  totalExercises: number;
  onClick: () => void;
}

export function TopicCard({ topic, completedCount, totalExercises, onClick }: TopicCardProps) {
  const progressPercent = totalExercises > 0 ? (completedCount / totalExercises) * 100 : 0;
  const isCompleted = completedCount === totalExercises && totalExercises > 0;

  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-5 border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:-translate-y-1 group"
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {topic.title}
        </h3>
        {isCompleted && (
          <span className="text-green-500 text-xl" title="Тема пройдена!">✓</span>
        )}
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{topic.titleEn}</p>
      <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">{topic.section}</p>
      
      <div className="mt-3">
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
          <span>Прогресс</span>
          <span>{completedCount}/{totalExercises}</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${
              isCompleted ? 'bg-green-500' : 'bg-blue-500'
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </button>
  );
}
