import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { dummyOptions, navLinks, options } from '../utils/data'
import Dropdown from './Dropdown'
import { IconContext } from "phosphor-react";

const Sidebar = () => {
    const [activeNavLink, setActiveNavLinks] = useState(5)

    const altIcon = ({ nav, i }) =>
        <IconContext.Provider
            value={{
                color: (i === activeNavLink ? '#6837EF' : '#696D8C'),
                size: 20,
            }}
        >
            {<span>{nav.icon}</span>}
        </IconContext.Provider>

    const renderNavLinks = navLinks.map((nav, i) => (
        <div key={i}>
            <Dropdown
                options={nav.title === 'Analytics' ? options : dummyOptions}
                renderIcons={altIcon({ nav, i })}
                renderNavLinks={<span className={i === activeNavLink ? 'color-secondary' : ''}>{nav.title}</span>}
                activateLink={() => setActiveNavLinks(i)}
            />
        </div>
    ))
    return (
        <SideBarWrapper>
            <div>
                <div>
                    <h1>Metacare</h1>
                    <h6>adeyinka@metacare.app</h6>
                </div>
            </div>

            <div className='pr-12 pt-8'>
                {renderNavLinks}
            </div>
        </SideBarWrapper>
    )
}
const SideBarWrapper = styled.section`
    padding: 21px;
    width: 262px;
    border-right: 1px solid #ECEBF5;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    

    & > div:nth-of-type(1) { border: 1px solid #ECEBF5;  border-radius: 8px;} 
    & > div:nth-of-type(1) > div { padding:12px 47px 11px 57px; } 
    & > div:nth-of-type(1) > div > h1 { font-family: 'Gelion-regular'; font-weight: 600; font-size: 14px; line-height: 22px; } 
    & > div:nth-of-type(1) > div > h6 { font-weight: 400; font-size: 12px; line-height: 20px; color: #696D8C; } 
`

export default Sidebar