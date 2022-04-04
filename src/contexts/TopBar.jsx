import React from 'react'
import styled from 'styled-components'
import ActivityBar from '../components/ActivityBar'
import SearchBar from '../components/SearchBar'
import { List } from 'phosphor-react'

const TopBar = () => {
    return (
        <TopBarWrapper>
            <div>
                <img className="w-12" src="images/notion_logo.png" alt="logo" />
            </div>
            <div>
                <SearchBar placeholder={'Ask us any question'} />
            </div>
            <div className="flex space-x-4 items-center">
                <ActivityBar />
                <List size={24} color="#696D8C" weight="bold" />
            </div>
        </TopBarWrapper>
    )
}


const TopBarWrapper = styled.div`
    padding:12px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* width: 100%; */
    background: #fff;
`

export default TopBar;