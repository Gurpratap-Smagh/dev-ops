import React from 'react';

const SearchResultsNavbar: React.FC = () => {
  const handleFilter = (filter: string) => {
    alert(`Placeholder for filtering by: ${filter}`);
  };

  return (
    <nav>
      <button onClick={() => handleFilter('All')}>All</button>
      <button onClick={() => handleFilter('Images')}>Images</button>
      <button onClick={() => handleFilter('Videos')}>Videos</button>
      <button onClick={() => handleFilter('News')}>News</button>
    </nav>
  );
};

export default SearchResultsNavbar;
