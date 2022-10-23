import { Route , Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import ProfileLayout from './components/ProfileLayout';
import Settigns from './components/Settings';
import Notfound from './components/extraPages/Notfound';
import LandingPage from './components/LandingPage';
import { signInSignUp } from './redux/slices/userSlice';
import { useDispatch } from 'react-redux';
import { ContextProvider } from './Context/globalContext';


function App() {

  const dispatch = useDispatch();

  const isSomeoneHere = () => {
    const userIsHere = localStorage.getItem('userIsHere')
    if(userIsHere == null) {
      console.log('users not found!')
    } else{
      console.log('user is here.')
      dispatch(signInSignUp({jwt: userIsHere, sendState: 'userHere'}))
    }
  }

  isSomeoneHere();

  return (
    <div>
      <ContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/profile' element={<ProfileLayout />} />
          <Route path='/settings' element={<Settigns />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </ContextProvider>
      
    </div>
  );
}

export default App;
