import { GrammarTopic } from '../data/grammarData';

interface TheoryViewProps {
  topic: GrammarTopic;
  onStartExercises: () => void;
  onBack: () => void;
}

export function TheoryView({ topic, onStartExercises, onBack }: TheoryViewProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Назад к темам
      </button>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 border border-gray-100 dark:border-gray-700">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full mb-3">
            {topic.section}
          </span>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            {topic.title}
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">{topic.titleEn}</p>
        </div>

        {/* Theory */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3 flex items-center gap-2">
            <span className="text-2xl">📖</span> Теория
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            {topic.theory}
          </p>
        </div>

        {/* Rules */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3 flex items-center gap-2">
            <span className="text-2xl">📋</span> Правила
          </h2>
          <ul className="space-y-2">
            {topic.rules.map((rule, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold">
                  {index + 1}
                </span>
                <span className="leading-relaxed">{rule}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Examples */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3 flex items-center gap-2">
            <span className="text-2xl">💡</span> Примеры
          </h2>
          <div className="space-y-2">
            {topic.examples.map((example, index) => (
              <div
                key={index}
                className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg border-l-4 border-green-400"
              >
                <p className="text-gray-700 dark:text-gray-200">{example}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Start Exercises Button */}
        <div className="text-center pt-4">
          <button
            onClick={onStartExercises}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Перейти к упражнениям →
          </button>
        </div>
      </div>
    </div>
  );
}
