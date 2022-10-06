import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import { Route, Routes } from 'react-router-dom';
import Interviews from './pages/Artifacts/Interviews';
import Scenarios from './pages/Artifacts/Scenarios';
import UserStories from './pages/Artifacts/UserStories';
import Personas from './pages/Artifacts/Personas';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/interviews" element={<Interviews />}/>
        <Route path="/personas" element={<Personas />}/>
        <Route path="/user-stories" element={<UserStories />}/>
        <Route path="/scenarios" element={<Scenarios />}/>

      </Routes>
    </div>
  );
}

export default App;
