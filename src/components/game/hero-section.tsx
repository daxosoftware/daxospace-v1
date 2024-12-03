import { Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  username: string;
}

export function HeroSection({ username }: HeroSectionProps) {
  return (
    <div className="text-center space-y-6 mb-8 md:mb-16 pt-8 md:pt-16">
      <motion.div 
        className="flex justify-center mb-6 md:mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Rocket className="h-16 w-16 md:h-20 md:w-20 text-blue-500 animate-pulse" />
      </motion.div>
      <motion.h1 
        className="text-3xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Welcome, {username}!
      </motion.h1>
      <motion.p 
        className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Embark on an epic space adventure. Defend the galaxy against waves of alien invaders.
      </motion.p>
    </div>
  );
}