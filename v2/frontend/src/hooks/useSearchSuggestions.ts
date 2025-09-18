import { useQuery } from '@tanstack/react-query';
import { autocomplete } from '../services/searchService';

export const useSearchSuggestions = (query: string) => {
  return useQuery<string[], Error>(
    ['suggestions', query],
    async () => {
      if (!query) {
        return [];
      }
      const data = await autocomplete(query);
      return data.suggestions;
    },
    {
      enabled: !!query,
    }
  );
};
