import './css/App.css';
import LandingPage from './pages/LandingPage';
import { Route, Routes } from 'react-router-dom';
import Artifacts from './pages/Artifacts';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/artifacts" element={<Artifacts />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
