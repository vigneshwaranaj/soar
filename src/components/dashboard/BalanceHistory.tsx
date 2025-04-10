import React from 'react';
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";

import { useEffect, useRef } from "react";

// Register necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

const BalanceHistory: React.FC = () => {

  const chartRef = useRef<any>(null);

  const data = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: "Revenue",
        data: [150, 300, 450, 850, 100, 500, 650],
        fill: true,
        borderColor: "#2563EB", // Blue Line
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "rgba(59,130,246,0.2)"); // Light blue
          gradient.addColorStop(1, "rgba(59,130,246,0)");
          return gradient;
        },
        tension: 0.4, // Smooth curves
        pointRadius: 0, // No points
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#94a3b8", font: { size: 12 } },
      },
      y: {
        grid: { color: "#e2e8f0" },
        ticks: { color: "#94a3b8", font: { size: 12 } },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: { mode: "index", intersect: false },
    },
  };

  return (
    <div className="p-4 h-[250px]">
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default BalanceHistory;