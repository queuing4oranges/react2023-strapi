import React from 'react'; 
import sublinks from './data';

export default function Sidebar() {
console.log(sublinks);


  return (
    <div className='sidebar-container'>
        {sublinks.map((link)=> {
          return (
              <div key={link.pageId}>
                <h4>{link.page}</h4>
                <a href={link.url}><p>{link.label}</p></a>

                {link.links.map((item)=>(
                  <a  key={link.pageId} href={item.url}><p>{item.label}</p></a>
                  
                ))}
              </div>
            )
        })
        }
    </div>
  )
}
