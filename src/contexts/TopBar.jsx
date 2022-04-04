import React from 'react'
import styled from 'styled-components'
import ActivityBar from '../components/ActivityBar'
import SearchBar from '../components/SearchBar'

const TopBar = () => {
    return (
        <TopBarWrapper>
            <SearchBar placeholder={'Ask us any question'} />
            <ActivityBar />
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