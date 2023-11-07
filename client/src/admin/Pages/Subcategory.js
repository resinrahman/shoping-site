import React from 'react'
import './Subcategory.css'
const Subcategory = () => {
  return (
    <div>
        <div className='grid-box'>
            <div className='item-cat'>
                <div className='c'>category</div>
            </div>
            <div className='item-drop'>
               <div className='d'> <select>
                    <option></option>
                </select> </div> 
            </div>
            <div className='item-subcat'>
                <div className='sc'>Subcategory</div>
            </div>
            <div className='item-box'>
                <div className='b'><input type='text'/></div>
            </div>
            <div className='item-submit'>
                <div className='st'><button>submit</button></div>
            </div>
        </div>
    </div>
  )
}

export default Subcategory