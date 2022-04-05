import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import ContentDisplay from '../contexts/ContentDisplay'

const Dashboard = () => {
  const [isNavOpen, setIsNavOpen] = useState(true)

  //choose the screen size 
const handleResize = () => {
  window.innerWidth < 1280 ?
      setIsNavOpen(false)
 :
      setIsNavOpen(true)
  
}

// create an event listener
useEffect(() => {
  window.addEventListener("resize", handleResize)
})

// finally you can render components conditionally if isMobile is True or False 
  return (
    <div>
        <Sidebar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
       <ContentDisplay isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
    </div>
  )
}

export default Dashboard