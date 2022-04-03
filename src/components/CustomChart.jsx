import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import styled from 'styled-components'
import { Chart as ChartJS } from 'chart.js/auto'
import { UserData } from '../utils/data'

const CustomChart = ({ chartLabel, background, borderColor, pointBorderColor, label}) => {

  const [chartData, setChartData] = useState(
    {
        labels: UserData.map((data) => data.month),
        datasets: [{
            label: label,
            data: UserData.map((data) => data.time),
            color: 'red',
            borderColor: borderColor,
            pointBorderColor: pointBorderColor,
            pointBorderWidth: 1,
            pointBackgroundColor: '#ffffff',
            pointRadius: UserData.map((data) => data.pointRadius),
            borderWidth: 1,
        }]
    })



  var options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        // labels: {

        // }
      }
    },
    borderColor: 'greeen',
    scales: {
      y: {
        ticks: {
          color: '#696D8C',
          padding: 8,
        },
        min: 10,
        max: 50,
      },
      x: {
        ticks: {
          color: '#696D8C',
          padding: 15
        },
        grid: {
          display: false,
        }
      },
    },
    ticks: {
      stepSize: 10,

    },
  };
  return (
    <ChartWrapper >

      <ChartContainer>
        <div className='flex items-center justify-between mb-5 pl-2'>

          <PBox className='space-x-4 flex items-center'>
            <h1 className='family-bold'>{chartLabel}</h1>
            <div className='text-xs'>
              4.14%
            </div>
          </PBox>

          <div className='flex space-x-4 items-center'>
            <Priority className='flex space-x-2 items-center'>
              <div style={{ background: background }}></div>
              <h1 className='text-sm color-tet'>High Priority</h1>
            </Priority>
            <span>|</span>
            <CalendarClick className='py-2 px-4 flex items-center space-x-4 cursor-pointer'>
              <h1>This month</h1>
              <img src="../images/calender.png" alt="calender" />
            </CalendarClick>
          </div>
        </div>

        <div style={{ height: "200px" }}>
          <Line data={chartData} options={options} />
        </div>

      </ChartContainer>

      <div className='flex flex-col space-y-5 py-8 px-6'>
        <TimeContainer>
          <h2 className='text-sm pb-2 color-tet'>Response Time</h2>
          <h1 className='text-xl color-tet family-bold'>30 Mins</h1>
        </TimeContainer>
        <TimeContainer>
          <h2 className='text-sm pb-2 color-tet'>Response Time</h2>
          <h1 className='text-xl color-tet family-bold'>1 Hour 30 Mins</h1>
        </TimeContainer>
      </div>

    </ChartWrapper>
  )
}

const ChartWrapper = styled.div`
  border: 1px solid #ECEBF5;
  display: grid;
  grid-template-columns: 80% 20%;
  box-sizing: border-box;
  border-radius: 10px;
  margin-bottom: 24px;
`

const ChartContainer = styled.div`
  /* max-width: 1200px; */
  border-right: 1px solid #ECEBF5;
  padding: 24px;
`

const TimeContainer = styled.div`
  background: #FAFAFA;
  border: 1px solid #ECEBF5;
  border-radius: 10px;
  padding:30px 30px 24px 16px;
`

const CalendarClick = styled.div`
  border: 1px solid #E1E1EB;
  border-radius: 8px;

`
const Priority = styled.div`
  & div {
    background: #F05D23;
    border-radius: 2px;
    /* padding:10px; */ height: 10px; width: 10px;
}
`


const PBox = styled.div`
  & > div { 
    background: rgba(37, 187, 135, 0.1);
    border-radius: 4px;
    color: #25BB87;
    padding:4px 12px;
    }
`
export default CustomChart;