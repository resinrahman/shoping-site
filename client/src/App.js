import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Admin from './admin/App'
import Guest from './guest/App'
import User from './user/App'
import Shop from './shop/App'
const App = () => {
  return (
    <Routes>
      <Route path='/admin/*' element={<Admin/>}/>
      <Route path='/guest' element={<Guest/>}/>
      <Route path='/user' element={<User/>}/>
      <Route path='/shope' element={<Shop/>}/>
    </Routes>
  )
}

export default App