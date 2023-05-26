import React from 'react'
import { useGlobalContext } from './context'

export const Navbar = () => {

const { openSidebar } = useGlobalContext()
console.log(openSidebar);

  return (
    <div>
        <h3>strapi</h3>
        <button onClick={openSidebar}>openSidebar</button>

   
    </div>
    
  )
}
