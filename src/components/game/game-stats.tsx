import { Trophy, Heart, Timer } from 'lucide-react';

export function GameStats() {
  return (
    <div className="fixed top-0 left-0 right-0 p-4 bg-gradient-to-b from-gray-900 to-transparent">
      <div className="flex justify-between items-center max-w-md mx-auto">
        <div className="flex items-center space-x-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <span className="text-white font-bold">1,234</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Heart className="w-5 h-5 text-red-500" />
          <span className="text-white font-bold">3</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Timer className="w-5 h-5 text-blue-500" />
          <span className="text-white font-bold">02:34</span>
        </div>
      </div>
    </div>
  );
}