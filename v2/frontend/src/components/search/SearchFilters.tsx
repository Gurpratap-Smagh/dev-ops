// Define SearchFiltersProps inline since it's missing from types
interface SearchFiltersProps {
  filters: {
    category: string;
    timeRange?: string;
    language: string;
    safesearch: number;
    engines: string[];
    [key: string]: any;
  };
  engines: string[];
  onFiltersChange: (filters: any) => void;
  categories: string[];
}
import { SEARCH_LANGUAGES, TIME_RANGES, SAFE_SEARCH_LEVELS } from '@/utils/constants';

export function SearchFilters({ filters, engines, onFiltersChange, categories }: SearchFiltersProps) {
  const updateFilter = <K extends keyof typeof filters>(key: K, value: typeof filters[K]) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-medium text-gray-900 dark:text-white mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="radio"
                name="category"
                value={category}
                checked={filters.category === category}
                onChange={(e) => updateFilter('category', e.target.value)}
                className="mr-2 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300 capitalize">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Time Range */}
      <div>
        <h3 className="font-medium text-gray-900 dark:text-white mb-3">Time Range</h3>
        <select
          value={filters.timeRange || ''}
          onChange={(e) => updateFilter('timeRange', e.target.value || undefined)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white"
        >
          {TIME_RANGES.map((range) => (
            <option key={range.value} value={range.value}>
              {range.label}
            </option>
          ))}
        </select>
      </div>

      {/* Language */}
      <div>
        <h3 className="font-medium text-gray-900 dark:text-white mb-3">Language</h3>
        <select
          value={filters.language}
          onChange={(e) => updateFilter('language', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white"
        >
          {SEARCH_LANGUAGES.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h3 className="font-medium text-gray-900 dark:text-white mb-3">Language</h3>
        <select
              value={filters.safeSearch}
          onChange={(e) => updateFilter('language', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white"
        >
              {SAFE_SEARCH_LEVELS.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
        </select>
      </div>

      {/* Safe Search */}
      <div>
        <h3 className="font-medium text-gray-900 dark:text-white mb-3">Safe Search</h3>
        <select
          value={filters.safesearch}
          onChange={(e) => updateFilter('safesearch', parseInt(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white"
        >
          {SAFE_SEARCH_LEVELS.map((level) => (
            <option key={level.value} value={level.value}>
              {level.label}
            </option>
          ))}
        </select>
      </div>

      {/* Search Engines */}
      <div>
        <h3 className="font-medium text-gray-900 dark:text-white mb-3">Search Engines</h3>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {engines.map((engine) => (
            <label key={engine} className="flex items-center">
              <input
                type="checkbox"
                checked={filters.engines.includes(engine)}
                onChange={(e) => {
                  const newEngines = e.target.checked
                    ? [...filters.engines, engine]
                    : filters.engines.filter(name => name !== engine);
                  updateFilter('engines', newEngines);
                }}
                className="mr-2 text-blue-600 focus:ring-blue-500 border-gray-300 dark:border-gray-600"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {engine}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
