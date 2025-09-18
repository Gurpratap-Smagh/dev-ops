import React from 'react';
import '../src/styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import ExtensionsPage from './pages/ExtensionsPage';
import BrowserNavbar from './components/layout/BrowserNavbar';
import SettingsPage from './pages/SettingsPage';
import HistoryPage from './pages/HistoryPage';
import BookmarksPage from './pages/BookmarksPage';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <BrowserNavbar />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="search" element={<SearchResultsPage />} />
            <Route path="extensions" element={<ExtensionsPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="history" element={<HistoryPage />} />
            <Route path="bookmarks" element={<BookmarksPage />} />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
