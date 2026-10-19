import { useState } from 'react';
import { GrammarTopic, Exercise } from '../data/grammarData';

interface ExerciseViewProps {
  topic: GrammarTopic;
  completedExercises: number[];
  onCorrectAnswer: (exerciseId: number) => void;
  onBack: () => void;
  onBackToTheory: () => void;
}

export function ExerciseView({ topic, completedExercises, onCorrectAnswer, onBack, onBackToTheory }: ExerciseViewProps) {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [sessionCorrect, setSessionCorrect] = useState(0);
  const [sessionTotal, setSessionTotal] = useState(0);

  const currentExercise: Exercise = topic.exercises[currentExerciseIndex];
  const isCompleted = completedExercises.includes(currentExercise.id);
  const isLastExercise = currentExerciseIndex === topic.exercises.length - 1;

  const checkAnswer = () => {
    if (!selectedAnswer) return;
    setIsAnswerChecked(true);
    setSessionTotal(prev => prev + 1);
    if (selectedAnswer === currentExercise.correctAnswer) {
      setSessionCorrect(prev => prev + 1);
      if (!isCompleted) {
        onCorrectAnswer(currentExercise.id);
      }
    }
  };

  const nextExercise = () => {
    if (isLastExercise) return;
    setCurrentExerciseIndex(prev => prev + 1);
    setSelectedAnswer(null);
    setIsAnswerChecked(false);
    setShowHint(false);
  };

  const isCorrect = selectedAnswer === currentExercise.correctAnswer;

  return (
    <div className="max-w-3xl mx-auto">
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        К теории
      </button>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 border border-gray-100 dark:border-gray-700">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">{topic.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Упражнения</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
              {currentExerciseIndex + 1} / {topic.exercises.length}
            </p>
            <p className="text-xs text-gray-400">
              Верно: {sessionCorrect}/{sessionTotal}
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6">
          <div
            className="h-2 rounded-full bg-blue-500 transition-all duration-300"
            style={{ width: `${((currentExerciseIndex + 1) / topic.exercises.length) * 100}%` }}
          />
        </div>

        {/* Exercise */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold">
              {currentExerciseIndex + 1}
            </span>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">
              {currentExercise.question}
            </h3>
          </div>

          {/* Options */}
          {currentExercise.options && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {currentExercise.options.map((option) => {
                let optionStyle = "border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20";
                
                if (isAnswerChecked) {
                  if (option === currentExercise.correctAnswer) {
                    optionStyle = "border-green-500 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400";
                  } else if (option === selectedAnswer && !isCorrect) {
                    optionStyle = "border-red-500 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400";
                  } else {
                    optionStyle = "border-gray-200 dark:border-gray-600 opacity-50";
                  }
                } else if (option === selectedAnswer) {
                  optionStyle = "border-blue-500 bg-blue-50 dark:bg-blue-900/30 ring-2 ring-blue-200 dark:ring-blue-800";
                }

                return (
                  <button
                    key={option}
                    onClick={() => !isAnswerChecked && setSelectedAnswer(option)}
                    disabled={isAnswerChecked}
                    className={`p-3 rounded-lg border-2 text-left transition-all duration-200 font-medium ${optionStyle}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          )}

          {/* Hint */}
          {!isAnswerChecked && currentExercise.hint && (
            <div className="mb-4">
              <button
                onClick={() => setShowHint(!showHint)}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                {showHint ? 'Скрыть подсказку' : 'Показать подсказку'}
              </button>
              {showHint && (
                <p className="mt-2 text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">
                  💡 {currentExercise.hint}
                </p>
              )}
            </div>
          )}

          {/* Result */}
          {isAnswerChecked && (
            <div className={`p-4 rounded-lg mb-4 ${
              isCorrect
                ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
            }`}>
              {isCorrect ? (
                <p className="text-green-700 dark:text-green-400 font-medium flex items-center gap-2">
                  <span className="text-xl">✓</span> Правильно! Отличная работа!
                </p>
              ) : (
                <div>
                  <p className="text-red-700 dark:text-red-400 font-medium flex items-center gap-2 mb-1">
                    <span className="text-xl">✗</span> Неправильно
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Правильный ответ: <strong>{currentExercise.correctAnswer}</strong>
                  </p>
                  {currentExercise.hint && (
                    <p className="text-sm text-amber-600 dark:text-amber-400 mt-2">
                      💡 {currentExercise.hint}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          {!isAnswerChecked ? (
            <button
              onClick={checkAnswer}
              disabled={!selectedAnswer}
              className="px-6 py-2.5 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Проверить ответ
            </button>
          ) : (
            <>
              {isLastExercise ? (
                <button
                  onClick={onBackToTheory}
                  className="px-6 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-200"
                >
                  Завершить ✓
                </button>
              ) : (
                <button
                  onClick={nextExercise}
                  className="px-6 py-2.5 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Следующее упражнение →
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
