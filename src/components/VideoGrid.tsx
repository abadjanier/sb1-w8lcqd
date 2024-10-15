import React from 'react';

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  channel: string;
  views: string;
  timestamp: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: 'Aprende React en 2 horas',
    thumbnail: 'https://i.ytimg.com/vi/6Jfk8ic3KVk/hqdefault.jpg',
    channel: 'Fazt',
    views: '1.2M vistas',
    timestamp: 'hace 1 año',
  },
  {
    id: 2,
    title: 'Cómo Hacer una Paella Valenciana Auténtica',
    thumbnail: 'https://i.ytimg.com/vi/zrXWIWlF1j0/hqdefault.jpg',
    channel: 'Spain on a Fork',
    views: '2.5M vistas',
    timestamp: 'hace 2 años',
  },
  {
    id: 3,
    title: 'Top 10 Lugares para Visitar en Sudamérica',
    thumbnail: 'https://i.ytimg.com/vi/mmhGvP9rV3s/hqdefault.jpg',
    channel: 'Kara and Nate',
    views: '3.7M vistas',
    timestamp: 'hace 8 meses',
  },
  {
    id: 4,
    title: 'Queen - Bohemian Rhapsody (Official Video Remastered)',
    thumbnail: 'https://i.ytimg.com/vi/fJ9rUzIMcZQ/hqdefault.jpg',
    channel: 'Queen Official',
    views: '1.5B vistas',
    timestamp: 'hace 13 años',
  },
  {
    id: 5,
    title: 'Meditación Guiada para Principiantes',
    thumbnail: 'https://i.ytimg.com/vi/OFdb1aVrpCY/hqdefault.jpg',
    channel: 'Mindful Science',
    views: '5.1M vistas',
    timestamp: 'hace 3 años',
  },
  {
    id: 6,
    title: 'El Clásico - Real Madrid vs Barcelona - Highlights',
    thumbnail: 'https://i.ytimg.com/vi/1M0eIHOYvXI/hqdefault.jpg',
    channel: 'LaLiga',
    views: '10M vistas',
    timestamp: 'hace 1 mes',
  },
];

const VideoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {videos.map((video) => (
        <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-1 line-clamp-2">{video.title}</h3>
            <p className="text-gray-600 text-sm">{video.channel}</p>
            <p className="text-gray-500 text-xs">
              {video.views} • {video.timestamp}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;