import { useState } from 'react'
import { motion } from 'framer-motion';
import { base64 } from '../hooks/useBase';
import { addUser } from '../redux/slices/userInfo';
import { useDispatch } from 'react-redux';

function RegisterPage() {

    const dispatch = useDispatch();
    
    const [clientImage, setImage] = useState('');

    const onClickTheButton = async (e) => {
        e.preventDefault();


        console.log(clientImage)

    }

    return (
        <motion.div className='flex justify-center items-center h-[643px] bg-green-400'>
            <motion.form 
            className='flex flex-col bg-slate-200 w-[400px] h-100 p-10 rounded-sm mb-10'
            initial={{
                scale:0.8,
                opacity: 0.9
            }}
            animate={{
                scale: 1,
                opacity: 1,
            }}
            transition={{
                delay:0,
                duration: 0.2,
                ease:'easeIn'
            }}
            
            >
                <h3 className='text-center my-0 p-0 mb-7 text-[25px]'>
                    Welcome New Friend!!!
                </h3>
                <input className='p-2 rounded-md outline-none mb-2' type='text' placeholder='username' required />
                <input className='p-2 rounded-md outline-none mb-2' type='text' placeholder='name' required />
                <input className='p-2 rounded-md outline-none mb-2' type='text' placeholder='surname' required />
                <input className='p-2 rounded-md outline-none mb-2' type='email' placeholder='mail' required />
                <span className='text-slate-600 text-[15px]'>Choose Your Profile Image: </span>
                <input type='file' onChange={(e) => { base64(e.target.files[0]).then(result => setImage(result)) }} />
                <div>
                    <input type='checkbox' className='hover:shodow hover:scale-110 transition-all' required />
                    <span> I accept the contract. </span>
                </div>
                <button onClick={onClickTheButton} className='bg-yellow-300 mx-20 py-2 rounded-md transition-all hover:scale-110 mt-4'>
                    Register
                </button>
            </motion.form>
        </motion.div>
    )
}

export default RegisterPage