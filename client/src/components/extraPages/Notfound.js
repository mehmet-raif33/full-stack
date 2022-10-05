import React from 'react'
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';

function Notfound() {

  return (
    <div>
        <motion.div
        initial={{
            scale:0.8,
            opacity:0.8
        }}
        animate={{
            scale:1,
            opacity:1
        }}
        className='mt-10'
        >
            <Player
            autoplay
            loop={true}
            src='https://assets2.lottiefiles.com/packages/lf20_a3kesdek.json'
            style={{ height: '400px', width: '400px' }}
            >
            </Player>
            <h1 className='text-2xl text-center relative bottom-10'>
                Dude, What did you looking for? :(
            </h1>
        </motion.div>
    </div>
  )
}

export default Notfound