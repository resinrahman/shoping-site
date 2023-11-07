import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Category from './Pages/Category'
import Subategory from './Pages/Subcategory'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import './App.css'
import MyState from './Pages/MyState'
import District from './Pages/District'
import Place from './Pages/Place'
const app = () => {
  return (
    <div className='maindiv'>
      <div className='s1'>
      <Sidebar/>
      </div>
      <div className='n1'>
         <Navbar/>
      </div>
    <div className='home'>
    <Routes>
      <Route path='/category' element={<Category/>}/>
      <Route path='/subcategory' element={<Subategory/>}/>
      <Route path='/state' element={<MyState/>}/>
      <Route path='/district' element={<District/>}/>
      <Route path='/place' element={<Place/>}/>
    </Routes>
    </div>
    </div>
  )
}

export default app