import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CardChipWhite from "../../assets/icons/card_chip_white.svg?react";
import MasterCardwhite from "../../assets/icons/master-card-white.svg?react";
import Notification from "../assets/icons/notification.svg?react";



const MyCards: React.FC = () => {

  

  return (
    <div className="col-span-1 lg:col-span-2">
    <div className="flex justify-between items-center mb-4">
      <h2 className="font-semibold">My Cards</h2>
      <button className="text-blue-600">See All</button>
    </div>
    <div className="grid gap-4 grid-cols-2 gap-6">
      {[1, 2].map((card, index) => (
        <div key={index} className="bg-gradient-to-r from-[#5B5A6F] to-[#000000] text-white p-6 rounded-xl relative">
          <div className='grid grid-cols-2 gap-4'>
              <div>
                <div className='text-[12px]'>Balance</div>
                <div className='text-[20px]'>$5,756</div>
              </div>
              <div><CardChipWhite className="w-[35px] h-[35px] float-right"></CardChipWhite></div>
            </div>
            <div className='grid grid-cols-2 gap-4 py-8'>
              <div>
                <div className='text-[12px]'>CARD HOLDER</div>
                <div className='text-[15px]'>Eddy Cusuma</div>
              </div>
              <div>
                <div className='text-[12px]'>VALID THRU</div>
                <div className='text-[15px]'>12/22</div>
              </div>
            </div>
          <div className="grid grid-cols-12 gap-1 text-sm">
            <div className='text-[22px] col-span-10'>3778 **** 1234</div>
            <div className='col-span-2'>
               <MasterCardwhite className="w-[44px] h-[30px] float-right"></MasterCardwhite>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default MyCards;