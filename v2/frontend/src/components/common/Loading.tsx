import React from 'react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export const Loading: React.FC<LoadingProps> = ({ size = 'md', text }) => {
  const sizeClass = `loading-${size}`;
  return (
    <div className={`loading-spinner ${sizeClass}`}>
      <div className="spinner"></div>
      {text && <p>{text}</p>}
    </div>
  );
};
