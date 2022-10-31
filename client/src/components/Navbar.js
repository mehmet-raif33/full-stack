import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';

function Navbar() {

    const userData = useSelector(state => state.userInfo.state.isHere)

    return (
        <div className='px-10 bg-sky-300 sticky w-full h-[60px] z-10'>
            <div className='bg-sky-300 justify-between flex flex-row items-center h-[60px]'>
                <h2 className='inline'>
                    <NavLink to='/'>
                        <h2 className='p-2 bg-yellow-300 rounded-sm italic'>
                            MEMOCIAL MEDIA
                        </h2>
                    </NavLink>
                </h2>
                <div className='flex items-center h-14 justify-between'>
                    {
                        userData ? 
                        <div className='flex flex-row'>
                            <NavLink to='/homepage' className={ ({ isActive }) => isActive ? 'bg-yellow-600 rounded-sm p-[2px] ml-2' : 'bg-yellow-100 rounded-sm p-[2px] ml-2' }>
                                <img alt='sadasd' src="https://img.icons8.com/ios/35/000000/home--v1.png"/>
                            </NavLink>
                            <NavLink to='/create-post' className={ ({ isActive }) => isActive ? 'bg-yellow-600 rounded-sm p-[2px] ml-2' : 'bg-yellow-100 rounded-sm p-[2px] ml-2' }>
                                <img alt='sadasd' src="https://img.icons8.com/ios/35/000000/create.png"/>
                            </NavLink> 
                            <NavLink to="/profile"  className={ ({ isActive }) => isActive ? 'bg-yellow-600 rounded-sm p-[2px] ml-2' : 'bg-yellow-100 rounded-sm p-[2px] ml-2' }>
                                <img alt='sadasd' src="https://img.icons8.com/material-outlined/35/000000/administrator-male.png"/>
                            </NavLink>
                            <NavLink to='/settings' className={ ({ isActive }) => isActive ? 'bg-yellow-600 rounded-sm p-[2px] ml-2' : 'bg-yellow-100 rounded-sm p-[2px] ml-2' }>
                                <img alt='sadasd' src="https://img.icons8.com/material-outlined/35/000000/admin-settings-male.png"/>
                            </NavLink> 
                        </div>
                        :
                        <div className='bg-pink-100 flex rounded-md h-[35px] ml-5'>
                            <NavLink to='/register' className={  ({ isActive }) => isActive ? ' mr-3 bg-slate-400 p-1 rounded-md' : ' p-1 rounded-md mr-3 bg-slate-200' }>
                                Register
                            </NavLink>
                            <NavLink to='/login' className={({ isActive }) => isActive ? ' bg-slate-400 p-1 rounded-md' : ' bg-slate-200 p-1 rounded-md' }>
                                Login
                            </NavLink>
                        </div>
                    }
                </div>
            </div>
        </div>
  )
}

export default Navbar