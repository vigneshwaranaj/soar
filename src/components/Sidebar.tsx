import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';
import Dashboard from "../assets/icons/home.svg?react";
import Transactions from '../assets/icons/transactions.svg?react';
import Accounts from '../assets/icons/accounts.svg?react';
import Investment from '../assets/icons/investment.svg?react';
import CreditCard from '../assets/icons/credit-card.svg?react';
import Loans from '../assets/icons/loan.svg?react';
import Services from '../assets/icons/services.svg?react';
import MyPrivileges from '../assets/icons/my-privileges.svg?react';
import Settings from '../assets/icons/settings.svg?react';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const toggleSidebar = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        window.innerWidth < 768 // Only on mobile (md breakpoint is 768px)
      ) {
        setIsOpen(false);
      } else {
        console.log(sidebarRef.current);
        console.log('herer');
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);
  return (
    // <div className="w-64 bg-white shadow-md h-full flex flex-col">
    //   <div className="p-6 font-bold text-lg text-blue-600">
    //     FinanceApp
    //   </div>

    //   <nav className="flex-1 px-4 space-y-2">
    //     <NavLink
    //       to="/dashboard"
    //       className={({ isActive }) =>
    //         `block px-4 py-2 rounded hover:bg-blue-100 ${isActive ? 'bg-blue-200 font-semibold' : ''}`
    //       }
    //     >
    //       Dashboard
    //     </NavLink>

    //     <NavLink
    //       to="/settings"
    //       className={({ isActive }) =>
    //         `block px-4 py-2 rounded hover:bg-blue-100 ${isActive ? 'bg-blue-200 font-semibold' : ''}`
    //       }
    //     >
    //       Settings
    //     </NavLink>
    //   </nav>
    // </div>
    <div className="flex">
      {/* Mobile Topbar */}
      <div className="fixed w-full bg-white shadow-md p-4 flex justify-between items-center md:hidden">
        <button onClick={toggleSidebar}>
          Menu
        </button>
        <h1 className="text-xl font-bold">My App</h1>
      </div>

      {/* Sidebar */}
      <div className={`z-10 border-1 border-[#E6EFF5] fixed top-0 left-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative md:transform-none`}>
        <div className="text-2xl font-bold md:h-[100px] flex items-center px-8">
          <img className="w-[35px] h-[35px]" loading="lazy" src={logo} /> 
          <div className='text-[25px] ml-2'>Soat Task</div>
        </div>
        <ul className="space-y-6">

          <li className='py-5 mb-0'>
            <NavLink to="/dashboard" className={({ isActive }) => `px-8 flex items-center ${isActive ? 'text-[#232323]' : 'text-[#B1B1B1]'}`} >
            {/* <img className='w-[25px] h-[25px]' src={dashboard} /> */}
            <Dashboard className="w-[25px] h-[25px] ml-1" />
            <div 
            className='ml-4 text-lg '>Dashboard</div>
            </NavLink>
          </li>

          <li className='py-5 mb-0'>
            <NavLink to="/transactions" className={({ isActive }) => `px-8 flex items-center ${isActive ? 'text-[#232323]' : 'text-[#B1B1B1]'}`} >
            <Transactions className='w-[25px] h-[25px] ml-1' />
            <div className='ml-4 text-lg'>Transactions</div>
            </NavLink>
          </li>

          <li className='py-5 mb-0'>
            <NavLink to="/accounts" className={({ isActive }) => `px-8 flex items-center ${isActive ? 'text-[#232323]' : 'text-[#B1B1B1]'}`} >
            <Accounts className='w-[25px] h-[25px] ml-1' />
            <div className='ml-4 text-lg'>Accounts</div>
            </NavLink>
          </li>

          <li className='py-5 mb-0'>
            <NavLink to="/investments" className={({ isActive }) => `px-8 flex items-center ${isActive ? 'text-[#232323]' : 'text-[#B1B1B1]'}`} >
            <Investment className='w-[25px] h-[25px] ml-1' />
            <div className='ml-4 text-lg'>Investments</div>
            </NavLink>
          </li>

          <li className='py-5 mb-0'>
            <NavLink to="/credit-cards" className={({ isActive }) => `px-8 flex items-center ${isActive ? 'text-[#232323]' : 'text-[#B1B1B1]'}`} >
            <CreditCard className='w-[25px] h-[25px] ml-1' />
            <div className='ml-4 text-lg'>Credit Cards</div>
            </NavLink>
          </li>

          <li className='py-5 mb-0'>
            <NavLink to="/loans" className={({ isActive }) => `px-8 flex items-center ${isActive ? 'text-[#232323]' : 'text-[#B1B1B1]'}`} >
            <Loans className='w-[25px] h-[25px] ml-1' />
            <div className='ml-4 text-lg'>Loans</div>
            </NavLink>
          </li>

          <li className='py-5 mb-0'>
            <NavLink to="/services" className={({ isActive }) => `px-8 flex items-center ${isActive ? 'text-[#232323]' : 'text-[#B1B1B1]'}`} >
            <Services className='w-[25px] h-[25px] ml-1' />
            <div className='ml-4 text-lg'>Services</div>
            </NavLink>
          </li>

          <li className='py-5 mb-0'>
            <NavLink to="/my-privileges" className={({ isActive }) => `px-8 flex items-center ${isActive ? 'text-[#232323]' : 'text-[#B1B1B1]'}`} >
            <MyPrivileges className='w-[25px] h-[25px] ml-1' />
            <div className='ml-4 text-lg'>My Privileges</div>
            </NavLink>
          </li>

          <li className='py-5 mb-0'>
            <NavLink to="/settings" className={({ isActive }) => `px-8 flex items-center ${isActive ? 'text-[#232323]' : 'text-[#B1B1B1]'}`} >
            <Settings className='w-[25px] h-[25px] ml-1' />
            <div className='ml-4 text-lg'>Setting</div>
            </NavLink>
          </li>

        </ul>
      </div>

    </div>
  );
};

export default Sidebar;