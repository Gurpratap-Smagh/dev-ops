

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const BrowserNavbar: React.FC = () => {

  const navigate = useNavigate();
  const [dark, setDark] = useState(() =>
    typeof window !== 'undefined' ? localStorage.getItem('theme') === 'dark' : false
  );
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  const handleAlert = (feature: string) => {
    alert(`${feature} feature will be added later.`);
  };

  return (
    <header className="w-full bg-white dark:bg-llama-dark border-b border-llama-pink shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-2 px-4">
        {/* Left: Logo and Navigation Buttons */}
        <div className="flex items-center gap-4 min-w-0">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}> 
            <img src="/public/llama.svg" alt="Luminous Llama" className="w-10 h-10" />
            <span className="text-2xl font-bold bg-gradient-to-r from-llama-pink via-llama-gold to-llama-purple bg-clip-text text-transparent select-none">Luminous Llama</span>
          </div>
          <button onClick={() => handleAlert('Back')} className="rounded-full p-2 hover:bg-llama-pink/10" aria-label="Back">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
          </button>
          <button onClick={() => handleAlert('Forward')} className="rounded-full p-2 hover:bg-llama-pink/10" aria-label="Forward">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </button>
          <button onClick={() => handleAlert('Reload')} className="rounded-full p-2 hover:bg-llama-pink/10" aria-label="Reload">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 017.5-7.5 7.5 7.5 0 017.5 7.5m-15 0a7.5 7.5 0 0015 0m-15 0H3m15 0h1.5" /></svg>
          </button>
        </div>

        {/* Right: Feature Buttons */}
        <div className="flex items-center gap-2">
          <Link to="/history" className="rounded-full px-3 py-1 hover:bg-llama-pink/10 font-medium flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
            History
          </Link>
          <Link to="/bookmarks" className="rounded-full px-3 py-1 hover:bg-llama-pink/10 font-medium flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 5v14l7-7 7 7V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" /></svg>
            Bookmarks
          </Link>
          <button onClick={() => handleAlert('Extensions')} className="rounded-full px-3 py-1 hover:bg-llama-pink/10 font-medium flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
            Extensions
          </button>
          <Link to="/settings" className="rounded-full px-3 py-1 hover:bg-llama-pink/10 font-medium flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a1.65 1.65 0 01.33 1.82l-1.1 1.9a1.65 1.65 0 01-2.1.7 1.65 1.65 0 01-.7-2.1l1.1-1.9a1.65 1.65 0 012.1-.7zM4.6 9a1.65 1.65 0 01-.33-1.82l1.1-1.9a1.65 1.65 0 012.1-.7 1.65 1.65 0 01.7 2.1l-1.1 1.9a1.65 1.65 0 01-2.1.7z" /></svg>
            Settings
          </Link>
          <button onClick={() => handleAlert('AI')} className="rounded-full p-2 hover:bg-llama-pink/10" aria-label="AI">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 15s1.5-2 4-2 4 2 4 2" /><circle cx="9" cy="10" r="1" /><circle cx="15" cy="10" r="1" /></svg>
          </button>
          <button onClick={() => handleAlert('Profile')} className="rounded-full p-2 hover:bg-llama-pink/10" aria-label="Profile">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><circle cx="12" cy="8" r="4" /><path strokeLinecap="round" strokeLinejoin="round" d="M4 20v-1a4 4 0 014-4h8a4 4 0 014 4v1" /></svg>
          </button>
          {/* Light/Dark mode toggle */}
          <button
            onClick={() => setDark((d) => !d)}
            className="rounded-full p-2 hover:bg-llama-pink/10 ml-2"
            aria-label="Toggle dark mode"
            title="Toggle light/dark mode"
          >
            {dark ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0112 21.75a9.75 9.75 0 010-19.5c.414 0 .75.336.75.75v.75a.75.75 0 01-.75.75A8.25 8.25 0 003.75 12c0 4.556 3.694 8.25 8.25 8.25a8.25 8.25 0 007.5-4.998.75.75 0 01.75-.75h.75a.75.75 0 01.75.75z" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><circle cx="12" cy="12" r="5" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" /></svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default BrowserNavbar;
