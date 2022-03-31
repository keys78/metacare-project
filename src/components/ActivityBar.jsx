import React, { useState }  from 'react'
import styled from 'styled-components'


const ActivityBar = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(false)
    const userIcon = 'images/user_icon.png'
    const notifIcon = 'images/icon_bell.png'
    const caretDown = 'images/caret_down.png'

    return (
        <ActivityWrapper className='space-x-4'>
            <div className='flex gap-1 items-center'>
                <img src={notifIcon} alt="notification_icon" />
                <div>3</div>
            </div>
            <span className='opacity-40'>|</span>
            <div className='flex space-x-1 items-center'>
                <img src={userIcon} alt="user_icon" />
                <img className='cursor-pointer' onClick={() => alert('open')} src={caretDown} alt="caret_down" />
            </div>

            {/* {isToggleOpen &&
            <ToggleDrop>
                <h1>Accounts</h1>
                <h1>Settings</h1>
                <div/>
                <h1>Logout</h1>
            </ToggleDrop>
            } */}
        </ActivityWrapper>
    )
}

const ActivityWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    border: 1px solid #ECEBF5;
    border-radius: 8px;
    position: relative;

    & > div:nth-of-type(1) > div {
        background: #F25A68;
        color: #fff;
        border-radius: 4px;
        padding: 0 4px;
        font-size: 12px;
        
    }

`

const ToggleDrop = styled.div`
    
`

export default ActivityBar