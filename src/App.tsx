import { useState } from 'react';
import { grammarTopics, sections } from './data/grammarData';
import { TopicCard } from './components/TopicCard';
import { TheoryView } from './components/TheoryView';
import { ExerciseView } from './components/ExerciseView';
import { Stats } from './components/Stats';
import { useProgress } from './hooks/useProgress';

type View = 'home' | 'theory' | 'exercises';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });

  const { progress, markCorrect, resetTopic, resetAll, getTotalScore, getTotalCompleted } = useProgress();

  const selectedTopic = grammarTopics.find(t => t.id === selectedTopicId) || null;

  const totalExercises = grammarTopics.reduce((sum, t) => sum + t.exercises.length, 0);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', String(!darkMode));
  };

  const openTopic = (topicId: string) => {
    setSelectedTopicId(topicId);
    setCurrentView('theory');
  };

  const openExercises = () => {
    setCurrentView('exercises');
  };

  const goHome = () => {
    setCurrentView('home');
    setSelectedTopicId(null);
  };

  const goBackToTheory = () => {
    setCurrentView('theory');
  };

  const filteredTopics = selectedSection
    ? grammarTopics.filter(t => t.section === selectedSection)
    : grammarTopics;

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <button onClick={goHome} className="flex items-center gap-3 group">
              <span className="text-3xl">📚</span>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Грамматика английского
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">
                  по учебнику Голицинского
                </p>
              </div>
            </button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              title={darkMode ? 'Светлая тема' : 'Тёмная тема'}
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 py-8">
          {currentView === 'home' && (
            <>
              {/* Welcome Section */}
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-3">
                  Изучайте грамматику английского языка
                </h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Интерактивные упражнения по учебнику Голицинского «Грамматика. Сборник упражнений». 
                  Выберите тему, изучите теорию и закрепите знания на практике.
                </p>
              </div>

              {/* Stats */}
              <Stats
                totalScore={getTotalScore()}
                totalCompleted={getTotalCompleted()}
                totalExercises={totalExercises}
                onResetAll={resetAll}
              />

              {/* Section Filter */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedSection(null)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedSection === null
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    Все темы
                  </button>
                  {sections.map(section => (
                    <button
                      key={section}
                      onClick={() => setSelectedSection(section)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedSection === section
                          ? 'bg-blue-500 text-white shadow-md'
                          : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                      }`}
                    >
                      {section}
                    </button>
                  ))}
                </div>
              </div>

              {/* Topics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTopics.map(topic => (
                  <TopicCard
                    key={topic.id}
                    topic={topic}
                    completedCount={progress[topic.id]?.completed.length || 0}
                    totalExercises={topic.exercises.length}
                    onClick={() => openTopic(topic.id)}
                  />
                ))}
              </div>
            </>
          )}

          {currentView === 'theory' && selectedTopic && (
            <TheoryView
              topic={selectedTopic}
              onStartExercises={openExercises}
              onBack={goHome}
            />
          )}

          {currentView === 'exercises' && selectedTopic && (
            <ExerciseView
              topic={selectedTopic}
              completedExercises={progress[selectedTopic.id]?.completed || []}
              onCorrectAnswer={(exerciseId) => markCorrect(selectedTopic.id, exerciseId)}
              onBack={goBackToTheory}
              onBackToTheory={goBackToTheory}
            />
          )}
        </main>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6 mt-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              📚 Приложение для изучения английского языка по учебнику Голицинского
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              Грамматика. Сборник упражнений — В.Л. Голицинский
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
