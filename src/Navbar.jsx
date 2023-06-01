import React from 'react'
import { useGlobalContext } from './context'
import { FaBars, FaWindowClose } from 'react-icons/fa'
import sublinks from './data'

//components:
import Navlinks from './Navlinks'
import Sidebar from './Sidebar'


export const Navbar = () => {

const { isSidebarOpen, closeSidebar, openSidebar } = useGlobalContext()
// console.log(openSidebar);

const handleSidebarToggle = () => {
    if(isSidebarOpen) {
        closeSidebar()
    } else {
        openSidebar()
    }
}

  return (
    <div className='navbar-container'>
        <div className="logo">
            <h3>strapi</h3>
            <Navlinks sublinks={sublinks}/> 
        </div>

        <div className="sidebar">
            {isSidebarOpen && <Sidebar/>}
        </div>

        <div className='bar'> <button onClick={handleSidebarToggle}>{isSidebarOpen ? <FaWindowClose/> : <FaBars/>}</button></div>
    </div>
    
  )
}
