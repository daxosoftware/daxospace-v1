import { motion } from 'framer-motion';

export function AlToneLogo() {
  return (
    <motion.div
      className="text-center"
      animate={{
        filter: ['drop-shadow(0 0 20px #3b82f6)', 'drop-shadow(0 0 40px #3b82f6)', 'drop-shadow(0 0 20px #3b82f6)'],
      }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">
        alTone
      </h1>
    </motion.div>
  );
}