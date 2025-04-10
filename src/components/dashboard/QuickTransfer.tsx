import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import React from 'react';

// Register necessary Chart.js components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const QuickTransfer: React.FC = () => {
  const weeklyData = [
    { day: "Sat", deposit: 300, withdraw: 200 },
    { day: "Sun", deposit: 400, withdraw: 100 },
    { day: "Mon", deposit: 500, withdraw: 250 },
    { day: "Tue", deposit: 450, withdraw: 100 },
    { day: "Wed", deposit: 200, withdraw: 300 },
    { day: "Thu", deposit: 300, withdraw: 200 },
    { day: "Fri", deposit: 350, withdraw: 150 },
  ];

  // Prepare chart data
  const chartData = {
    labels: weeklyData.map(item => item.day),
    datasets: [
      {
        label: 'Withdraw',
        data: weeklyData.map(item => item.withdraw),
        backgroundColor: '#232323',
        borderRadius: {
          topLeft: 30,
          topRight: 30,
          bottomLeft: 30,
          bottomRight: 30,
        },
        barThickness: 15, // Same as barSize
      },
      {
        label: 'Deposit',
        data: weeklyData.map(item => item.deposit),
        backgroundColor: '#396AFF',
        borderRadius: {
          topLeft: 30,
          topRight: 30,
          bottomLeft: 30,
          bottomRight: 30,
        },
        barThickness: 15,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          boxWidth: 15,
          boxHeight: 15,
          padding: 20,
        },
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      x: {
        stacked: false,
        barPercentage: 0.4,
        categoryPercentage: 0.7,
        grid: {
          color: '#eee',
          borderDash: [5, 5],
        },
      },
      y: {
        grid: {
          color: '#eee',
          borderDash: [5, 5],
        },
        beginAtZero: true,
      },
    },
  };

  const users = [
    { name: "Livia Bator", role: "CEO", img: "/profile-image.svg" },
    { name: "Randy Press", role: "Director", img: "/profile-image.svg" },
    { name: "Workman", role: "Designer", img: "/profile-image.svg" },
    // Add more users if you want
  ];

  return (
    <div className="p-6">
    <div className="flex items-center overflow-x-auto gap-6 pb-4 scrollbar-hide">
      {users.map((user, idx) => (
        <div key={idx} className="flex flex-col items-center min-w-[100px]">
          <img
            src={user.img}
            alt={user.name}
            loading="lazy"
            className="w-[70px] h-[70px] rounded-full object-cover"
          />
          <p className="mt-2 text-[15px] text-[#232323]">{user.name}</p>
          <p className="text-xs text-blue-400 text-[15px] text-[#718EBF]">{user.role}</p>
        </div>
      ))}
      {/* <button className="flex items-center justify-center w-10 h-10 bg-white border rounded-full shadow-md shrink-0">
        <span className="text-2xl">{'>'}</span>
      </button> */}
    </div>

    <div className="mt-6 flex items-center justify-between">
      <div>Write Amount</div>
      <div className='bg-gray-100 rounded-full overflow-hidden flex items-center'>
      <input
        type="text"
        placeholder="Write Amount"
        className="flex-1 px-6 py-3 bg-transparent outline-none text-[#718EBF]text-center"
        value="525.50"
      />
      <button className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full">
        Send 
        {/* <FaPaperPlane /> */}
      </button>
      </div>
     
    </div>
  </div>
  );
};

export default QuickTransfer;