
import React, { useState } from 'react';
import { SearchBar } from '../components/search/SearchBar';
import { SearchResults } from '../components/search/SearchResults';
import { useSearch } from '../hooks/useSearch';
import { useLocation } from 'react-router-dom';


const TABS = [
  { key: 'all', label: 'All' },
  { key: 'images', label: 'Images' },
  { key: 'text', label: 'Text' },
  { key: 'ai', label: 'AI' },
];

const SearchResultsPage: React.FC = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useSearch({ q: query });
  const results = data?.pages.flatMap((page) => page.results) || [];
  const [activeTab, setActiveTab] = useState('text');

  const handleTabClick = (tab: string) => {
    if (tab !== 'text') {
      alert('This feature will be added later.');
      return;
    }
    setActiveTab(tab);
  };

  return (
    <main className="flex flex-col items-center min-h-[70vh] bg-gradient-to-br from-llama-pink via-llama-gold to-llama-purple dark:from-llama-dark dark:to-llama-purple py-8">
      <div className="w-full max-w-3xl mx-auto">
        <SearchBar initialQuery={query} />
        <div className="flex justify-center gap-4 mt-6 mb-4">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              className={`px-5 py-2 rounded-full font-semibold transition-colors text-lg focus:outline-none focus:ring-2 focus:ring-llama-pink/60 ${activeTab === tab.key ? 'bg-gradient-to-r from-llama-pink via-llama-gold to-llama-purple text-white shadow-lg' : 'bg-white/80 dark:bg-llama-dark/80 text-llama-purple dark:text-llama-gold hover:bg-llama-pink/10'}`}
              onClick={() => handleTabClick(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-4">
          {activeTab === 'text' && (
            <SearchResults
              results={results}
              loading={isLoading}
              error={error as Error | null}
              onLoadMore={fetchNextPage}
              hasMore={hasNextPage || false}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default SearchResultsPage;
