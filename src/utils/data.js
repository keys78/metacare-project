import { Clock, ChatCircleDots, CalendarBlank, CheckSquare, Users } from "phosphor-react";



export const navLinks = [
    {title: 'Admin', icon: <Users />},
    {title: 'Knowledge Base', icon: <CheckSquare />},
    {title: 'Train SAM', icon: <CheckSquare />},
    {title: 'Agent Inbox', icon: <CalendarBlank />},
    {title: 'Help Center', icon: <Clock  />},
    {title: 'Analytics', icon: <ChatCircleDots mirrored='true' />},
]

export const options = [
    {title: 'Team'},
    {title: 'Knowledge Base'},
    {title: 'Train SAM'},
    {title: 'Help Center'},
]

export const dummyOptions = [
    {title: 'Lorem'},
    {title: 'Lorem Ipssum'},
    {title: 'Lorem Ipsum'},
    {title: 'Lorem Ipsum'},
]


export  const filterOptions = [
    { option: 'Default' },
    { option: 'Ascending' },
    { option: 'Descending' },
]


export const UserData = [
    { id: 1, month:'Jan', time: 12, pointRadius: 0, },
    { id: 2, month:'Feb', time: 19, pointRadius: 5, },
    { id: 3, month:'Mar', time: 33, pointRadius: 0, },
    { id: 4, month:'Apr', time: 46, pointRadius: 5, },
    { id: 5, month:'May', time: 19, pointRadius: 5, },
    { id: 6, month:'Jun', time: 30, pointRadius: 0, },
    { id: 7, month:'Jul', time: 42, pointRadius: 5, },
    { id: 8, month:'Aug', time: 31, pointRadius: 5, },
]