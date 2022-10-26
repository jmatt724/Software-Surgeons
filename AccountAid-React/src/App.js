import './css/App.css';
import LandingPage from './pages/LandingPage';
import { Route, Routes } from 'react-router-dom';
import Artifacts from './pages/Artifacts';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/artifacts" element={<Artifacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
    </div>
  );
}

export default App;
