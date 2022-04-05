import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'
import CustomChart from '../components/CustomChart'
import styled from 'styled-components'
import { filterOptions as options, chartData, errorSearchResponse } from '../utils/data'





const FilterActivites = ({ titleHead }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [allData, setAllData] = useState(chartData);
    const [filteredData, setFilteredData] = useState(allData);


    useEffect(() => {
        let result = [];
        result = allData && allData.filter((name) =>
            name.title.toLowerCase().includes(searchTerm.toLowerCase()))
        setFilteredData(result)
    }, [searchTerm])


    const renderFilteredData = filteredData.map((val, i) => (
        <div key={i}>
            <CustomChart key={i}
                chartLabel={val.title}
                background={val.bgColor}
                borderColor={val.bgColor}
                pointerBorderColor={val.bgColor}
                label={val.title}
            />
        </div>
    ))


    const onClick = (val) => {
        let filteredCharts = [];

        const defaultSort = val.option === "Default"
        const SortByAscendingOrder = val.option === "Ascending"
        const SortByDescendingOrder = val.option === "Descending"

        SortByAscendingOrder && filteredCharts.push(...filteredData.sort((a, b) => ( a.title.localeCompare(b.title) )))
        SortByDescendingOrder && filteredCharts.push(...filteredData.sort((a, b) => ( b.title.localeCompare(a.title) )))
        defaultSort && filteredCharts.push(...allData)
        setFilteredData(filteredCharts)
        
    }


    return (
        <ChartScreen>
            <div id="header" className='titlehead-positioning bg-white'>
                <div className='loco flex lg:flex-row flex-col lg:items-center justify-between pt-16'>
                    <h1 className='x-class lg:text-2xl text-xl color-tet family-bold lg:pt-0 pt-4'>{titleHead}</h1>
                    <ActionCenterWrapper className='flex items-center lg:justify-center justify-between space-x-6 lg:py-8 py-2 lg:mt-0 mt-4'>
                        <div>
                            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} custom placeholder={'Search'} />
                        </div>
                        <div className='flex items-center space-x-2'>
                            <FilterBar options={options} onClick={onClick} newSelected={'Default'} />
                            <span className='opacity-40 '>|</span>
                            <Button text={`Export ${ filteredData.length > 0 ? filteredData.length : ''}`} />
                        </div>
                    </ActionCenterWrapper>
                </div>
            </div>

            {titleHead === 'Efficiency Analytics' &&
                <>
                    {filteredData.length > 0 ? renderFilteredData : errorSearchResponse }
                </>
            }
            {
                titleHead !== 'Efficiency Analytics' &&
                <div>No Data Available...</div>
            }
        </ChartScreen >
    )
}


const ChartScreen = styled.div`
    padding: 0 56px;

    @media screen and (max-width: 850px){
        padding: 0 15px;
    }
`

const ActionCenterWrapper = styled.div`

     @media screen and (max-width: 650px){
        display: grid;
        grid-template-columns:repeat(2, 1fr);

        & > div:nth-of-type(1) { grid-column: span 2 / span 2; margin: -4px 0 12px 0;}
        & > div:nth-of-type(2) { width: 100%; grid-column: span 2 / span 2; justify-content:space-between ; margin:0 !important ;
            & > span:nth-of-type(1) {display: none}
        }
    }
`

export default FilterActivites