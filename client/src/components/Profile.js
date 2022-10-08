import { motion } from 'framer-motion';
import { useSelector , useDispatch } from 'react-redux';
import { useState } from 'react';
import { changeToImage } from '../redux/slices/userInfo';

function Profile() {

    const userData = useSelector(state => state.userInfoData)
    const dispatch = useDispatch();

    const [image,setimage] = useState(null);
  
    const onChangeMethod = async (e) => {
      const image = await e.target.files[0];
      const format = await base64(image)
      console.log(format)
      setimage(format);
    }

    const base64 = (file) => {
      return new Promise(async (resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
          setimage(fileReader.result);
        }
        fileReader.onerror = (error) => {
          reject(error)
        }
      })
    }
    
    const changeThePicture = () => {
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
                src={userData.profileImage} className='w-[150px] rounded-full'>

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