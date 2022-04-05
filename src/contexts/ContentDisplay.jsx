import React from 'react'
import TabsNav from './TabsNav'
import TopBar from './TopBar'
import { ContentWrapper } from '../assets/css/GlobalStyled'

const ContentDisplay = ({ setIsNavOpen, isNavOpen }) => {
    return (
        <>
            <ContentWrapper>
                <TopBar setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />
            </ContentWrapper>
            <TabsNav />
        </>
    )
}

export default ContentDisplay