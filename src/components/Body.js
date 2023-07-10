import React from 'react'
import Sidebar from './Sidebar'

import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Body = () => {
  return (
    <div className=''>
        <Sidebar/>
       <Outlet/>
      
    </div>
  )
}

export default Body