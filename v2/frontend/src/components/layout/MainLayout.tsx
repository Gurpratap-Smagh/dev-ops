import React from 'react';
import { Outlet } from 'react-router-dom';


const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-llama-pink via-llama-gold to-llama-purple dark:from-llama-dark dark:to-llama-purple">
      <main className="container mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
