import React, { useEffect, useState } from 'react';
import { useGlobalContext } from './context';
import Submenu from './Submenu';
import sublinks from './data';


export default function Navlinks({ sublinks }) {
const { pageId, setPageId } = useGlobalContext()
const [subMenuLinks, setSubMenuLinks] = useState(null)
const [ newLinks, setNewLinks ] = useState(sublinks)


const handleMouseEnter = (id) => {
    setPageId(id)
}

 useEffect(() => {
    const arr = newLinks.filter((item) => item.pageId === pageId)
    setSubMenuLinks(arr)
  }, [pageId]);

  return (
    <div>
        {sublinks && 
        <div className='link-container'>
        {sublinks.map((link)=>{
            return(
                <div key={link.pageId} className='links'>
                    <p 
                    onMouseEnter={()=>handleMouseEnter(link.pageId)}
                    >{link.page}</p> 
                </div>
                )
            })}
           
        </div>
        } 
        <Submenu subMenuLinks={subMenuLinks} />
    </div>
  )
}
