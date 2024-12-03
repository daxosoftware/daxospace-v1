import { Shield, Award, Settings } from 'lucide-react';
import { FeatureCard } from './feature-card';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function FeaturesSection() {
  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16 px-4"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item}>
        <FeatureCard
          icon={Shield}
          title="Strategic Defense"
          description="Master defensive tactics and protect your territory"
          iconColor="text-blue-500"
        />
      </motion.div>
      
      <motion.div variants={item}>
        <FeatureCard
          icon={Award}
          title="Achievement System"
          description="Unlock rewards and climb the global leaderboard"
          iconColor="text-purple-500"
        />
      </motion.div>
      
      <motion.div variants={item}>
        <FeatureCard
          icon={Settings}
          title="Customization"
          description="Upgrade your ship and unlock special abilities"
          iconColor="text-green-500"
        />
      </motion.div>
    </motion.div>
  );
}