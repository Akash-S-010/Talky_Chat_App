import React from 'react'
import Sidebar from '../components/Sidebar'
import ChatSection from '../components/ChatSection'
import RightSidebar from '../components/RightSidebar'
const HomePage = () => {
  
  return (
    <div className='w-full h-screen'>
      <div className='backdrop-blur  overflow-hidden h-full grid grid-cols-1 relative'>
        <Sidebar />
        <ChatSection />
        <RightSidebar />
      </div>
    </div>
  )
}

export default HomePage
