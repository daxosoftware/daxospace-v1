import { useState } from 'react';
import { HeroSection } from '@/components/game/hero-section';
import { FeaturesSection } from '@/components/game/features-section';
import { CTASection } from '@/components/game/cta-section';
import { MobileControls } from '@/components/game/mobile-controls';
import { GameStats } from '@/components/game/game-stats';
import { SplashScreen } from '@/components/splash/splash-screen';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [username, setUsername] = useState('');

  const handleSplashComplete = (name: string) => {
    setUsername(name);
    setShowSplash(false);
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 overflow-x-hidden">
      <div className="container mx-auto">
        <HeroSection username={username} />
        <FeaturesSection />
        <CTASection />
      </div>
      <GameStats />
      <MobileControls />
    </div>
  );
}

export default App;