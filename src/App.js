import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Shopping from './Shopping'
import DisplayData from './DisplayData'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Shopping/>}>Shopping</Route>
        <Route path='/DisplayData' element={<DisplayData/>}>Display Data</Route>
       
      </Routes>
      
    </div>
  )
}
