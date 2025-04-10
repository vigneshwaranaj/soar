import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Search from "../assets/icons/search.svg?react";
import Setting from "../assets/icons/settings_blue.svg?react";
import Notification from "../assets/icons/notification.svg?react";
import Profile from "../assets/icons/profile-image.svg";
import { useProfile } from '../services/ProfileContext';

const pageTitles: Record<string, string> = {
  '/': 'Overview',
  '/dashboard': 'Overview',
  '/transactions': 'Transactions',
  '/accounts': 'Accounts',
  '/investments':'Investments',
  '/credit-cards':'Credit Cards',
  '/loans':'Loans',
  '/services':'Services',
  '/my-privileges':'My Privileges',
  '/settings':'Settings'
};

const Header: React.FC = () => {

  const location = useLocation();
  const [title, setTitle] = useState('Overview');
  const { profileImage } = useProfile();
  const { setProfileImage } = useProfile();

  useEffect(() => {
    const currentPath = location.pathname;
    const currentTitle = pageTitles[currentPath] || 'Page';
    setTitle(currentTitle);
    fetch("/soar/userData.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch form data");
          }
          return response.json();
        })
        .then((data) => {
          setProfileImage(data.profileImage);
        })
        .catch((error) => {
          console.error("Error fetching form data:", error);
        });
  }, [location]);



  return (
    <header className="bg-white shadow px-6 flex items-center justify-between md:h-[100px]">
      <div className="text-xl font-medium text-gray-700">{title}</div>

      <div className="flex items-center gap-6">
       <div className='h-[50px] rounded-[40px] bg-[#F5F7FA] flex px-4 items-center'>
        <Search className="w-[20px] h-[20px]" />
        <input placeholder='Search for something' className='border-0 ml-2 text-sm text-[#8BA3CB]'/>
       </div>

       <div className='h-[50px] w-[50px] rounded-[50px] bg-[#F5F7FA] flex px-4'>
        <Setting className="w-[25px] h-[25px] m-auto" />
       </div>

       <div className='h-[50px] w-[50px] rounded-[50px] bg-[#F5F7FA] flex px-4'>
        <Notification className="w-[25px] h-[25px] m-auto" />
       </div>

        <img
          src={profileImage}
          alt="User avatar"
          loading="lazy"
          className="h-[60px] w-[60px] rounded-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;