import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const CustomChart = ({ chartData }) => {
  var options = {
    plugins: {
      legend: {
          display: false,
          labels: {
              color: 'family-bold'
          }
      }
  },
    
    scales: {
      y: {
        min: 10,
        max: 50,
      },
      x: {
        grid: {
          display: false,
        }
      },
    },
    ticks: {
      stepSize: 10,
    }
  };
  return (
    <div className='w-8/12'>
      <Line data={chartData}
        options={options}

      />
    </div>
  )
}

export default CustomChart;