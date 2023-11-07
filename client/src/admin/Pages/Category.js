import React from 'react'
import './Category.css'
const Category = () => {
  return (
    <div>
        <div className='main-container'>
            <div className='top'>
                <div className='t1'>category</div>
                <div className='t2'>
                    <input type='text'/>
                </div>
            </div>
            <div className='bottom'>
                <button>submit</button>
            </div>
        </div>
    </div>
  )
}

export default Category