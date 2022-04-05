import React from 'react'
import styled from 'styled-components'


const ActivityBar = () => {
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
                <img className='cursor-pointer' onClick={() => alert('user action')} src={caretDown} alt="caret_down" />
            </div>
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
    background:#fff ;

    & > div:nth-of-type(1) > div {
        background: #F25A68;
        color: #fff;
        border-radius: 4px;
        padding: 0 4px;
        font-size: 12px;
        
    }

`

export default ActivityBar