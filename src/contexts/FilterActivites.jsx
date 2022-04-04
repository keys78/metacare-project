import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'
import CustomChart from '../components/CustomChart'
import styled from 'styled-components'
import { filterOptions as options } from '../utils/data'



const FilterActivites = ({ titleHead }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [allCharts, setAllCharts] = useState('')

    const [def, setdef] = useState('')



    const Arr = [
        { title: 'Average response time', bgColor: '#F05D23' },
        { title: 'Replies per resolution', bgColor: '#3E68FF' },
        { title: 'Average resolution time', bgColor: '#FB6491' },
        { title: 'First contact resolution rate', bgColor: '#07C9E2' },
    ]



    useEffect(() => {
        const renderCharts = Arr.map((val, i) => (

            // <div key={i}>
            //    <p>title: {val.title}</p>

            <CustomChart key={i}
                chartLabel={val.title}
                background={val.bgColor}
                borderColor={val.bgColor}
                pointerBorderColor={val.bgColor}
                label={val.title}
            />
            // </div>
        ))

        setAllCharts(renderCharts)
        setdef(renderCharts)
    }, [])

    // useEffect(() => {
    //     if (searchTerm !== '') {
    //         const searchFilter = Arr && Arr.filter((chart) =>
    //             chart.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()) 
    //         )
    //         setAllCharts('Hello Worlds')
    //     } else {
    //         return setAllCharts(def)
    //     }
    //     // if (searchTerm !== '') {
    //     //     const searchFilter =  allCharts && allCharts.filter((chart) =>
    //     //         chart.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()) 
    //     //     )
    //     //     setAllCharts(searchFilter)
    //     // }
    //     //  else {
    //     //     setAllCharts(allCharts)
    //     // }
    //     // return setAllCharts(def)
    // }, [searchTerm])



    return (
        <>
            <div className='titlehead-positioning bg-white'>


                <div className='flex lg:flex-row flex-col lg:items-center justify-between'>
                    <h1 className='lg:text-2xl text-xl color-tet family-bold lg:pt-0 pt-4'>{titleHead}</h1>

                    <div className='flex items-center lg:justify-center justify-between space-x-6 lg:py-8 py-2 lg:pt-0 pt-4'>
                        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} custom placeholder={'Search'} />
                        <div className='flex items-center space-x-2'>
                            <FilterBar options={options} newSelected={'Default'} />
                            <span className='opacity-40 '>|</span>
                            <Button text={'Export'} />
                        </div>

                    </div>
                </div>
            </div>

            {titleHead === 'Efficiency Analytics' &&
                <ChartsDisplay className='border-2 border-red-500'>
                    {allCharts}
                </ChartsDisplay>

            }
            {titleHead !== 'Efficiency Analytics' &&
                <div>No Data Available</div>
            }
        </>
    )
}

const ChartsDisplay = styled.div`
    /* position: fixed;
    top: 250px;
    width: 100%; */
    /* margin-top: 250px; */
`

export default FilterActivites