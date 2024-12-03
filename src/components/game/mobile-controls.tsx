import { ChevronLeft, ChevronRight, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export function MobileControls() {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 to-transparent md:hidden">
      <div className="flex justify-between items-center max-w-md mx-auto">
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 flex items-center justify-center"
          aria-label="Move Left"
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="w-20 h-20 rounded-full bg-blue-600/80 backdrop-blur-sm border border-blue-500 flex items-center justify-center"
          aria-label="Shoot"
        >
          <Target className="w-10 h-10 text-white" />
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 flex items-center justify-center"
          aria-label="Move Right"
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </motion.button>
      </div>
    </div>
  );
}