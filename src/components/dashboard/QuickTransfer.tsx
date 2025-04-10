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
    { name: "Livia Bator", role: "CEO", img: "/path/to/livia.jpg" },
    { name: "Randy Press", role: "Director", img: "/path/to/randy.jpg" },
    { name: "Workman", role: "Designer", img: "/path/to/workman.jpg" },
    // Add more users if you want
  ];

  return (
    <div className="p-6 bg-white rounded-3xl border-2 border-blue-200">
    <div className="flex items-center overflow-x-auto gap-6 pb-4 scrollbar-hide">
      {users.map((user, idx) => (
        <div key={idx} className="flex flex-col items-center min-w-[80px]">
          <img
            src={user.img}
            alt={user.name}
            loading="lazy"
            className="w-16 h-16 rounded-full object-cover"
          />
          <p className="mt-2 font-bold text-sm">{user.name}</p>
          <p className="text-xs text-blue-400">{user.role}</p>
        </div>
      ))}
      <button className="flex items-center justify-center w-10 h-10 bg-white border rounded-full shadow-md shrink-0">
        <span className="text-2xl">{'>'}</span>
      </button>
    </div>

    <div className="mt-6 flex items-center bg-gray-100 rounded-full overflow-hidden">
      <input
        type="text"
        placeholder="Write Amount"
        className="flex-1 px-6 py-3 bg-transparent outline-none placeholder-gray-400 text-center"
        value="525.50"
        readOnly
      />
      <button className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full">
        Send 
        {/* <FaPaperPlane /> */}
      </button>
    </div>
  </div>
  );
};

export default QuickTransfer;