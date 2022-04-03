import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'
import CustomChart from '../components/CustomChart'
import { filterOptions as options } from '../utils/data'



const FilterActivites = ({ titleHead }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [allCharts, setAllCharts] = useState('')



    const Arr = [
        { title: 'Average response time', bgColor: '#F05D23' },
        { title: 'Replies per resolution', bgColor: '#3E68FF' },
        { title: 'Average resolution time', bgColor: '#FB6491' },
        { title: 'First contact resolution rate', bgColor: '#07C9E2' },
    ]



    useEffect(() => {
        const renderCharts = Arr.map((val, i) => (

            <div key={i}>
               <p>title: {val.title}</p>

                <CustomChart key={i}
                    chartLabel={val.title}
                    background={val.bgColor}
                    borderColor={val.bgColor}
                    pointerBorderColor={val.bgColor}
                    label={val.title}
                />
            </div>
        ))

        setAllCharts(renderCharts)
        console.log(...allCharts)
    }, [])

    useEffect(() => {
        if (searchTerm !== '') {
            const searchFilter = Arr && Arr.filter((chart) =>
                chart.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())
            )
            setAllCharts(searchFilter)
        }
        // if (searchTerm !== '') {
        //     const searchFilter =  allCharts && allCharts.filter((chart) =>
        //         chart.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()) 
        //     )
        //     setAllCharts(searchFilter)
        // }
        //  else {
        //     setAllCharts(allCharts)
        // }
    }, [searchTerm])



    return (
        <>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl color-tet family-bold'>{titleHead}</h1>

                <div className='flex items-center space-x-6 py-8'>
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} custom placeholder={'Search'} />
                    <FilterBar options={options} newSelected={'Default'} />
                    <span className='opacity-40 '>|</span>
                    <Button text={'Export'} />
                </div>
            </div>

            {titleHead === 'Efficiency Analytics' &&
                <div>
                    {allCharts}
                </div>

            }
            {titleHead !== 'Efficiency Analytics' &&
                <div>No Data Available</div>
            }
        </>
    )
}

export default FilterActivites