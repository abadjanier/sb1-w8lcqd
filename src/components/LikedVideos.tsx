import React from 'react';
import { ThumbsUp } from 'lucide-react';

interface LikedVideo {
  id: number;
  title: string;
  thumbnail: string;
  channel: string;
  likes: string;
  timestamp: string;
}

const likedVideos: LikedVideo[] = [
  {
    id: 1,
    title: 'Los 10 Mejores Platillos de la Cocina Mexicana',
    thumbnail: 'https://i.ytimg.com/vi/jFWJBtZ5zEI/hqdefault.jpg',
    channel: 'Cocina Deliciosa',
    likes: '45K',
    timestamp: 'Hace 2 semanas',
  },
  {
    id: 2,
    title: 'Tutorial Completo de Python para Principiantes',
    thumbnail: 'https://i.ytimg.com/vi/chPhlsHoEPo/hqdefault.jpg',
    channel: 'Programación Fácil',
    likes: '78K',
    timestamp: 'Hace 1 mes',
  },
  {
    id: 3,
    title: 'Resumen: FC Barcelona vs Real Madrid 3-1',
    thumbnail: 'https://i.ytimg.com/vi/fiWvdZvbT2Y/hqdefault.jpg',
    channel: 'LaLiga',
    likes: '230K',
    timestamp: 'Hace 3 días',
  },
  {
    id: 4,
    title: 'Meditación Guiada para Reducir el Estrés',
    thumbnail: 'https://i.ytimg.com/vi/uxLuHX4zQIU/hqdefault.jpg',
    channel: 'Mindfulness Diario',
    likes: '56K',
    timestamp: 'Hace 1 semana',
  },
];

const LikedVideos: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <ThumbsUp className="w-6 h-6 mr-2 text-red-500" />
        Videos que me gustan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {likedVideos.map((video) => (
          <div key={video.id} className="bg-gray-100 rounded-lg overflow-hidden">
            <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 line-clamp-2">{video.title}</h3>
              <p className="text-gray-600 text-sm">{video.channel}</p>
              <p className="text-gray-500 text-xs flex items-center mt-1">
                <ThumbsUp className="w-4 h-4 mr-1" /> {video.likes} • {video.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedVideos;