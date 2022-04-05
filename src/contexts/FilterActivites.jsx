import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import FilterBar from '../components/FilterBar'
import SearchBar from '../components/SearchBar'
import CustomChart from '../components/CustomChart'
import styled from 'styled-components'
import { filterOptions as options } from '../utils/data'




const FilterActivites = ({ titleHead }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [allCharts, setAllCharts] = useState([])

    const [def, setdef] = useState('')

    const Arr = [
        { title: 'Average response time', bgColor: '#F05D23' },
        { title: 'Replies per resolution', bgColor: '#3E68FF' },
        { title: 'Average resolution time', bgColor: '#FB6491' },
        { title: 'First contact resolution rate', bgColor: '#07C9E2' },
    ]




    // useEffect(() => {
    //     const xy = Arr && Arr.map((val) => val.title)
    //     setAllCharts(xy)
    // }, [])

    // const jsxArray = dataItems.filter(item => item.isActive).map(item => (
    //     <div>
    //       <h3>{item.title}</p>
    //       <p>{item.body}</p>
    //       <p customAttribute={item.isActive} >{item.tags}</p>    
    //     </div>
    //   ))

    useEffect(() => {
        const renderCharts = Arr && Arr.map((val, i) => (

            <CustomChart key={i}
                chartLabel={val.title}
                background={val.bgColor}
                borderColor={val.bgColor}
                pointerBorderColor={val.bgColor}
                label={val.title}
            />
        ))
        setAllCharts(renderCharts)
        setdef(renderCharts)
    }, [])

    // useEffect(() => {

    //     if (searchTerm !== '') {
    //         const searchFilter =  Arr && Arr.filter((chart) =>  chart.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())  )
    //         setAllCharts(searchFilter)
    //         console.log(searchFilter)
    //     }
    //      else {
    //         setAllCharts(Arr.map((val) => val.title))
    //     }
    // }, [searchTerm])




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
                            <FilterBar options={options} newSelected={'Default'} />
                            <span className='opacity-40 '>|</span>
                            <Button text={'Export'} />
                        </div>

                    </ActionCenterWrapper>
                </div>
            </div>

            {titleHead === 'Efficiency Analytics' &&
                <ChartsDisplay >
                    {allCharts}
                </ChartsDisplay>

            }
            {titleHead !== 'Efficiency Analytics' &&
                <div>No Data Available</div>
            }
        </ChartScreen>
    )
}

const ChartsDisplay = styled.div`
    /* position: fixed;
    top: 250px;
    width: 100%; */
    /* margin-top: 250px; */
`

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