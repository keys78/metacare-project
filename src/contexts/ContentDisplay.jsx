import React from 'react'
import TabsNav from './TabsNav'
import TopBar from './TopBar'
import { ContentWrapper } from '../assets/css/GlobalStyled'

const ContentDisplay = () => {
    return (
        <>
            <ContentWrapper>
                <TopBar />
            </ContentWrapper>
            <TabsNav />
        </>
    )
}

export default ContentDisplay