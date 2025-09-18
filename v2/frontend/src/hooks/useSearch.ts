import { useInfiniteQuery } from '@tanstack/react-query';
import { search } from '../services/searchService';
import { SearchParams, SearchResponse } from '../types/search.types';

export const useSearch = (params: SearchParams, enabled = true) => {
  return useInfiniteQuery<SearchResponse>(
    ['search', params],
    ({ pageParam = 1 }) => search({ ...params, pageno: pageParam }),
    {
      enabled: !!params.q && enabled,
      keepPreviousData: true,
      retry: 1,
      getNextPageParam: (lastPage) => {
        // Assuming the API returns a 'page' number and some way to know if there are more results
        if (lastPage.results.length > 0) {
          return lastPage.page + 1;
        }
        return undefined;
      },
    }
  );
};
