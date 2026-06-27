import { useState, useEffect } from 'react';
import { useStore } from './store';
import Header from './components/UI/Header';
import TradingDashboard from './components/Dashboard/TradingDashboard';
import './styles/App.css';

function App() {
  const { theme, setTheme } = useStore();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize app and connect to data feeds
    setIsInitialized(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={`app theme-${theme}`}>
      <Header onThemeToggle={toggleTheme} currentTheme={theme} />
      {isInitialized && <TradingDashboard />}
    </div>
  );
}

export default App;
