import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ThisIsNotYou from './extraPages/ThisIsNotYou';
import Profile from './Profile';

function ProfileLayout() {

  const userIsHere = useSelector(state => state.userInfoData.username)
  const { username } = useParams();

  return (
    <div>
      {
        username === userIsHere ? 
        <Profile />
        : 
        <ThisIsNotYou whoIs={username} />
      }
    </div>
  )
}

export default ProfileLayout