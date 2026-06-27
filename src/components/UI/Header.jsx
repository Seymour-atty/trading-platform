import { useState } from 'react';
import { Sun, Moon, TrendingUp, Wifi, WifiOff } from 'lucide-react';
import useStore from '../../store';
import '../../styles/Header.css';

const Header = ({ onThemeToggle, currentTheme }) => {
  const { isConnected } = useStore();

  return (
    <header className="header">
      <div className="header-left">
        <a href="#" className="logo">
          <TrendingUp size={24} />
          Trading Platform
        </a>
      </div>
      <div className="header-right">
        <div className={`connection-status ${isConnected ? 'connected' : 'disconnected'}`}>
          <span className="status-dot"></span>
          {isConnected ? 'Live' : 'Disconnected'}
        </div>
        <button
          className="theme-toggle"
          onClick={onThemeToggle}
          title={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
        >
          {currentTheme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
