import React from 'react'
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';

function ThisIsNotYou({whoIs}) {
  return (
    <motion.div>
        <Player
        autoplay
        loop={true}
        src='https://assets9.lottiefiles.com/packages/lf20_CeuefT.json'
        style={{ height: '400px', width: '400px' }}
        >
        </Player>
        <h2 className='text-center text-2xl'>
            This Is Not You {whoIs} !!!
        </h2>
        
    </motion.div>
  )
}

export default ThisIsNotYou