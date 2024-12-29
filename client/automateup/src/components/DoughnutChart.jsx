// import React from 'react';
// import { Doughnut } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const DoughnutChart = () => {
//   const data = {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
//     datasets: [
//       {
//         label: 'Votes',
//         data: [12, 19, 3, 5, 2],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top',
//       },
//       tooltip: {
//         enabled: true,
//       },
//     },
//   };

//   return (
//     <div className="max-w-lg mx-auto">
//       <Doughnut data={data} options={options} />
//     </div>
//   );
// };

// export default DoughnutChart;

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ['Discovery', 'Research and Analysis', 'Digital Product Development', 'Quality Assurance', 'Launch and Support'],
    datasets: [
      {
        label: 'Approx. required weeks',
        data: [12, 16, 20, 10, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 2, // Slightly larger border for better separation
        hoverOffset: 10, // Larger hover effect for better interaction
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '70%', // Make the doughnut hole larger for modern look
    plugins: {
      legend: {
        position: 'bottom', // Position legend at bottom for a cleaner look
        labels: {
          font: {
            size: 14, // Slightly larger font for labels
            family: 'Arial, sans-serif', // Custom font for better appearance
          },
          color: '#333', // Darker text color for better readability
          padding: 20, // More space around the legend items
        },
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0,0,0,0.8)', // Darker background for tooltip
        titleFont: {
          size: 16,
          family: 'Arial, sans-serif',
        },
        bodyFont: {
          size: 14,
        },
        padding: 10,
        cornerRadius: 8, // Rounded tooltip corners
      },
    },
  };

  return (
    <div className="max-w-md p-6 mx-auto bg-white rounded-lg shadow-md mt-14">
      <Doughnut data={data} options={options} />
      <div className="mt-4 text-lg font-bold text-center text-gray-700">
        Overall Process
      </div>
    </div>
  );
};

export default DoughnutChart;
