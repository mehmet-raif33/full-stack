import { motion } from 'framer-motion';
import { useSelector , useDispatch } from 'react-redux';
import { useState } from 'react';
import { base64 } from '../hooks/useBase';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/slices/userSlice';

function Profile() {

    const userData = useSelector(state => state.userInfo.info)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [image,setimage] = useState(null);
  
    const onChangeMethod = async (e) => {
      let resim = await e.target.files[0];
      await base64(resim)
      .then(result => {
        console.log(resim)
        setimage(result);
      });
      
    }
    
    const changeThePicture = async () => {
        console.log('changeThePicture Çalıştı!')
    }

    const whenClickTheButton = async () => {
        await dispatch(logout())
        await navigate('/homepage')
    }

    return (
        <motion.div className='w-[100%] bg-neutral-300 flex flex-row justify-center'>
            <motion.div className='flex flex-row justify-evenly w-[800px] bg-emerald-300 px-10 py-5'>
                <motion.img 
                initial={{
                    opacity: 0.5
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: 0.4,
                }}
                src={userData.imgUrl} 
                className='w-[150px] rounded-full h-[150px]'>
                </motion.img>
                <motion.div className='bg-sky-200 p-3 rounded-md'>
                    <motion.h2 className='text-2xl'>
                        {userData.username}
                    </motion.h2>
                    <motion.h2>
                        {userData.mail}
                    </motion.h2>
                    <button onClick={whenClickTheButton} className='p-2 bg-red-500 text-white right-0 rounded-md text-sm transition-all hover:scale-105 mt-5'>
                    LogOut
                    </button>
                </motion.div>
                
            </motion.div>
        </motion.div>

        
  )
}

export default Profile