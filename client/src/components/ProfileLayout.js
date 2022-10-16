import React from 'react'
import { useSelector } from 'react-redux';
import ThisIsNotYou from './extraPages/ThisIsNotYou';
import Profile from './Profile';

function ProfileLayout() {

  const userIsHere = useSelector(state => state.userInfo.state.isHere)

  return (
    <div>
      {
        userIsHere ? 
        <Profile />
        : 
        <ThisIsNotYou />
      }
    </div>
  )
}

export default ProfileLayout