import React from 'react'
import './Navbar.css'
import Notification from '../Assets/bell.svg'
import Settings from '../Assets/settings.svg'
const Navbar = () => {
  return (
    <div>
        <div className='main-nav'>
          <div className='left'>
            <div className='search'><input className='search-bar' type='search' placeholder='Search'/></div>
          </div>
          <div className='right'>
            <div className='settings-icon'>
              <img src={Settings}/>
            </div>
            <div className='notification-icon'>
              <img src={Notification}/>
              </div>
          </div>
        </div>  
    </div>
  )
}

export default Navbar