import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';

function Profile() {

    const userData = useSelector(state => state.userInfoData)


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
        </motion.div>

        
  )
}

export default Profile