import React, { lazy } from 'react';
// import WeeklyActivityChart from '@/components/Dashboard/WeeklyActivityChart';
// import ExpenseStatisticsChart from '@/components/Dashboard/ExpenseStatisticsChart';
// import MyCards from '@/components/Dashboard/MyCards';
// import RecentTransactions from '@/components/Dashboard/RecentTransactions';
// import QuickTransfer from '@/components/Dashboard/QuickTransfer';
// import BalanceHistoryChart from '@/components/Dashboard/BalanceHistoryChart';

import { useState } from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, LineChart, Line, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";


const MyCards = lazy(() => import('../components/dashboard/MyCards'));
const RecentTransaction = lazy(() => import('../components/dashboard/RecentTransaction'));
const WeeklyActivity = lazy(() => import('../components/dashboard/WeeklyActivity'));
const ExpenseStatistics = lazy(() => import('../components/dashboard/ExpenseStatistics'));
const QuickTransfer = lazy(() => import('../components/dashboard/QuickTransfer'));
const BalanceHistory = lazy(() => import('../components/dashboard/BalanceHistory'));


const DashboardPage: React.FC = () => {
  const [transactions] = useState([
    { title: "Deposit from my Card", date: "28 January 2021", amount: -850 },
    { title: "Deposit Paypal", date: "25 January 2021", amount: 2500 },
    { title: "Jemli Wilson", date: "21 January 2021", amount: 5000 },
  ]);

  const expenseData = [
    { name: "Entertainment", value: 30 },
    { name: "Investment", value: 20 },
    { name: "Bill Expense", value: 15 },
    { name: "Others", value: 35 },
  ];
  const COLORS = ["#007bff", "#0066cc", "#ff9900", "#333333"];

  const weeklyData = [
    { day: "Sat", deposit: 300, withdraw: 200 },
    { day: "Sun", deposit: 400, withdraw: 100 },
    { day: "Mon", deposit: 500, withdraw: 250 },
    { day: "Tue", deposit: 450, withdraw: 100 },
    { day: "Wed", deposit: 200, withdraw: 300 },
    { day: "Thu", deposit: 300, withdraw: 200 },
    { day: "Fri", deposit: 350, withdraw: 150 },
  ];

  const balanceHistory = [
    { month: "Jul", balance: 200 },
    { month: "Aug", balance: 300 },
    { month: "Sep", balance: 450 },
    { month: "Oct", balance: 600 },
    { month: "Nov", balance: 400 },
    { month: "Dec", balance: 500 },
    { month: "Jan", balance: 600 },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
     

      {/* Cards Grid */}
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <MyCards></MyCards>
      <RecentTransaction></RecentTransaction>
        {/* My Cards */}
        {/* <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-2xl shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold">My Cards</h2>
            <button className="text-blue-600">See All</button>
          </div>
          <div className="flex gap-4 flex-wrap">
            {[1, 2].map((card, index) => (
              <div key={index} className="flex-1 min-w-[260px] bg-black text-white p-6 rounded-xl relative">
                <p className="text-sm">Balance</p>
                <h3 className="text-xl font-semibold">$5,756</h3>
                <div className="mt-4">
                  <p className="text-xs uppercase">Card Holder</p>
                  <p className="font-semibold">Eddy Cusuma</p>
                </div>
                <div className="flex justify-between items-center mt-6 text-sm">
                  <span>3778 **** 1234</span>
                  <span>12/22</span>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Recent Transaction */}
        
      </div>

      {/* Middle Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Weekly Activity */}
        <div className='col-span-8'>
          <WeeklyActivity></WeeklyActivity>
        </div>
      

        {/* Expense Statistics */}
        <div className="bg-white p-6 rounded-2xl shadow col-span-4">
          <ExpenseStatistics></ExpenseStatistics>
        </div>

        {/* Quick Transfer */}
        <div className="bg-white p-6 rounded-2xl shadow col-span-5">
          <QuickTransfer></QuickTransfer>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow col-span-7">
        <BalanceHistory></BalanceHistory>
      </div>
      </div>

      {/* Balance History */}
      
    </div>
  );
};

export default DashboardPage;