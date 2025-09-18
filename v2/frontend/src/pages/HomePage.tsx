
import React from 'react';
import { SearchBar } from '../components/search/SearchBar';


const HomePage: React.FC = () => {
  React.useEffect(() => {
    alert('This feature will be added later. Only search is available for now.');
  }, []);
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-llama-pink via-llama-gold to-llama-purple dark:from-llama-dark dark:to-llama-purple">
      <div className="flex flex-col items-center gap-6 w-full max-w-2xl p-8 rounded-3xl bg-white/80 dark:bg-llama-dark/80 shadow-xl mt-12">
        <img src="/llama-logo.png" alt="Luminous Llama Logo" className="w-28 h-28 mb-2" />
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-llama-pink via-llama-gold to-llama-purple bg-clip-text text-transparent mb-2">Luminous Llama</h1>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">A privacy-first, AI-powered search experience.</p>
        <SearchBar />
      </div>
    </main>
  );
};

export default HomePage;
