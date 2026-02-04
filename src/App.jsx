import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Products from './page/Products'
import Login from './page/Login'
import Signup from './page/signup'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App