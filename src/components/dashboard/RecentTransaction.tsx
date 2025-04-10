import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import CardPayment from "../../assets/icons/card-payment.svg?react";
import PaypalPayment from "../../assets/icons/paypal-payment.svg?react";
import CashPayment from "../../assets/icons/cash-payment.svg?react";



const RecentTransaction: React.FC = () => {
const [transactions] = useState([
    { title: "Deposit from my Card", date: "28 January 2021", amount: -850, type:'card' },
    { title: "Deposit Paypal", date: "25 January 2021", amount: 2500, type:'paypal' },
    { title: "Jemli Wilson", date: "21 January 2021", amount: 5000, type:'cash' },
  ]);
  

  return (
    <div className="">
              <h2 className="font-semibold mb-4">Recent Transaction</h2>
              <div className="bg-white p-6 rounded-2xl grid grid-fow-3 gap-2">
                {transactions.map((tx, idx) => (
                  <div key={idx} className="grid gap-4 grid-cols-12 gap-6">
                    <div className='col-span-3'>
                    {tx.type === 'card' && (<CardPayment className="w-[55px] h-[55px]" />)}
                    {tx.type === 'paypal' && (<PaypalPayment className="w-[55px] h-[55px]" />)}
                    {tx.type === 'cash' && (
                      <div className="w-[55px] h-[55px] bg-[#DCFAF8] rounded-[50px] flex justify-center items-center">
                            <CashPayment className="w-[28px] h-[28px]" />
                      </div>
                      
                      )}
                    </div>
                    <div  className='col-span-6 flex flex-col justify-center'>
                      <p className="text-md">{tx.title}</p>
                      <p className="text-xs text-[#718EBF]">{tx.date}</p>
                    </div>
                    <div className={`col-span-3 flex justify-end items-center text-md ${tx.amount > 0 ? "text-[#41D4A8]" : "text-[#FF4B4A]"}`}>
                      {tx.amount > 0 ? `+$${tx.amount}` : `-$${Math.abs(tx.amount)}`}
                    </div>
                  </div>
                ))}
              </div>
            </div>
  );
};

export default RecentTransaction;