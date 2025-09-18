import { Loading } from '@/components/common/Loading.tsx';
import { ResultCard } from './ResultCard';
import type { SearchResultsProps } from '@/types/search.types';

export function SearchResults({ results, loading, error, onLoadMore, hasMore }: SearchResultsProps) {
  if (loading && results.length === 0) {
    return <Loading size="lg" text="Searching..." />;
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Search Error</h3>
        <p className="text-gray-600 dark:text-gray-300">{error instanceof Error ? error.message : String(error)}</p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No Results Found</h3>
        <p className="text-gray-600 dark:text-gray-300">Try different keywords or check your spelling</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Results */}
      <div className="flex flex-col gap-4">
        {results.map((result, index) => (
          <ResultCard key={`${result.url}-${index}`} result={result} />
        ))}
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="text-center mt-4">
          <button
            onClick={onLoadMore}
            disabled={loading}
            className="px-8 py-3 bg-gradient-to-r from-llama-pink via-llama-gold to-llama-purple text-white rounded-full font-bold text-lg shadow hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Loading...' : 'Load More Results'}
          </button>
        </div>
      )}
    </div>
  );
}
