import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export function DaxoSpaceLogo() {
  return (
    <motion.div
      className="text-center space-y-4"
      animate={{
        filter: ['drop-shadow(0 0 20px #2563eb)', 'drop-shadow(0 0 40px #2563eb)', 'drop-shadow(0 0 20px #2563eb)'],
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Rocket className="w-20 h-20 text-blue-500 mx-auto" />
      </motion.div>
      <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
        DaxoSpace
      </h1>
    </motion.div>
  );
}