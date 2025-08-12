import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import LandingSection from './components/LandingSection';
import RtsSolutions from './components/RtsSolutions';
import GoldenChopsticks from './components/GoldenChopsticks';
import Jamming from './components/Jamming';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  //Makes the animations use a fraction of the scroll bar instead
  const numPages = 2.6;

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="fixed w-full app">
      <LandingSection numPages={numPages}/>
      <RtsSolutions numPages={numPages}/>
      <GoldenChopsticks numPages={numPages} />
      <Jamming numPages={numPages} />
      <ExperienceSection numPages={numPages} />
      <ContactSection numPages={numPages} />
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
    </div>
  );
}

export default App;