import { motion } from 'framer-motion';

export function DaxoSoftLogo() {
  return (
    <motion.div
      className="text-center"
      animate={{
        filter: ['drop-shadow(0 0 20px #4f46e5)', 'drop-shadow(0 0 40px #4f46e5)', 'drop-shadow(0 0 20px #4f46e5)'],
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
        DaxoSoft
      </h1>
    </motion.div>
  );
}