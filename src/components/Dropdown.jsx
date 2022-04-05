import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Dropdown = ({ renderNavLinks, renderIcons, options, activateLink }) => {
    const [isDropped, setIsDropped] = useState(false)
    const [activeSubLinks, setActiveSubLinks] = useState(0)
    const optionsRef = useRef()

    const handleClickOutside = (event) => {
        optionsRef.current &&
            !optionsRef.current.contains(event.target) &&
            setIsDropped(false)
    };

    useEffect(() => {
        document.body.addEventListener('mousedown', handleClickOutside)
    })

    const renderDropdownOptions = options.map((option, i) => (
        <div key={i}>
            <SubLinks
                onClick={() => setActiveSubLinks(i)}
                className={`cursor-pointer ${activeSubLinks === i ? 'sublink-active' : ''}`}>
                {option.title}
            </SubLinks>
        </div>
    ))

    return (
        <SingeDropdownWrapper ref={optionsRef} onClick={activateLink}>
            <SingleDropHandler onClick={() => setIsDropped(!isDropped)}>
                <span>
                    {renderIcons}
                </span>
                <h1
                    className='color-primary text-base'>
                    {renderNavLinks}
                </h1>
                <span>
                    <img
                        className={`float-right transition-all duration-75 ${isDropped ? 'rotate' : ''}`}
                        src="/images/caret_right.png" alt="icon" />
                </span>
            </SingleDropHandler>

            {isDropped &&
                <DropdownContainer  >
                    {renderDropdownOptions}
                </DropdownContainer>
            }
        </SingeDropdownWrapper>
    )
}

const SingleDropHandler = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    align-items: center;
    cursor: pointer;
`

const SubLinks = styled.p`
    color: #060213;
    font-size: 16px;
    padding-left: 20px;
    margin-bottom: 10px;
    border-left: 1px solid transparent;

`

const DropdownContainer = styled.div`
    padding-left: 16px;
    margin-top: 8px;

`

const SingeDropdownWrapper = styled.div`
    margin-bottom: 26px;
    &:hover {
        span:nth-of-type(1) {
        animation: roll-in 0.4s;

    @keyframes roll-in {
     0% { opacity: 0; transform: translateX(-100%) rotate(-120deg); }
     100% { opacity: 1; transform: translateX(0px) rotate(0deg); }}
 } }
   
`

export default Dropdown;