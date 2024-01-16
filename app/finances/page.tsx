"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from 'react-chartjs-2';

  export default function Home() {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
      labels: [
        '$GHO',
        '$ETH',
        '$USDC'
      ],
      datasets: [{
        label: 'Balance in $',
        data: [300, 50, 100],
        backgroundColor: [
          '#9381ff',
          '#ff5d8f',
          '#8ecae6'
        ],
        hoverOffset: 4
      }]
    };
    return (
      <main className="h-[84vh] px-4 py-8 relative overflow-hidden flex items-center justify-center">
          <Pie data={data} />
      </main>
    )
  }