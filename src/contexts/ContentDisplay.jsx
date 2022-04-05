import React from 'react'
import TabsNav from './TabsNav'
import TopBar from './TopBar'
import { ContentWrapper } from '../assets/css/GlobalStyled'
import ScrollToTopClick from '../components/ScrollToTopClick'

const ContentDisplay = ({ setIsNavOpen, isNavOpen }) => {
    return (
        <>
            <ContentWrapper>
                <TopBar setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />
                <ScrollToTopClick />
            </ContentWrapper>
            <TabsNav />
        </>
    )
}

export default ContentDisplay