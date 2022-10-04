import React from 'react'
import { motion } from 'framer-motion';

function LoginPage() {
  return (
    <motion.div className='flex justify-center items-center h-[653px] bg-green-400'>
        <motion.form 
        className='flex flex-col bg-slate-200 w-[400px] h-100 p-10 rounded-sm mb-20'
        initial={{
            scale:0.8,
            opacity: 0.9
        }}
        animate={{
            scale: 1.1,
            opacity: 1,
        }}
        transition={{
            delay:0,
            duration: 0.2,
            ease:'easeIn'
        }}
        
        >
            <h3 className='text-center my-0 p-0 mb-7 text-[25px]'>
                Where were you?
            </h3>
            <input className='p-2 rounded-md outline-none mb-2' type='email' placeholder='mail' required />
            <input className='p-2 rounded-md outline-none mb-2' type='password' placeholder='password' required/>
            <span className='text-slate-600 ml-1 text-[13px]'>Forgotten password?</span>
            <button type='submit' className='bg-yellow-300 mx-20 py-2 rounded-md transition-all hover:scale-110 mt-4'>
                Login
            </button>
        </motion.form>
    </motion.div>
  )
}

export default LoginPage