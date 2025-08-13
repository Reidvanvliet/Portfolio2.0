import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import LandingSection from './components/LandingSection';
import RtsSolutions from './components/RtsSolutions';
import GoldenChopsticks from './components/GoldenChopsticks';
import Jamming from './components/Jamming';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import { ScrollProvider, useScrollProgress } from './contexts/ScrollContext';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ScrollProvider>
      <AppContent isLoading={isLoading} handleLoadingComplete={handleLoadingComplete} />
    </ScrollProvider>
  );
}

function AppContent({ isLoading, handleLoadingComplete }) {
  const { scrollRef } = useScrollProgress();

  return (
    <div className="fixed w-full app" ref={scrollRef}>
      <div className='scroll-container'>
        <LandingSection />
        <RtsSolutions />
        <GoldenChopsticks />
        <Jamming />
        <ExperienceSection />
        <ContactSection />
        {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      </div>
    </div>
  );
}

export default App;