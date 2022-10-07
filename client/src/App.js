import { Route , Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import ProfileLayout from './components/ProfileLayout';
import Settigns from './components/Settings';
import Notfound from './components/extraPages/Notfound';
import LandingPage from './components/LandingPage';

function App() {
  
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/profile/:username' element={<ProfileLayout />} />
          <Route path='/settings' element={<Settigns />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
    </div>
  );
}

export default App;
