// src/components/Last7DaysChart.js
import React from "react";
import { Line } from "react-chartjs-2";

const Last7DaysChart = ({ last7DaysCount }) => {
  const data = {
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
    datasets: [
      {
        label: "Last 7 Days Count",
        data: last7DaysCount,
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.4)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ float: "left", marginLeft: "30px" }}>
      <h2>Last 7 Days Count</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Last7DaysChart;
