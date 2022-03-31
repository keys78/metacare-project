import React, { useState } from 'react'
import Button from '../components/Button'
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'
import CustomChart from '../components/CustomChart'
import { filterOptions as options } from '../utils/data'
import { UserData } from '../utils/data'


const FilterActivites = ({ titleHead }) => {
    const [userData, setUserData] = useState({
        labels:UserData.map((data) => data.month) ,
        datasets: [{
            label: "Average response time",
            data: UserData.map((data) => data.time),
            borderColor: '#FB6491',
            pointBorderColor: '#FB6491',
            pointBorderWidth: 1,
            pointBackgroundColor:'#ffffff',
            pointRadius: UserData.map((data) => data.pointRadius),
            borderWidth: 1,
        }]
    })
   

    return (
        <>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl color-tet family-bold'>{titleHead}</h1>

                <div className='flex items-center space-x-6 py-8'>
                    <SearchBar custom placeholder={'Search'} />
                    <FilterBar options={options} newSelected={'Default'} />
                    <span className='opacity-40 '>|</span>
                    <Button text={'Export'} />
                </div>
            </div>

            { titleHead === 'Efficiency Analytics' &&
               <CustomChart chartData={userData}/>
            }
            { titleHead !== 'Efficiency Analytics' &&
                <div>No Data Available</div>
            }
        </>
    )
}

export default FilterActivites