import { motion } from 'framer-motion';
import { useSelector , useDispatch } from 'react-redux';
import { useState } from 'react';
import { changeToImage } from '../redux/slices/userInfo';
import { base64 } from '../hooks/useBase';

function Profile() {

    const userData = useSelector(state => state.userInfoData)
    const dispatch = useDispatch();

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
      dispatch(changeToImage(image))
    }

    return (
        <motion.div className='w-[100%] bg-neutral-300 flex flex-row justify-center'>
            <motion.div className='flex flex-row justify-between w-[800px] bg-emerald-300 px-10 py-5'>
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
                src={userData.imageData} className='w-[150px] rounded-full'>

                </motion.img>
                <motion.h2 className='text-2xl'>
                    {userData.username}
                </motion.h2>
            </motion.div>
            <div>
                <input type='file' onChange={onChangeMethod} />
                <button onClick={changeThePicture}>
                    Save
                </button>
            </div>
        </motion.div>

        
  )
}

export default Profile