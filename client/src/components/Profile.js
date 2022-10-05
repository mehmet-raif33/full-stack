import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ThisIsNotYou from './extraPages/ThisIsNotYou';
import { motion } from 'framer-motion';

function Profile() {

  const userIsHere = useSelector(state => state.userInfoData.isHere)
  const { username } = useParams();
  const userData = useSelector(state => state.userInfoData)

  return (
    <div>
      {
        username === userIsHere ? 
        
        <motion.div>
          <img src={userData.profileImg} alt='sad' />
        </motion.div>

        : <ThisIsNotYou whoIs={username} />
      }
    </div>
  )
}

export default Profile