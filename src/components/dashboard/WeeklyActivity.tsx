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

const WeeklyActivity: React.FC = () => {
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

  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      {/* <h2 className="font-semibold mb-4">Weekly Activity</h2> */}
      <div className="h-[300px]">
        <Bar className='!w-[100%]' data={chartData} options={options} />
      </div>
    </div>
  );
};

export default WeeklyActivity;