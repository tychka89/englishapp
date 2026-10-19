interface StatsProps {
  totalScore: number;
  totalCompleted: number;
  totalExercises: number;
  onResetAll: () => void;
}

export function Stats({ totalScore, totalCompleted, totalExercises, onResetAll }: StatsProps) {
  const percentage = totalExercises > 0 ? Math.round((totalCompleted / totalExercises) * 100) : 0;

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg p-6 text-white mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold opacity-90 mb-2">📊 Ваш прогресс</h2>
          <div className="flex flex-wrap gap-6">
            <div>
              <p className="text-3xl font-bold">{totalScore}</p>
              <p className="text-sm opacity-80">Правильных ответов</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{totalCompleted}/{totalExercises}</p>
              <p className="text-sm opacity-80">Упражнений выполнено</p>
            </div>
            <div>
              <p className="text-3xl font-bold">{percentage}%</p>
              <p className="text-sm opacity-80">Общий прогресс</p>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={onResetAll}
            className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-medium transition-colors backdrop-blur-sm"
          >
            Сбросить прогресс
          </button>
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="mt-4">
        <div className="w-full bg-white/20 rounded-full h-3">
          <div
            className="h-3 rounded-full bg-white transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
