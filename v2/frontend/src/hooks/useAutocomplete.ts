import { useQuery } from '@tanstack/react-query';
import { autocomplete } from '../services/searchService';

export const useAutocomplete = (q: string, enabled = true) => {
  return useQuery(['autocomplete', q], () => autocomplete(q), {
    enabled: !!q && enabled,
    staleTime: 60 * 1000,
  });
};
