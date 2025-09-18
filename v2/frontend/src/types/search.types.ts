export interface SearchParams {
  q: string;
  categories?: string;
  engines?: string;
  pageno?: number;
  language?: string;
  safesearch?: number;
  time_range?: string;
  [key: string]: any;
}

export interface SearchResult {
  title: string;
  url: string;
  content: string;
  engine: string;
  category: string;
  favicon?: string;
  publishedDate?: string;
  img_src?: string;
}

export interface SearchResponse {
  results: SearchResult[];
  total: number;
  suggestions?: string[];
  query: string;
  page: number;
  answers?: any[];
  infoboxes?: any[];
}

export interface ResultCardProps {
  result: SearchResult;
  onClick?: (url: string) => void;
}

export interface AutocompleteResponse {
  suggestions: string[];
}

export interface EngineConfig {
  engines: string[];
  categories: string[];
  [key: string]: any;
}

export interface SearchResultsProps {
  results: SearchResult[];
  loading: boolean;
  error: Error | null;
  onLoadMore: () => void;
  hasMore: boolean;
}

export interface SearchBarProps {
  initialQuery?: string;
}
