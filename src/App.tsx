import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoGrid from './components/VideoGrid';
import LikedVideos from './components/LikedVideos';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'liked'>('home');

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <Sidebar onViewChange={setCurrentView} />
        <main className="flex-1 p-4">
          {currentView === 'home' ? <VideoGrid /> : <LikedVideos />}
        </main>
      </div>
    </div>
  );
}

export default App;