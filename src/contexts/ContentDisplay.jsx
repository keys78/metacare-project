import React from 'react'
import TabsNav from './TabsNav'
import TopBar from './TopBar'
import { ContentWrapper } from '../assets/css/GlobalStyled'

const ContentDisplay = () => {
    return (
       <>
        {/* <div className='border-2 border-black'> */}
            <ContentWrapper>
                <TopBar />
            </ContentWrapper>
            
            <TabsNav />
              {/* </div> */}
      </>
    )
}

export default ContentDisplay