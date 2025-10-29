import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './contexts/DarkModeContext';
import DarkModeToggle from './components/DarkModeToggle';
import Landing from './pages/Landing';
import FaircutLandingPage from './pages/FaircutLandingPage';
import FaircutLandingPageV2 from './pages/FaircutLandingPageV2';
import NapkinStrategy from './pages/NapkinStrategy';

function App() {
  console.log('App rendering, current path:', window.location.pathname);
  
  return (
    <DarkModeProvider>
      <DarkModeToggle />
      <Router basename="/faircut-demo/">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/faircut" element={<FaircutLandingPage />} />
          <Route path="/faircut-v2" element={<FaircutLandingPageV2 />} />
          <Route path="/napkin" element={<NapkinStrategy />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
