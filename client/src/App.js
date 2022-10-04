import { Route , Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import Profile from './components/Profile';
import Settigns from './components/Settings';
import Notfound from './components/Notfound';

function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/profile/:username' element={<Profile />} />
          <Route path='/settings' element={<Settigns />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
    </div>
  );
}

export default App;
