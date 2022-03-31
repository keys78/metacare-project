import React from 'react'
import Sidebar from '../components/Sidebar'
import ContentDisplay from '../contexts/ContentDisplay'

const Dashboard = () => {
  return (
    <div>
        <Sidebar />
       <ContentDisplay />
    </div>
  )
}

export default Dashboard