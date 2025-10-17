import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkModeProvider } from './contexts/DarkModeContext';
import DarkModeToggle from './components/DarkModeToggle';
import Landing from './pages/Landing';
import FaircutLandingPage from './pages/FaircutLandingPage';

function App() {
  return (
    <DarkModeProvider>
      <DarkModeToggle />
      <Router basename="/faircut-demo/">
        <Routes>
          <Route path="/" element={<FaircutLandingPage />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
