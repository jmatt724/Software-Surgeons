import './css/App.css';
import LandingPage from './pages/LandingPage';
import { Route, Routes } from 'react-router-dom';
import Artifacts from './pages/Artifacts';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import UserSettings from './pages/UserSettings';
import MakePayment from './pages/MakePayment';
import CreateAccount from './pages/CreateAccount';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/Profile';
import BudgetBuddy from './pages/BudgetBuddy';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/artifacts" element={<Artifacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        />
        <Route path="/make-payment" element={
            <PrivateRoute>
              <MakePayment />
            </PrivateRoute>
          } 
        />
        <Route path="/user-settings" element={
            <PrivateRoute>
              <UserSettings />
            </PrivateRoute>
          } 
        />
        <Route path="/user-profile" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="/budget-buddy" element={
            <PrivateRoute>
              <BudgetBuddy />
            </PrivateRoute>
          } 
        />
      </Routes>
    </div>
  );
}

export default App;
