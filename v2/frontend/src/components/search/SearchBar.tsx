import { useState } from 'react';
import { useSearchSuggestions } from '@/hooks/useSearchSuggestions';
import { useDebounce } from '@/hooks/useDebounce';
import type { SearchBarProps } from '@/types/search.types';
import { useNavigate } from 'react-router-dom';


export function SearchBar({ initialQuery }: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery || '');
  const debouncedValue = useDebounce(query, 300);
  const { data: suggestions = [] } = useSearchSuggestions(debouncedValue);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query.trim()}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search the web..."
          className="w-full px-6 py-4 pr-16 text-xl border-2 border-llama-pink dark:border-llama-gold rounded-full focus:ring-2 focus:ring-llama-gold focus:border-transparent dark:bg-llama-dark dark:text-white shadow-md"
          aria-label="Search the web"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-llama-pink via-llama-gold to-llama-purple text-white rounded-full px-5 py-2 font-bold text-lg shadow hover:scale-105 transition-transform"
          aria-label="Submit search"
        >
          <span className="material-icons">search</span>
        </button>
        {suggestions.length > 0 && (
          <ul className="absolute z-10 w-full mt-2 bg-white border border-llama-pink rounded-xl shadow-lg dark:bg-llama-dark dark:border-llama-gold">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion}
                className="px-6 py-3 cursor-pointer hover:bg-llama-pink/10 dark:hover:bg-llama-gold/10 text-lg"
                onClick={() => {
                  setQuery(suggestion);
                  handleSubmit(new Event('submit') as any);
                }}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </form>
  );
}
