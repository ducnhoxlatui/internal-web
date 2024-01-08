'use client'
import React, { useEffect } from 'react';

const Profile = () => {
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('myData'));
    console.log(data);
    // Use data here
}, []);

  return (
    <div>Profile</div>
  )
}

export default Profile