import { Play } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { InstructionsDialog } from './instructions-dialog';
import { motion } from 'framer-motion';

export function CTASection() {
  return (
    <motion.div 
      className="flex flex-col gap-3 px-4 md:flex-row md:justify-center md:items-center md:gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      <Button 
        size="lg" 
        className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 md:py-4 text-lg group"
      >
        <Play className="mr-2 h-5 w-5 group-hover:animate-pulse" /> 
        Play Now
      </Button>

      <InstructionsDialog />
    </motion.div>
  );
}