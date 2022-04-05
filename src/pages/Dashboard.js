import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import ContentDisplay from '../contexts/ContentDisplay'

const Dashboard = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleResize = () => {
    window.innerWidth < 1280 ? setIsNavOpen(false) : setIsNavOpen(true)
  }

  useEffect(() => {
    window.innerWidth > 1280 &&  setIsNavOpen(true)
    window.addEventListener("resize", handleResize)
  })

  return (
    <>
      <Sidebar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <ContentDisplay isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </>
  )
}

export default Dashboard;