import React from 'react'
import styled from 'styled-components'
import ActivityBar from '../components/ActivityBar'
import SearchBar from '../components/SearchBar'
import { List } from 'phosphor-react'

const TopBar = ({setIsNavOpen, isNavOpen}) => {
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
                <HamburgerToggle>
                <List size={30} onClick={() => setIsNavOpen(!isNavOpen)} color="#696D8C" weight="bold" />
                </HamburgerToggle>
            </div>
        </TopBarWrapper>
    )
}


const TopBarWrapper = styled.div`
    padding:12px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;

    & > div:nth-of-type(1) { display: none; 
        @media screen and (max-width: 650px){
            display: block ;
        }
    }

    @media screen and (max-width: 650px){
        display: grid;
        grid-template-columns:repeat(2, 1fr);

        & > div:nth-of-type(2) { order: 3; grid-column: span 2 / span 2; margin-top: 8px;}
        & > div:nth-of-type(3) { justify-content: end;}
    }
`

const HamburgerToggle = styled.div`
    display:none ;
    position: relative ;

    
    @media screen and (max-width: 1280px){
        display: block;
    }
`

export default TopBar;