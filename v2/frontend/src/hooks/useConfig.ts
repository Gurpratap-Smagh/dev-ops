import { useQuery } from '@tanstack/react-query';
import { getConfig } from '../services/searchService';
import { EngineConfig } from '../types/search.types';

export const useConfig = () => {
  return useQuery<EngineConfig>(['config'], getConfig);
};
