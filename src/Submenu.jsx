import React, {useEffect, useState} from 'react'; 
// import sublinks from './data';
import { useGlobalContext } from './context';

export default function Submenu({ subMenuLinks}) {

  return (
    <div className='submenu-container'>
        {subMenuLinks &&
        <div>
          {subMenuLinks.map((link)=>(
            <div>
              {link.links.map((linkItem)=>(
                <p>{linkItem.label}</p>
              ))}
            </div>

          ))}

        </div>
        }
    </div>
  )
}

