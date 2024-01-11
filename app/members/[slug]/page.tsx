'use client'
import React, { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import profiles from '@/public/data.json';
import Image from 'next/image';
import { Navigation } from '@/app/components/nav';
import styles from '@/public/styles/memberid.module.css'

const Profile = () => {
  const pathname = usePathname();
  const extractedSlug = pathname?.split("/")[2];
  
  const profile = profiles.find((profile) => {
    return profile.No === extractedSlug;
  });

  return (
    <div className="flex justify-center items-center h-screen ">
      <Navigation />
      <div className="card flex flex-col md:flex-row justify-around items-center bg-gray-800 shadow-xl rounded-xl overflow-hidden w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2">
        <div className="left-container w-full md:w-1/3 bg-gray-700 flex flex-col items-center py-8 px-4">
          <Image sizes='100vw' width={100} height={100} src={profile?.Color} alt="Profile" className="w-40 h-40 rounded-full shadow" />
          <h2 className="text-2xl font-semibold text-gray-200 mt-4">{profile?.['English Name']}</h2>
          <p className="text-md text-gray-400 mt-2">Developer</p>
        </div>
        <div className="right-container w-full md:w-2/3 bg-gray-700 p-6">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-200 mb-4">Profile Details</h3>
          <table className="w-full text-sm md:text-md text-gray-300">
            <tbody>
              <tr className="border-b border-gray-600">
                <td className="py-2 font-medium">Name</td>
                <td className="py-2">{profile?.['Full Name']}</td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="py-2 font-medium">DOB</td>
                <td className="py-2">{profile?.DoB}</td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="py-2 font-medium">Mobile</td>
                <td className="py-2">{profile?.['Phone Number']}</td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="py-2 font-medium">Email</td>
                <td className="py-2">{profile?.['Email (ONE)']}</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">Guild</td>
                <td className="py-2">{profile?.['Guild Team']}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Profile