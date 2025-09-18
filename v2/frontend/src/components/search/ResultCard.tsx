import { extractDomain, truncateText } from '@/utils/helpers';
import type { ResultCardProps } from '@/types/search.types';

export function ResultCard({ result, onClick }: ResultCardProps) {
  const domain = extractDomain(result.url);

  const handleClick = () => {
    if (onClick) {
      onClick(result.url);
    } else {
      window.open(result.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="bg-white dark:bg-llama-dark rounded-2xl border-2 border-llama-pink dark:border-llama-gold p-6 hover:shadow-xl transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1 min-w-0">
          <button
            onClick={handleClick}
            className="text-left w-full focus:outline-none focus:ring-2 focus:ring-llama-pink rounded"
          >
            <h3 className="text-xl font-bold text-llama-purple dark:text-llama-gold hover:text-llama-pink dark:hover:text-llama-pink line-clamp-2">
              {result.title}
            </h3>
          </button>
          <div className="flex items-center text-base text-gray-500 dark:text-llama-gold/80 mt-1 gap-2">
            <span>{domain}</span>
            <span>•</span>
            <span className="capitalize">{result.engine}</span>
            {result.publishedDate && (
              <>
                <span>•</span>
                <span>{result.publishedDate}</span>
              </>
            )}
          </div>
        </div>
        {/* Thumbnail */}
        {result.img_src && (
          <div className="ml-4 flex-shrink-0">
            <img
              src={result.img_src}
              alt=""
              className="w-20 h-20 object-cover rounded-xl border border-llama-pink dark:border-llama-gold"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <p className="text-gray-700 dark:text-gray-200 text-base leading-relaxed mb-3">
        {truncateText(result.content, 300)}
      </p>

      {/* Actions */}
      <div className="flex items-center space-x-4 text-sm">
        <button
          onClick={handleClick}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
        >
          Visit Site
        </button>
      </div>
    </div>
  );
}
