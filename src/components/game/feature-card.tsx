import { Card } from "@/components/ui/card";
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
}

export function FeatureCard({ icon: Icon, title, description, iconColor }: FeatureCardProps) {
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Card className="p-4 md:p-6 bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all h-full">
        <Icon className={`h-8 w-8 md:h-12 md:w-12 ${iconColor} mb-3 md:mb-4`} />
        <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm md:text-base text-gray-400">{description}</p>
      </Card>
    </motion.div>
  );
}