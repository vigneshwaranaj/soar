import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const COLORS = ["#343C6A", "#FC7900", "#232323", "#396AFF"];

const ExpenseStatistics = () => {
  const expenseData = [
    { name: "Entertainment", value: 30 },
    { name: "Bill Expense", value: 15 },
    { name: "Others", value: 35 },
    { name: "Investment", value: 20 },
  ];

  const total = expenseData.reduce((sum, item) => sum + item.value, 0);

  const data = {
    labels: expenseData.map((d) => d.name),
    datasets: [
      {
        data: expenseData.map((d) => d.value),
        backgroundColor: expenseData.map((_, i) => COLORS[i % COLORS.length]),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        color: '#fff',
        formatter: (value: number, ctx: any) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          const percentage = ((value / total) * 100).toFixed(1) + "%";
          return `${label}\n${percentage}`;
        },
        font: {
          weight: 'bold',
          size: 12,
        },
      },
    },
  };

  return (
    <div className="h-[250px]">
      <Pie data={data} options={options} />
    </div>
  );
};

export default ExpenseStatistics;