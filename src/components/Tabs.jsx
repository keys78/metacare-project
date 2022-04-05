import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const Tabs = ({ children, active = 0 }) => {
    const [activeTab, setActiveTab] = useState(active)
    const [tabsData, setATabsData] = useState([])

    useEffect(() => {
        let data = [];

        React.Children.forEach(children, element => {
            if (!React.isValidElement(element)) return;

            const { props: { tab, children } } = element;
            data.push({ tab, children });
        })
        setATabsData(data)
    }, [children])

    return (
        <div>
            <ul className='tabs-list space-x-10 bg-white'>
                {
                    tabsData.map(({ tab }, idx) => (
                        <TabsList key={idx}>
                            <button className={`nav-link color-primary ${idx === activeTab ? "active" : ""}`}
                                onClick={() => setActiveTab(idx)}
                            >
                                {tab}
                            </button>
                        </TabsList>
                    ))
                }
            </ul>

            <div className='tab-content'>
                {tabsData[activeTab] && tabsData[activeTab].children}
            </div>
        </div>
    )
}

const TabPane = ({ children }) => {
    return { children }
}

Tabs.TabPane = TabPane

const TabsList = styled.li`
    margin-bottom: -2px;
    & > button { padding-bottom: 17px; }
`



export default Tabs;