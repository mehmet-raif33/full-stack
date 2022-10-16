import { useSelector , useDispatch } from 'react-redux';
import { logout } from '../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
 
function Settings() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const whenClickTheButton = async () => {
      await dispatch(logout())
      await navigate('/homepage')
    }

    return (
      <div>
        <button onClick={whenClickTheButton} className='p-2 bg-sky-200 rounded-md transition-all hover:scale-105 ml-10 mt-5'>
          LogOut
        </button>
      </div>
    )
}

export default Settings