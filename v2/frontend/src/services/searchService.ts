import axios from 'axios';
import { SearchParams, SearchResponse, AutocompleteResponse, EngineConfig } from '../types/search.types';

const API_BASE = '/api';

export const search = async (params: SearchParams): Promise<SearchResponse> => {
  const { q, categories, engines, pageno, language, safesearch, time_range, ...rest } = params;
  try {
    console.log('Sending search request:', { ...params, format: 'json' });
    const response = await axios.get(`${API_BASE}/search`, {
      params: {
        q,
        format: 'json',
        categories: categories || 'general',
        engines: engines || 'google,duckduckgo,brave',
        pageno,
        language: language || 'en',
        safesearch: safesearch || 1,
        time_range,
        ...rest,
      },
    });
    console.log('Search response:', response.data);
    
    if (!response.data || !Array.isArray(response.data.results)) {
      throw new Error('Invalid response format from search API');
    }
    
    return {
      ...response.data,
      results: response.data.results.map((result: any) => ({
        title: result.title || '',
        url: result.url || '',
        content: result.content || '',
        engine: result.engine || 'unknown',
        category: result.category || 'general',
        publishedDate: result.publishedDate || null,
        img_src: result.img_src || null,
      })),
    };
  } catch (error) {
    console.error('Search error:', error);
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to fetch search results');
    }
    throw error;
  }
};

export const autocomplete = async (q: string): Promise<AutocompleteResponse> => {
  const response = await axios.get(`${API_BASE}/autocompleter`, { params: { q } });
  return response.data;
};

export const getConfig = async (): Promise<EngineConfig> => {
  const response = await axios.get(`${API_BASE}/config`);
  return response.data;
};
