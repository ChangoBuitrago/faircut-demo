import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../contexts/DarkModeContext';

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-6 right-6 z-50 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 p-2.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 border border-gray-200 dark:border-gray-700"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <Sun size={18} className="text-gray-600 dark:text-gray-300" />
      ) : (
        <Moon size={18} className="text-gray-600" />
      )}
    </button>
  );
}

