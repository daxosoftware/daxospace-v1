import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { DaxoSoftLogo } from './logos/daxosoft-logo';
import { AlToneLogo } from './logos/altone-logo';
import { DaxoSpaceLogo } from './logos/daxospace-logo';
import { UserNameDialog } from './user-name-dialog';

export function SplashScreen({ onComplete }: { onComplete: (username: string) => void }) {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [showUserDialog, setShowUserDialog] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timings = [3000, 2500, 5000];
    
    if (currentScreen < 2) {
      const timer = setTimeout(() => {
        setCurrentScreen(prev => prev + 1);
      }, timings[currentScreen]);
      return () => clearTimeout(timer);
    }

    if (currentScreen === 2) {
      const startTime = Date.now();
      const progressInterval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const newProgress = Math.min((elapsed / 2500) * 100, 100);
        setProgress(newProgress);
        
        if (newProgress === 100) {
          clearInterval(progressInterval);
          setTimeout(() => setShowUserDialog(true), 500);
        }
      }, 50);
      return () => clearInterval(progressInterval);
    }
  }, [currentScreen]);

  const handleUserNameSubmit = (username: string) => {
    onComplete(username);
  };

  return (
    <div className="fixed inset-0 bg-black">
      <AnimatePresence mode="wait">
        {currentScreen === 0 && (
          <motion.div
            key="daxosoft"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <DaxoSoftLogo />
          </motion.div>
        )}

        {currentScreen === 1 && (
          <motion.div
            key="altone"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <AlToneLogo />
          </motion.div>
        )}

        {currentScreen === 2 && (
          <motion.div
            key="daxospace"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <DaxoSpaceLogo />
            <div className="w-64 h-2 bg-gray-800 rounded-full mt-8 overflow-hidden">
              <motion.div
                className="h-full bg-blue-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <UserNameDialog 
        open={showUserDialog} 
        onSubmit={handleUserNameSubmit}
      />
    </div>
  );
}