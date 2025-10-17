import { DarkModeProvider } from './contexts/DarkModeContext';
import DarkModeToggle from './components/DarkModeToggle';
import FaircutLandingPage from './pages/FaircutLandingPage';

function App() {
  return (
    <DarkModeProvider>
      <DarkModeToggle />
      <FaircutLandingPage />
    </DarkModeProvider>
  );
}

export default App;
