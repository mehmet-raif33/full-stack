import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/userInfo';

function Settings() {

    const dispatch = useDispatch();

    const emptyUser = {
      username: null,
      name:null,
      surname:null,
      mail:null,
      password:null,
      profileImage: null,
      isHere: false,
      loading: false
    }

    return (
      <div>
        <button onClick={()=>{dispatch(logout(emptyUser))}} className='p-2 bg-sky-200 rounded-md transition-all hover:scale-105 ml-10 mt-5'>
          LogOut
        </button>
      </div>
    )
}

export default Settings