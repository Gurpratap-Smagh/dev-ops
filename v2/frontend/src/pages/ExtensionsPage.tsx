import React from 'react';

const ExtensionsPage: React.FC = () => {
  const handleFetchExtension = () => {
    alert('Placeholder for fetching "secure" extension');
  };

  return (
    <div>
      <h1>Extensions</h1>
      <button onClick={handleFetchExtension}>Fetch Secure Extension</button>
    </div>
  );
};

export default ExtensionsPage;
