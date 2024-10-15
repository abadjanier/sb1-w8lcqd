import React from 'react';
import { Home, Compass, PlaySquare, Clock, ThumbsUp, Film } from 'lucide-react';

interface SidebarProps {
  onViewChange: (view: 'home' | 'liked') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onViewChange }) => {
  const menuItems = [
    { icon: Home, label: 'Inicio', view: 'home' as const },
    { icon: Compass, label: 'Explorar', view: 'home' as const },
    { icon: PlaySquare, label: 'Suscripciones', view: 'home' as const },
    { icon: Clock, label: 'Historial', view: 'home' as const },
    { icon: ThumbsUp, label: 'Videos que me gustan', view: 'liked' as const },
    { icon: Film, label: 'Tus videos', view: 'home' as const },
  ];

  return (
    <aside className="w-64 bg-white h-screen p-4">
      <nav>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="mb-2">
              <a
                href="#"
                className="flex items-center p-2 hover:bg-gray-100 rounded"
                onClick={() => onViewChange(item.view)}
              >
                <item.icon className="w-6 h-6 mr-4" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;