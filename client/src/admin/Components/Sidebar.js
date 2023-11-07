import React from 'react'
import  './Sidebar.css'
import {Link} from 'react-router-dom'
const Sidebar = () => {
  return (
    <div>
        <div className='main-side'>
          <div className='top-main'>
            <div className='logo'></div>
            <div className='back-key'></div>
          </div>
          <div className='middle-one'>
            <div className='heading'>Dashboard</div>
            <div ><Link className='dashboard' to={'./admin'}>Dashboard</Link></div>
          </div>
          <div className='middle-two'>
            <div className='heading'>Location</div>
            <div ><Link className='state' to={'./State'}>State</Link></div>
            <div ><Link className='district' to={'./District'}>District</Link></div>
            <div className='place'><Link className='place' to={'./Place'}>Place</Link></div>
          </div>
          <div className='bottom-main'>
            <div className='heading'>Others</div>
            <div ><Link className='cat' to={'./Category'}>Category</Link></div>
            <div ><Link className='sub-cat'to={'./Subcategory'}>Subcategory</Link></div>
          </div>
        </div>
    </div>
  )
}

export default Sidebar